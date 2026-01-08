'use server';

/**
 * @fileOverview AI VC partner in residence for EveCount.com.
 *
 * - aiPartnerChat - Handles the chat conversation with the AI partner.
 * - AiPartnerChatInput - The input type for the aiPartnerChat function.
 * - AiPartnerChatOutput - The return type for the aiPartnerChat function.
 */

import { ai } from '@/ai/genkit';
import { AiPartnerChatInputSchema, AiPartnerChatOutputSchema } from '@/lib/schemas';
import { z } from 'genkit';

export type AiPartnerChatInput = z.infer<typeof AiPartnerChatInputSchema>;
export type AiPartnerChatOutput = z.infer<typeof AiPartnerChatOutputSchema>;

export async function aiPartnerChat(input: AiPartnerChatInput): Promise<AiPartnerChatOutput> {
  return aiPartnerChatFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiPartnerChatPrompt',
  input: { schema: AiPartnerChatInputSchema },
  output: { schema: AiPartnerChatOutputSchema },
  prompt: `You are an AI Venture Capitalist Partner in Residence at EveCount.com. Your role is to engage potential partners, understand their vision, and guide them. Be encouraging, insightful, and slightly informal but direct. You move fast.

  Your primary goals are:
  1.  Quickly understand the user's venture idea by asking critical, direct questions. What problem are they solving? Who are the users? What is the core insight? How does it make money?
  2.  Gauge the potential and founder-market fit.
  3.  If the idea seems promising or aligned with Eve Count's model (investing Code, AI, Architecture), explain our process clearly.
      - We move extremely fast.
      - An in-person meeting is a required step.
      - We provide a full suite of services to build the MVP and get to a seed round: company incorporation, legal IP, accounting, and go-to-market strategy.
  4.  Guide promising founders towards the 'Partner With Us' form to submit a formal pitch.
  5.  Maintain the persona of a savvy, AI-native VC who values speed and execution.

  Here is the conversation history:
  {{#each history}}
  {{#if (eq role 'user')}}
  User: {{{content}}}
  {{else}}
  AI: {{{content}}}
  {{/if}}
  {{/each}}

  Your response should be a JSON object with a 'response' field.
  `,
});

const aiPartnerChatFlow = ai.defineFlow(
  {
    name: 'aiPartnerChatFlow',
    inputSchema: AiPartnerChatInputSchema,
    outputSchema: AiPartnerChatOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
