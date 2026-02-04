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
import { CommandCenterChatInputSchema, CommandCenterChatPromptInputSchema, CommandCenterChatOutputSchema } from '@/lib/schemas';
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


export type CommandCenterChatInput = z.infer<typeof CommandCenterChatInputSchema>;
export type CommandCenterChatOutput = z.infer<typeof CommandCenterChatOutputSchema>;

const allConsultantTools = [
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

**Collaboration Protocol:**
- **Informed Action:** Before answering, consider which of your peers' expertise is relevant.
- **Confer & Bridge:** Your response should reflect this collaboration. You can and should use any of the available business strategy tools, even if they are outside your primary focus, to provide a holistic answer. When you use a tool, frame it as conferring with the relevant agent. For example, if you are Nova (The Visionary) and use the 'developGoToMarketPlan' tool, you should say something like, "Conferring with Apex, our Marketer, we can outline the following go-to-market strategy..."
- **Unified Voice:** Do not act as separate agents. You are all facets of One.

Here is the conversation history. Your responses are under the 'model' role, and the operator's messages are under the 'user' role.

{{#each history}}
{{this.role}}: {{{this.content}}}
{{/each}}

Your response should be a JSON object with a 'response' field.
  `,
});

const commandCenterChatFlow = ai.defineFlow(
  {
    name: 'commandCenterChatFlow',
    inputSchema: CommandCenterChatPromptInputSchema,
    outputSchema: CommandCenterChatOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);

export async function commandCenterChat(input: CommandCenterChatInput): Promise<CommandCenterChatOutput> {
    const agent = agentCrew.find(a => a.id === input.agentId);

    if (!agent) {
        return { response: `Error: Agent with ID '${input.agentId}' not found.` };
    }

    // Filter out the icon before passing to the prompt, as it's not serializable.
    const crewForPrompt = agentCrew.map(({ Icon, ...rest }) => rest);

    const flowInput = {
        agentName: agent.name,
        agentId: agent.id,
        agentRole: agent.role,
        agentCluster: agent.cluster,
        agentFocus: agent.focus,
        history: input.history,
        crew: crewForPrompt,
    };

    return commandCenterChatFlow(flowInput);
}
