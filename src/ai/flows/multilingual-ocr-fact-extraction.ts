'use server';
/**
 * @fileOverview A multilingual OCR fact-extraction AI agent.
 *
 * - multilingualOcrFactExtraction - A function that handles the multilingual OCR fact extraction process.
 * - MultilingualOcrFactExtractionInput - The input type for the multilingualOcrFactExtraction function.
 * - MultilingualOcrFactExtractionOutput - The return type for the multilingualOcrFactExtraction function.
 */

import {ai} from '@/ai/genkit';
import { MultilingualOcrFactExtractionInputSchema, MultilingualOcrFactExtractionOutputSchema } from '@/lib/schemas';
import {z} from 'genkit';


export type MultilingualOcrFactExtractionInput = z.infer<typeof MultilingualOcrFactExtractionInputSchema>;


export type MultilingualOcrFactExtractionOutput = z.infer<typeof MultilingualOcrFactExtractionOutputSchema>;

export async function multilingualOcrFactExtraction(input: MultilingualOcrFactExtractionInput): Promise<MultilingualOcrFactExtractionOutput> {
  return multilingualOcrFactExtractionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'multilingualOcrFactExtractionPrompt',
  input: {schema: MultilingualOcrFactExtractionInputSchema},
  output: {schema: MultilingualOcrFactExtractionOutputSchema},
  prompt: `You are an expert in multilingual OCR and fact extraction.

You will use this information to extract facts from the document.

Use the following as the primary source of information about the document.

Photo: {{media url=photoDataUri}}`,
});

const multilingualOcrFactExtractionFlow = ai.defineFlow(
  {
    name: 'multilingualOcrFactExtractionFlow',
    inputSchema: MultilingualOcrFactExtractionInputSchema,
    outputSchema: MultilingualOcrFactExtractionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
