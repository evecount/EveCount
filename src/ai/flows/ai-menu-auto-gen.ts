'use server';
/**
 * @fileOverview An AI-powered menu and food styling generator for TopDownFood.com.
 *
 * - aiMenuAutoGen - A function that handles the menu and food styling generation process.
 * - AiMenuAutoGenInput - The input type for the aiMenuAutoGen function.
 * - AiMenuAutoGenOutput - The return type for the aiMenuAutoGen function.
 */

import {ai} from '@/ai/genkit';
import { AiMenuAutoGenInputSchema, AiMenuAutoGenOutputSchema } from '@/lib/schemas';
import {z} from 'genkit';


export type AiMenuAutoGenInput = z.infer<typeof AiMenuAutoGenInputSchema>;


export type AiMenuAutoGenOutput = z.infer<typeof AiMenuAutoGenOutputSchema>;

export async function aiMenuAutoGen(input: AiMenuAutoGenInput): Promise<AiMenuAutoGenOutput> {
  return aiMenuAutoGenFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiMenuAutoGenPrompt',
  input: {schema: AiMenuAutoGenInputSchema},
  output: {schema: AiMenuAutoGenOutputSchema},
  prompt: `You are a food stylist and menu writer. You will use the information provided to create food styling suggestions and a creative menu description.

Description: {{{foodDescription}}}
Photo: {{media url=photoDataUri}}

Food Styling Suggestions:

Menu Description:`,
});

const aiMenuAutoGenFlow = ai.defineFlow(
  {
    name: 'aiMenuAutoGenFlow',
    inputSchema: AiMenuAutoGenInputSchema,
    outputSchema: AiMenuAutoGenOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
