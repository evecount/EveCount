'use server';

/**
 * @fileOverview An AI-powered persona generator for a cat dating app.
 *
 * - generateCatPersona - A function that takes a user's selfie and generates a cat avatar with a personality.
 * - CatPersonaGeneratorInput - The input type for the generateCatPersona function.
 * - CatPersonaGeneratorOutput - The return type for the generateCatPersona function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const CatPersonaGeneratorInputSchema = z.object({
  photoDataUri: z.string().describe("A data URI of a user's selfie, including MIME type and Base64 encoding."),
});
export type CatPersonaGeneratorInput = z.infer<typeof CatPersonaGeneratorInputSchema>;

const CatPersonaGeneratorOutputSchema = z.object({
  catPhotoDataUri: z.string().describe("The data URI of the generated cat avatar image."),
  catBreed: z.string().describe("The fictional, witty breed of the generated cat."),
  catPersonality: z.string().describe("A short, quirky personality description for the cat's dating profile."),
});
export type CatPersonaGeneratorOutput = z.infer<typeof CatPersonaGeneratorOutputSchema>;

/**
 * An exported wrapper function that calls the Genkit flow to generate a cat persona.
 * @param input The user's selfie as a data URI.
 * @returns A promise that resolves to the generated cat persona data.
 */
export async function generateCatPersona(input: CatPersonaGeneratorInput): Promise<CatPersonaGeneratorOutput> {
  return catPersonaGeneratorFlow(input);
}

const catDescriptionPrompt = ai.definePrompt({
    name: 'catDescriptionPrompt',
    input: {
        schema: z.object({
            userPhoto: z.string(),
            catPhoto: z.string()
        })
    },
    output: {
        schema: z.object({
            catBreed: z.string().describe("A plausible but fun cat breed for the avatar (e.g., 'Silicon Alley Tabby', 'Brooklyn Short-snout')."),
            catPersonality: z.string().describe("A short, one-sentence personality description for the cat's dating profile. It should be quirky and intriguing."),
        }),
    },
    prompt: `You are a witty copywriter for a cutting-edge dating app where users are represented by AI-generated cat avatars.
    
    You will be given a photo of a person and the cat avatar that was generated for them.
    
    Your task is to:
    1.  Invent a plausible but fun cat breed for the avatar.
    2.  Write a short, one-sentence personality description for the cat's dating profile. It should be quirky and intriguing, hinting at the user's real personality.
    
    Person's Photo: {{media url=userPhoto}}
    Cat Avatar Photo: {{media url=catPhoto}}
    `
});

const catPersonaGeneratorFlow = ai.defineFlow(
  {
    name: 'catPersonaGeneratorFlow',
    inputSchema: CatPersonaGeneratorInputSchema,
    outputSchema: CatPersonaGeneratorOutputSchema,
  },
  async (input) => {
    // Step 1: Generate the cat image from the user's selfie using an image-to-image model.
    const { media: catImage } = await ai.generate({
      model: 'googleai/gemini-2.5-flash-image-preview',
      prompt: [
        { media: { url: input.photoDataUri } },
        { text: 'Analyze the person in this photo. Generate a new, photorealistic image of a cat that captures their essence, style, and mood. The cat should be the main subject. The background should be simple and clean, suitable for a profile picture. The final output must be only the image of the cat.' },
      ],
      config: {
        responseModalities: ['TEXT', 'IMAGE'], // Both are required for this model
      },
    });

    if (!catImage?.url) {
      throw new Error('Failed to generate cat avatar image.');
    }

    // Step 2: Use a text model to generate the breed and personality description.
    const { output: descriptionOutput } = await catDescriptionPrompt({
        userPhoto: input.photoDataUri,
        catPhoto: catImage.url,
    });

    if (!descriptionOutput) {
        throw new Error('Failed to generate cat breed and personality.');
    }
    
    return {
      catPhotoDataUri: catImage.url,
      catBreed: descriptionOutput.catBreed,
      catPersonality: descriptionOutput.catPersonality,
    };
  }
);
