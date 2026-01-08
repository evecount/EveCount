import { z } from 'zod';

export const visionPitchSchema = z.object({
  partnerName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  partnerEmail: z.string().email({ message: "Please enter a valid email address." }),
  visionPitch: z.string().min(50, { message: "Vision pitch must be at least 50 characters." }).max(5000, { message: "Pitch cannot exceed 5000 characters." }),
});

export const AiLeadGatekeeperInputSchema = z.object({
  visionPitch: z
    .string()
    .describe('The potential partner’s vision pitch submitted through the lead intake form.'),
  partnerName: z.string().describe('The name of the potential partner.'),
  partnerEmail: z.string().describe('The email of the potential partner.'),
});

export const AiLeadGatekeeperOutputSchema = z.object({
  shouldScheduleSession: z
    .boolean()
    .describe(
      'Whether or not a Foundry Session should be scheduled based on the vision pitch.'
    ),
  reason: z.string().describe('The reason for the decision to schedule or not.'),
  openHoursUrl: z.string().optional().describe('The OpenHours.ai URL to schedule a session, if applicable.'),
});

export const AiMenuAutoGenInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of food, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  foodDescription: z.string().describe('A description of the food in the photo.'),
});

export const AiMenuAutoGenOutputSchema = z.object({
  foodStylingSuggestions: z.string().describe('Suggestions for food styling based on the photo.'),
  menuDescription: z.string().describe('A creative menu description for the food.'),
});

export const DualPersonaAiFeedbackInputSchema = z.object({
  userInput: z
    .string()
    .describe('The user input to be evaluated by the AI feedback loop.'),
  vibeSliderSetting: z
    .number()
    .min(-1)
    .max(1)
    .describe(
      'A value between -1 and 1 representing the desired vibe (e.g., positivity).'
    ),
});

export const DualPersonaAiFeedbackOutputSchema = z.object({
  personaAFeedback: z
    .string()
    .describe('Feedback from Persona A, designed to be constructive.'),
  personaBFeedback: z
    .string()
    .describe('Feedback from Persona B, designed to be critical.'),
});

export const MultilingualOcrFactExtractionInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of a document, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});

export const MultilingualOcrFactExtractionOutputSchema = z.object({
  extractedFacts: z.string().describe('The extracted facts from the document.'),
});