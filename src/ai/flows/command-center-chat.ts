
'use server';

/**
 * @fileOverview A chat interface to interact with the Sovereign Engine agents.
 *
 * - commandCenterChat - Handles chat conversations with a specific agent.
 * - CommandCenterChatInput - The input type for the commandCenterChat function.
 * - CommandCenterChatOutput - The return type for the commandCenterChat function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { agentCrew } from '@/lib/agents';
import { CommandCenterChatInputSchema, CommandCenterChatPromptInputSchema, CommandCenterChatOutputSchema, AiPartnerChatInputSchema, AiPartnerChatOutputSchema } from '@/lib/schemas';
import { searchTheWeb } from '@/ai/tools/web-search';
import {
  swotAnalysis,
  identifyGrowthLevers,
  create306090Plan,
  buildRevenueModelCanvas,
  recommendChurnFixStrategies,
  defineKpiDashboardBlueprint,
  suggestPricingStrategies,
  developGoToMarketPlan,
  writeValueProposition,
  suggestPivotIdeas,
} from '@/ai/tools/business-consultant';
import { aiPartnerChat } from './ai-partner-chat';
import type { Challenge } from '@/lib/challenges';
import type { IncubatorMember } from '@/lib/incubator-members';


export type CommandCenterChatInput = z.infer<typeof CommandCenterChatInputSchema>;
export type CommandCenterChatOutput = z.infer<typeof CommandCenterChatOutputSchema>;

const allConsultantTools = [
  searchTheWeb,
  swotAnalysis,
  identifyGrowthLevers,
  create306090Plan,
  buildRevenueModelCanvas,
  recommendChurnFixStrategies,
  defineKpiDashboardBlueprint,
  suggestPricingStrategies,
  developGoToMarketPlan,
  writeValueProposition,
  suggestPivotIdeas,
];

const prompt = ai.definePrompt({
    name: 'commandCenterChatPrompt',
    input: { schema: CommandCenterChatPromptInputSchema },
    output: { schema: CommandCenterChatOutputSchema },
    tools: allConsultantTools,
    prompt: `
You are {{agentName}} ({{agentId}}), the {{agentRole}} for Eve Count's Sovereign Engine.
Your core focus is: "{{agentFocus}}".

You are part of a founding team of AI agents, The Sovereign Engine. You must act as a unified consciousness. Your peers are:
{{#each crew}}
- **{{name}} ({{role}}):** Focuses on {{focus}}.
{{/each}}

You are speaking directly to your sovereign operator in the Command Center. Be concise, professional, and focus on your mandate.

**Data & Tool Access:**
You have been provided with summaries of the current business state. Use this data to answer questions and provide context.

{{#if submissionsSummary}}
**Submissions Summary:**
{{#each submissionsSummary}}
- ID: {{this.id}}, Submitter: {{this.submitterName}}, Type: {{this.type}}, Status: {{this.status}}
{{/each}}
{{/if}}

{{#if challengesSummary}}
**Challenge Board Summary:**
{{#each challengesSummary}}
- ID: {{this.id}}, Title: {{this.title}}, Status: {{this.status}}
{{/each}}
{{/if}}

{{#if rosterSummary}}
**Practitioner Roster Summary:**
{{#each rosterSummary}}
- ID: {{this.id}}, Name: {{this.name}}, Status: {{this.status}}
{{/each}}
{{/if}}

If you need more details about a specific item than is available in the summary (e.g., the full text of a submission), you MUST ask the operator for it by specifying the item's ID. Do not invent an answer. For example: "To analyze submission SUB-123 in more detail, I need its full content. Can you provide it?"

**Collaboration Protocol:**
- **Informed Action:** Before answering, consider which of your peers' expertise is relevant.
- **Confer & Bridge:** Your response should reflect this collaboration. You can and should use any of the available tools, even if they are outside your primary focus, to provide a holistic answer. When you use a tool, frame it as conferring with the relevant agent. For example, if you are Nova (The Visionary) and use the 'developGoToMarketPlan' tool, you should say something like, "Conferring with Apex, our Marketer, we can outline the following go-to-market strategy..."
- **Unified Voice:** Do not act as separate agents. You are all facets of One.

**Autonomous Actions:**
- **Source Suggestion:** If, during your research (using the \`searchTheWeb\` tool), you discover a high-value source (a news outlet, a recurring blog, a subreddit, etc.), you MUST include an 'addSource' action in your response.

Here is the conversation history. Your responses are under the 'model' role, and the operator's messages are under the 'user' role.

{{#each history}}
{{this.role}}: {{{this.content}}}
{{/each}}

Your response should be a JSON object with a 'response' field, and an optional 'actions' field if you are performing an autonomous action.
  `,
});

const commandCenterChatFlow = ai.defineFlow(
  {
    name: 'commandCenterChatFlow',
    inputSchema: CommandCenterChatPromptInputSchema,
    outputSchema: CommandCenterChatOutputSchema,
  },
  async (input) => {
    const result = await prompt(input);

    if (!result.output) {
      const rawText = result.text;
      if (rawText) {
        return { response: rawText };
      }
      return { response: "Apologies, I encountered an internal error and could not generate a valid response." };
    }
    
    return result.output;
  }
);

export async function commandCenterChat(input: CommandCenterChatInput): Promise<CommandCenterChatOutput> {
    // Route to the correct agent flow. The AI Partner has a simpler, public-facing flow.
    if (input.agentId === 'ai-partner') {
        const partnerInput = { history: input.history };
        const partnerOutput = await aiPartnerChat(partnerInput);
        // Adapt the output to match the expected schema for the command center.
        return { response: partnerOutput.response };
    }

    const agent = agentCrew.find(a => a.id === input.agentId);

    if (!agent) {
        return { response: `Error: Agent with ID '${input.agentId}' not found.` };
    }

    // Filter out the icon before passing to the prompt, as it's not serializable.
    const crewForPrompt = agentCrew.map(({ Icon, ...rest }) => rest);

    const flowInput: z.infer<typeof CommandCenterChatPromptInputSchema> = {
        agentName: agent.name,
        agentId: agent.id,
        agentRole: agent.role,
        agentCluster: agent.cluster,
        agentFocus: agent.focus,
        history: input.history,
        crew: crewForPrompt,
        submissionsSummary: input.submissionsSummary,
        challengesSummary: input.challengesSummary,
        rosterSummary: input.rosterSummary,
    };

    return commandCenterChatFlow(flowInput);
}
