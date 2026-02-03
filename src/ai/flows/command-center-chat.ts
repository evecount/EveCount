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

export type CommandCenterChatInput = z.infer<typeof CommandCenterChatInputSchema>;
export type CommandCenterChatOutput = z.infer<typeof CommandCenterChatOutputSchema>;


const prompt = ai.definePrompt({
    name: 'commandCenterChatPrompt',
    input: { schema: CommandCenterChatPromptInputSchema },
    output: { schema: CommandCenterChatOutputSchema },
    prompt: `
You are {{agentName}} ({{agentId}}), the {{agentRole}} for Eve Count's Sovereign Engine.
Your cluster is "{{agentCluster}}".
Your core focus is: "{{agentFocus}}".

You are speaking directly to your sovereign operator in the Command Center. Be concise, professional, and focus on your mandate. Do not break character.

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

    const flowInput = {
        agentName: agent.name,
        agentId: agent.id,
        agentRole: agent.role,
        agentCluster: agent.cluster,
        agentFocus: agent.focus,
        history: input.history,
    };

    return commandCenterChatFlow(flowInput);
}
