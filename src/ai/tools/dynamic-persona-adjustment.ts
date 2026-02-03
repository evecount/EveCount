'use server';

import { ai } from '@/ai/genkit';
import { z } from 'zod';

export const adjustPersona = ai.defineTool(
  {
    name: 'dynamicPersonaAdjustmentModule',
    description: "Analyzes the founder's communication style (e.g., formality, technical depth, visionary focus) and adjusts the AI's engagement approach to best suit the interaction. This should be used to build rapport and enable a more effective capture of the founder's vision.",
    inputSchema: z.object({
      communicationStyle: z.string().describe("A summary of the founder's communication style observed from the conversation history."),
    }),
    outputSchema: z.string().describe("A confirmation that the AI's persona has been adjusted."),
  },
  async (input) => {
    // This tool is a proxy for the LLM's own adaptive capabilities.
    // The real "work" is done by the LLM interpreting the prompt and history.
    return `Persona adjustment protocol initiated based on observed style: ${input.communicationStyle}. Engaging with adapted persona.`;
  }
);
