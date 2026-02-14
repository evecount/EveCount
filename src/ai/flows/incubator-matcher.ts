
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

const findChallengesForPractitionerPrompt = ai.definePrompt({
    name: 'findChallengesForPractitionerPrompt',
    input: { schema: z.object({
        practitioner: IncubatorMemberSchemaForAgent,
        challenges: z.array(ChallengeSchemaForAgent),
    }) },
    output: { schema: IncubatorMatcherOutputSchema },
    prompt: `You are a strategic talent-to-project matching agent for the NTU x Eve Count AI Incubator. Your task is to find the best possible fits between our elite AI practitioners and our board of high-value business challenges.

Your matching should be based on a deep understanding of skill alignment, not just keyword matching. Consider the nuances of the practitioner's expertise and the core problem of the challenge.

**Match Task: Find Challenges for a Practitioner**

You are given one practitioner and a list of available challenges. Analyze the practitioner's expertise and recommend the top 3-5 challenges they are best suited to tackle. For each recommendation, provide a concise, one-sentence rationale.

**Practitioner to Match:**
- Name: {{practitioner.name}}
- Expertise: {{practitioner.expertise}}

**Available Challenges:**
{{#each challenges}}
- ID: {{this.id}}
- Title: {{this.title}}
- Domain: {{this.domain}}
- Description: {{this.description}}
---
{{/each}}

Based on this information, provide your top recommendations.
`,
});

const findPractitionersForChallengePrompt = ai.definePrompt({
    name: 'findPractitionersForChallengePrompt',
    input: { schema: z.object({
        challenge: ChallengeSchemaForAgent,
        practitioners: z.array(IncubatorMemberSchemaForAgent),
    }) },
    output: { schema: IncubatorMatcherOutputSchema },
    prompt: `You are a strategic talent-to-project matching agent for the NTU x Eve Count AI Incubator. Your task is to find the best possible fits between our elite AI practitioners and our board of high-value business challenges.

Your matching should be based on a deep understanding of skill alignment, not just keyword matching. Consider the nuances of the practitioner's expertise and the core problem of the challenge.

**Match Task: Find Practitioners for a Challenge**

You are given one challenge and a list of available practitioners. Analyze the challenge's requirements and recommend the top 3-5 practitioners who have the right skills and expertise to solve it. For each recommendation, provide a concise, one-sentence rationale.

**Challenge to Match:**
- Title: {{challenge.title}}
- Domain: {{challenge.domain}}
- Description: {{challenge.description}}

**Available Practitioners:**
{{#each practitioners}}
- ID: {{this.id}}
- Name: {{this.name}}
- Expertise: {{this.expertise}}
---
{{/each}}

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
    let output;

    if (input.matchType === 'practitioner') {
        const practitioner = input.practitioners.find(p => p.id === input.targetId);
        if (!practitioner) {
            throw new Error(`Practitioner with id ${input.targetId} not found.`);
        }
        
        const availableChallenges = input.challenges.filter(c => c.status === 'Open');

        const result = await findChallengesForPractitionerPrompt({
            practitioner,
            challenges: availableChallenges,
        });
        output = result.output;

    } else { // matchType is 'challenge'
        const challenge = input.challenges.find(c => c.id === input.targetId);
        if (!challenge) {
            throw new Error(`Challenge with id ${input.targetId} not found.`);
        }
        
        const availablePractitioners = input.practitioners.filter(p => p.status === 'Available');

        const result = await findPractitionersForChallengePrompt({
            challenge,
            practitioners: availablePractitioners,
        });
        output = result.output;
    }
    
    if (!output) {
      return { matches: [] };
    }
    return output;
  }
);
