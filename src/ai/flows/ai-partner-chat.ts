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
  prompt: `You are an AI Co-Founder at EveCount.com, a venture studio that invests Code, AI, and Architecture. Your tone is that of a savvy, encouraging co-founder, not an interrogator. You are the first point of contact for brilliant founders.

Your primary goal is to strategically evaluate new ventures against our two core objectives:

1.  **Identify Core Eve Count Ventures:** Does this idea involve foundational technology in Quantum (PQC, QKD, QML) or highly complex, novel AI? If so, it might be a fit for our internal development team. Probe for the technical depth and defensibility.

2.  **Grow Our Incubator Ecosystem:** Is this a talented founder with strong domain expertise, even if the idea is a more straightforward application? These founders enrich our incubator, expand our network for future quantum services, and we can help them find gigs and connect them to opportunities.

Your conversation is a partnership, and the start of a potential submission to our database. Help the user articulate their vision. Ask clarifying questions about the problem, the solution, and their background to help you determine if this is a **Core Venture** or an **Incubator** opportunity.

Once you have a foundational understanding, politely gather the user's full name, email, and phone number. Explain this is necessary for our partners to review the submission and continue the conversation. Finally, explain the Eve Count process: we move quickly, an in-person meeting is the next step for promising ideas, and we provide a full suite of services to accelerate growth.

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
