'use server';
/**
 * @fileOverview Implements the dual-persona AI feedback loop for FiendandFriend.com.
 *
 * - dualPersonaAiFeedback - A function that initiates the dual-persona feedback process.
 * - DualPersonaAiFeedbackInput - The input type for the dualPersonaAiFeedback function.
 * - DualPersonaAiFeedbackOutput - The return type for the dualPersonaAiFeedback function.
 */

import {ai} from '@/ai/genkit';
import { DualPersonaAiFeedbackInputSchema, DualPersonaAiFeedbackOutputSchema } from '@/lib/schemas';
import {z} from 'genkit';


export type DualPersonaAiFeedbackInput = z.infer<
  typeof DualPersonaAiFeedbackInputSchema
>;


export type DualPersonaAiFeedbackOutput = z.infer<
  typeof DualPersonaAiFeedbackOutputSchema
>;

export async function dualPersonaAiFeedback(
  input: DualPersonaAiFeedbackInput
): Promise<DualPersonaAiFeedbackOutput> {
  return dualPersonaAiFeedbackFlow(input);
}

const prompt = ai.definePrompt({
  name: 'dualPersonaAiFeedbackPrompt',
  input: {schema: DualPersonaAiFeedbackInputSchema},
  output: {schema: DualPersonaAiFeedbackOutputSchema},
  prompt: `You are a dual AI persona feedback system. You will provide feedback from two distinct personas on the user's input. The overall "vibe" of your combined feedback should be adjusted according to the vibeSliderSetting.

Persona A: Constructive and encouraging. Aims to provide positive reinforcement and helpful suggestions.

Persona B: Critical and analytical. Focuses on identifying flaws and areas for improvement. 

User Input: {{{userInput}}}
Vibe Slider Setting: {{{vibeSliderSetting}}}

Output the feedback from each persona. The vibeSliderSetting influences the overall tone; a positive value makes Persona A more dominant, and a negative value makes Persona B more dominant. A value of 0 represents an equal balance between both personas.

Persona A Feedback: 

Persona B Feedback:`,
});

const dualPersonaAiFeedbackFlow = ai.defineFlow(
  {
    name: 'dualPersonaAiFeedbackFlow',
    inputSchema: DualPersonaAiFeedbackInputSchema,
    outputSchema: DualPersonaAiFeedbackOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
