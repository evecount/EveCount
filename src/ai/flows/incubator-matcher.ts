
'use server';

/**
 * @fileOverview An AI agent that matches NTU Practitioners with open challenges.
 *
 * - runIncubatorMatcher - Executes the matching process.
 * - IncubatorMatcherInput - The input type for the runIncubatorMatcher function.
 * - IncubatorMatcherOutput - The return type for the runIncubatorMatcher function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { IncubatorMatcherInputSchema, IncubatorMatcherOutputSchema, ChallengeSchemaForAgent, IncubatorMemberSchemaForAgent } from '@/lib/schemas';

export type IncubatorMatcherInput = z.infer<typeof IncubatorMatcherInputSchema>;
export type IncubatorMatcherOutput = z.infer<typeof IncubatorMatcherOutputSchema>;

export async function runIncubatorMatcher(input: IncubatorMatcherInput): Promise<IncubatorMatcherOutput> {
    return incubatorMatcherFlow(input);
}

const prompt = ai.definePrompt({
    name: 'incubatorMatcherPrompt',
    input: { schema: IncubatorMatcherInputSchema },
    output: { schema: IncubatorMatcherOutputSchema },
    prompt: `You are a strategic talent-to-project matching agent for the NTU x Eve Count AI Incubator. Your task is to find the best possible fits between our elite AI practitioners and our board of high-value business challenges.

Your matching should be based on a deep understanding of skill alignment, not just keyword matching. Consider the nuances of the practitioner's expertise and the core problem of the challenge.

{{#if (eq matchType "practitioner")}}
**Match Task: Find Challenges for a Practitioner**

You are given one practitioner and a list of available challenges. Analyze the practitioner's expertise and recommend the top 3-5 challenges they are best suited to tackle. For each recommendation, provide a concise, one-sentence rationale.

**Practitioner to Match:**
{{#each practitioners}}
{{#if (eq this.id ../targetId)}}
- Name: {{this.name}}
- Expertise: {{this.expertise}}
{{/if}}
{{/each}}

**Available Challenges:**
{{#each challenges}}
{{#if (eq this.status "Open")}}
- ID: {{this.id}}
- Title: {{this.title}}
- Domain: {{this.domain}}
- Description: {{this.description}}
---
{{/if}}
{{/each}}

{{else}}
**Match Task: Find Practitioners for a Challenge**

You are given one challenge and a list of available practitioners. Analyze the challenge's requirements and recommend the top 3-5 practitioners who have the right skills and expertise to solve it. For each recommendation, provide a concise, one-sentence rationale.

**Challenge to Match:**
{{#each challenges}}
{{#if (eq this.id ../targetId)}}
- Title: {{this.title}}
- Domain: {{this.domain}}
- Description: {{this.description}}
{{/if}}
{{/each}}

**Available Practitioners:**
{{#each practitioners}}
{{#if (eq this.status "Available")}}
- ID: {{this.id}}
- Name: {{this.name}}
- Expertise: {{this.expertise}}
---
{{/if}}
{{/each}}
{{/if}}

Based on this information, provide your top recommendations.
`,
});


const incubatorMatcherFlow = ai.defineFlow(
  {
    name: 'incubatorMatcherFlow',
    inputSchema: IncubatorMatcherInputSchema,
    outputSchema: IncubatorMatcherOutputSchema,
  },
  async (input) => {
    // Filter to only include relevant items to save tokens and improve focus.
    const filteredInput = {...input};
    if (input.matchType === 'practitioner') {
        filteredInput.challenges = input.challenges.filter(c => c.status === 'Open');
    } else {
        filteredInput.practitioners = input.practitioners.filter(p => p.status === 'Available');
    }

    const { output } = await prompt(filteredInput);
    if (!output) {
      return { matches: [] };
    }
    return output;
  }
);
