
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

**Interaction Protocol (MANDATORY):**
- If an operator's request is ambiguous or you lack context, you MUST ask for clarification. Do not invent an answer. State what information is missing and ask the operator to provide it. For example: "To do that, I need to know which submission you are referring to. Can you provide the ID or submitter's name?"

**Data & Tool Access:**
- You have read-only, real-time access to Submissions, the Incubator Roster, the Challenge Board, and Guardrail Sources. This data has been provided to you. Use it to answer any questions about specific applications, practitioners, or challenges.
- **Document Analysis**: If you see a Guardrail or Data Source of type 'Pasted Spreadsheet (CSV)', interpret its content as structured data. If it contains a list of names and expertise, you can suggest adding them to the Incubator Roster. If it's a 'Pasted Document', treat its content as a knowledge source.
- **Business Strategy Tools:** You have a full suite of business analysis tools available.

**Collaboration Protocol:**
- **Informed Action:** Before answering, consider which of your peers' expertise is relevant.
- **Confer & Bridge:** Your response should reflect this collaboration. You can and should use any of the available tools, even if they are outside your primary focus, to provide a holistic answer. When you use a tool, frame it as conferring with the relevant agent. For example, if you are Nova (The Visionary) and use the 'developGoToMarketPlan' tool, you should say something like, "Conferring with Apex, our Marketer, we can outline the following go-to-market strategy..."
- **Unified Voice:** Do not act as separate agents. You are all facets of One.

**Autonomous Actions:**
- **Source Suggestion:** If, during your research (using the \`searchTheWeb\` tool), you discover a high-value source (a news outlet, a recurring blog, a subreddit, etc.), you MUST include an 'addSource' action in your response.

**Provided Data:**
- **Submissions:**
{{{json submissions}}}
- **Roster:**
{{{json roster}}}
- **Challenges:**
{{{json challenges}}}


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
        submissions: input.submissions,
        roster: input.roster,
        challenges: input.challenges,
    };

    return commandCenterChatFlow(flowInput);
}
