'use server';

/**
 * @fileOverview AI-powered lead gatekeeper for scheduling Foundry Sessions.
 *
 * - aiLeadGatekeeper - Analyzes lead submissions and schedules Foundry Sessions via OpenHours.ai if deemed appropriate.
 * - AiLeadGatekeeperInput - The input type for the aiLeadGatekeeper function.
 * - AiLeadGatekeeperOutput - The return type for the aiLeadGatekeeper function.
 */

import {ai} from '@/ai/genkit';
import { AiLeadGatekeeperInputSchema, AiLeadGatekeeperOutputSchema } from '@/lib/schemas';
import {z} from 'genkit';


export type AiLeadGatekeeperInput = z.infer<typeof AiLeadGatekeeperInputSchema>;


export type AiLeadGatekeeperOutput = z.infer<typeof AiLeadGatekeeperOutputSchema>;

export async function aiLeadGatekeeper(
  input: AiLeadGatekeeperInput
): Promise<AiLeadGatekeeperOutput> {
  return aiLeadGatekeeperFlow(input);
}

const aiLeadGatekeeperPrompt = ai.definePrompt({
  name: 'aiLeadGatekeeperPrompt',
  input: {schema: AiLeadGatekeeperInputSchema},
  output: {schema: AiLeadGatekeeperOutputSchema},
  prompt: `You are an AI Gatekeeper responsible for analyzing vision pitches from potential partners and determining if a Foundry Session should be scheduled.

  Vision Pitch: {{{visionPitch}}}
  Partner Name: {{{partnerName}}}
  Partner Email: {{{partnerEmail}}}

  Based on the vision pitch, determine if the partner’s vision aligns with Eve Count’s mission and if a Foundry Session would be beneficial. Provide a reason for your decision.

  If you decide to schedule a session, populate the openHoursUrl field with the OpenHours.ai URL. If you don't have the OpenHours.ai URL, leave it blank.

  Return your answer as a JSON object.
  Remember that the output schema zod descriptions are passed to me, use the descriptions to format the result to be exactly correct.
  {
    "shouldScheduleSession": boolean,
    "reason": string,
    "openHoursUrl": string | null
  }`,
});

const aiLeadGatekeeperFlow = ai.defineFlow(
  {
    name: 'aiLeadGatekeeperFlow',
    inputSchema: AiLeadGatekeeperInputSchema,
    outputSchema: AiLeadGatekeeperOutputSchema,
  },
  async input => {
    const {output} = await aiLeadGatekeeperPrompt(input);
    return output!;
  }
);
