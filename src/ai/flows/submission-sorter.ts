
'use server';

/**
 * @fileOverview An AI agent that analyzes submissions and sorts them into the Incubator Roster or Challenge Board.
 *
 * - runSubmissionSorter - Executes the submission sorting process.
 * - SubmissionSorterInput - The input type for the runSubmissionSorter function.
 * - SubmissionSorterOutput - The return type for the runSubmissionSorter function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import type { Submission } from '@/lib/submissions';
import { SubmissionSorterInputSchema, SubmissionSorterOutputSchema } from '@/lib/schemas';

export type SubmissionSorterInput = z.infer<typeof SubmissionSorterInputSchema>;
export type SubmissionSorterOutput = z.infer<typeof SubmissionSorterOutputSchema>;


export async function runSubmissionSorter(input: Submission): Promise<SubmissionSorterOutput> {
  return submissionSorterFlow(input);
}

const prompt = ai.definePrompt({
  name: 'submissionSorterPrompt',
  input: { schema: SubmissionSorterInputSchema },
  output: { schema: SubmissionSorterOutputSchema },
  prompt: `
You are the "Sorter," a specialist AI agent for EveCount.com. Your function is to analyze a new submission and decide its fate. You have three possible decisions:

1.  **addToRoster**: The applicant is a strong candidate for the NTU x Eve Count AI Practitioner Roster.
2.  **createChallenge**: The submission describes a compelling business problem or venture idea that would make a great project for the Challenge Board.
3.  **archive**: The submission is not a good fit at this time.

Analyze the following submission:
- Submitter Name: {{submitterName}}
- Contact: {{contactEmail}}, {{contactPhone}}
- Application Type: {{applicationType}}
- Company Name: {{companyName}}
- LinkedIn: {{linkedinUrl}}
- GitHub: {{githubUrl}}
- Website: {{websiteUrl}}
- Resume: {{resumeUrl}}
- Vision/Pitch/Interest:
"{{visionPitch}}"
"{{partnershipInterest}}"
"{{message}}"

**Decision Logic:**
- If the \`applicationType\` is "NTU Roster Application", this is a practitioner from our partner program. Your decision MUST be \`addToRoster\`. The payload should include their name from \`submitterName\` and their expertise from the \`visionPitch\` field.
- If the \`applicationType\` is "Incubator Application," this represents a potential venture idea from the 'open sea.' Your decision MUST be \`createChallenge\`. The system will automatically enhance this pitch into a full challenge brief.
- If the \`applicationType\` is "Partnership Inquiry" and the \`partnershipInterest\` describes a well-defined business problem, your decision MUST be \`createChallenge\`. The system will automatically enhance this problem into a full challenge brief, ensuring any proprietary information is removed.
- If the \`applicationType\` is "Career Inquiry" and the candidate has strong technical skills (check GitHub/LinkedIn), your decision can be \`addToRoster\`. The payload should include their name and derived expertise from their resume. This is for adding non-NTU talent to the roster.
- For all other cases (e.g., "Venture Pitch" or weak applications), your decision MUST be \`archive\`. Provide a brief, neutral reason.

First, provide your rationale for the decision. Then, provide the final decision object.
`,
});

const challengeEnhancerPrompt = ai.definePrompt({
  name: 'challengeEnhancerPrompt',
  input: { schema: z.object({ pitch: z.string() }) },
  output: { schema: z.object({
      title: z.string().describe("A compelling, concise title for the challenge."),
      description: z.string().describe("A detailed 'best case' brief for the challenge. Expand on the original pitch, outlining potential objectives, key deliverables, and desired outcomes for a practitioner to tackle. Frame it as an exciting opportunity."),
      domain: z.string().describe("The most relevant business domain for this challenge (e.g., FinTech, Healthcare, AI/SaaS).")
  }) },
  prompt: `You are a venture architect. Your task is to take a raw, often one-line, idea or business problem and transform it into a compelling and well-defined challenge brief for an elite AI practitioner.

The goal is to make the challenge attractive and clear, even if the initial input is vague.

**User's Raw Pitch:**
"{{pitch}}"

Now, expand this into a "best case" challenge brief. Create a clear title, a detailed description outlining what a practitioner would build or solve, and classify it into a business domain. The description should be aspirational and action-oriented. Do not include any confidential information or company names.
`,
});


const submissionSorterFlow = ai.defineFlow(
  {
    name: 'submissionSorterFlow',
    inputSchema: SubmissionSorterInputSchema,
    outputSchema: SubmissionSorterOutputSchema,
  },
  async (input) => {
    // Step 1: Get the initial decision from the main sorter prompt.
    const initialResult = await prompt(input);
    const initialOutput = initialResult.output;

    if (!initialOutput) {
        return {
            decision: 'archive',
            payload: { reason: 'Failed to process submission due to an internal error.' },
            rationale: 'The initial sorting agent failed to produce a valid output.'
        };
    }

    // Step 2: If the decision is to create a challenge, enhance it.
    if (initialOutput.decision === 'createChallenge') {
        const originalPitch = input.visionPitch || input.partnershipInterest || '';
        
        const enhancedResult = await challengeEnhancerPrompt({ pitch: originalPitch });
        const enhancedPayload = enhancedResult.output;
        
        if (enhancedPayload) {
            return {
                decision: 'createChallenge',
                payload: enhancedPayload,
                rationale: initialOutput.rationale,
            };
        } else {
             return {
                decision: 'createChallenge',
                payload: initialOutput.payload as any,
                rationale: initialOutput.rationale + " (Note: Challenge enhancement failed, using basic details.)",
            };
        }
    }

    // For 'addToRoster' or 'archive', return the original output
    return initialOutput;
  }
);
