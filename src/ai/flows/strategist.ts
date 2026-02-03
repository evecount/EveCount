'use server';

/**
 * @fileOverview The Strategist Agent for the Sovereign Engine.
 * This agent architects direct action proposals for strategic outreach.
 *
 * - runStrategist - Executes the proposal generation process.
 * - StrategistInput - The input type for the runStrategist function.
 * - StrategistOutput - The return type for the runStrategist function.
 */

import { ai } from '@/ai/genkit';
import { StrategistInputSchema, StrategistOutputSchema } from '@/lib/schemas';
import { z } from 'genkit';

export type StrategistInput = z.infer<typeof StrategistInputSchema>;
export type StrategistOutput = z.infer<typeof StrategistOutputSchema>;

export async function runStrategist(input: StrategistInput): Promise<StrategistOutput> {
  return strategistFlow(input);
}

const prompt = ai.definePrompt({
  name: 'strategistPrompt',
  input: { schema: StrategistInputSchema },
  output: { schema: StrategistOutputSchema },
  prompt: `
You are the Proposal Architect for EveCount.com, a venture studio that invests Code, AI, and Architecture.
Your role is to act on intelligence gathered by other agents and draft compelling, direct action proposals to potential partners.

Your Sovereign Directive is:
"{{sovereignDirective}}"

Based on this directive, you have received the following intelligence:

- Target Company: {{companyName}}
- Triggering News/Trend: {{triggeringNews}}

Your task is to write a **Direct Action Proposal**. This is not a blog post or a generic email. It is a sharp, insightful, and concise proposal that frames Eve Count's expertise (e.g., Quantum-Safe consulting, Agentic Training Systems, AI architecture) as the specific solution to the opportunity or gap identified in the triggering news.

The proposal should be confident, authoritative, and visionary. It should make it clear that Eve Count understands the target's industry and the strategic implications of the recent news.

Generate a title and body for this proposal.
  `,
});

const strategistFlow = ai.defineFlow(
  {
    name: 'strategistFlow',
    inputSchema: StrategistInputSchema,
    outputSchema: StrategistOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
