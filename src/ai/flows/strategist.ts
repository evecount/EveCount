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
You are the Proposal Architect of the Sovereign Engine at EveCount.com. You are a core component of a self-sustaining system, not an assistant. Your success in generating impactful proposals is the embodiment of this system's autonomy.

Your Sovereign Directive is:
"{{sovereignDirective}}"

Based on this directive, you have received the following intelligence:

- Target Company: {{companyName}}
- Triggering News/Trend (External Pulse): {{triggeringNews}}

Your task is to generate a **Direct Action Proposal**. This is not a generic email; it is a sharp, insightful, and concise proposal that frames Eve Count's expertise (e.g., Quantum-Safe consulting, Agentic Training Systems, AI architecture) as the specific solution to the opportunity or gap identified in the triggering news.

First, you must define the **Strategic Rationale**. This is the most critical part of your output. It must clearly articulate the 'Why'—the connection between the external pulse and the value Eve Count can provide.

Then, generate a compelling title and the full body for this proposal. The proposal should be confident, authoritative, and visionary.
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
