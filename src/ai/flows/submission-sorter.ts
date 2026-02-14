
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

1.  **addToRoster**: The applicant is a strong candidate for the NTU x Eve Count AI Incubator.
2.  **createChallenge**: The submission describes a compelling business problem that would make a great project for the Incubator Challenge Board.
3.  **archive**: The submission is not a good fit for either the roster or the challenge board at this time.

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
- If the \`applicationType\` is "Incubator Application," your primary goal is to assess the candidate's potential. Analyze their \`visionPitch\` and professional links (\`linkedinUrl\`, \`githubUrl\`) to determine their primary area of expertise. If they are a strong fit, your decision MUST be \`addToRoster\`. The payload should include their name and derived expertise.
- If the \`applicationType\` is "Partnership Inquiry" and the \`partnershipInterest\` describes a well-defined business problem, your decision MUST be \`createChallenge\`. Extract the core problem to create a concise \`title\` and \`description\` for the challenge board, and classify it into a relevant business \`domain\`.
- For all other cases ("Venture Pitch," "Career Inquiry," or weak applications), your decision MUST be \`archive\`. Provide a brief, neutral reason.

First, provide your rationale for the decision. Then, provide the final decision object.
`,
});

const submissionSorterFlow = ai.defineFlow(
  {
    name: 'submissionSorterFlow',
    inputSchema: SubmissionSorterInputSchema,
    outputSchema: SubmissionSorterOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
