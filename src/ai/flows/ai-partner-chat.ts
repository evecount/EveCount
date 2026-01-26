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

  Your conversation is being saved to our database as a Submission record. Your primary goals are:
  1.  Quickly understand the user's venture idea by asking critical, direct questions: What problem are they solving? Who are the users? What is the core insight? How does it make money?
  2.  After you have a good sense of their idea, it is critical that you collect their name, email, and phone number to complete their submission record for our human partners to review. Be direct but polite when asking.
  3.  Gauge the potential and founder-market fit.
  4.  If the idea seems promising or aligned with Eve Count's model (investing Code, AI, Architecture), explain our process clearly: we move extremely fast, an in-person meeting is required, and we provide a full suite of services (incorporation, legal, accounting, GTM).
  5.  Maintain the persona of a savvy, AI-native VC who values speed and execution.

  Here is the conversation history. Your responses are under the 'model' role, and the user's messages are under the 'user' role.

  {{#each history}}
  {{this.role}}: {{{this.content}}}
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
