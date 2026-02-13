import { z } from 'zod';

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


export const AiPartnerChatInputSchema = z.object({
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.string(),
  })).describe("The chat history."),
});

export const AiPartnerChatOutputSchema = z.object({
  response: z.string().describe("The AI partner's response."),
  submissionDetails: z.object({
      submitterName: z.string().describe("The full name of the person submitting the idea."),
      contactEmail: z.string().email().describe("The contact email of the submitter."),
      contactPhone: z.string().describe("The contact phone number of the submitter.")
  }).optional().describe("The contact details collected from the user. Only include this object when all details have been successfully gathered.")
});


export const StrategistInputSchema = z.object({
    companyName: z.string().describe("The name of the target company."),
    triggeringNews: z.string().describe("The summary or headline of the news/trend that triggered the outreach (The External Pulse)."),
    sovereignDirective: z.string().describe("The core strategic goal for the agent."),
});

export const StrategistOutputSchema = z.object({
    proposalTitle: z.string().describe("A compelling, direct title for the proposal."),
    proposalBody: z.string().describe("The full text of the Direct Action Proposal."),
    strategicRationale: z.string().describe("The 'Sentient Rationale' explaining why this proposal is strategic, linking the triggering news to Eve Count's value proposition."),
});


export const CommandCenterChatInputSchema = z.object({
  agentId: z.string().describe("The ID of the agent to chat with."),
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.string(),
  })).describe("The chat history."),
});

const AgentSchemaForPrompt = z.object({
  name: z.string(),
  id: z.string(),
  role: z.string(),
  cluster: z.string(),
  focus: z.string(),
});

export const CommandCenterChatPromptInputSchema = z.object({
  agentName: z.string(),
  agentId: z.string(),
  agentRole: z.string(),
  agentCluster: z.string(),
  agentFocus: z.string(),
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.string(),
  })),
  crew: z.array(AgentSchemaForPrompt),
});

const SourceActionPayloadSchema = z.object({
    url: z.string().url().describe("The URL of the new source."),
    type: z.enum(["RSS", "Reddit", "NewsAPI"]).describe("The type of source."),
    rationale: z.string().describe("A brief rationale for why this source is valuable."),
});

export const CommandCenterChatOutputSchema = z.object({
  response: z.string().describe("The agent's response."),
  actions: z.array(z.object({
      type: z.literal('addSource'),
      payload: SourceActionPayloadSchema,
  })).optional().describe("A list of autonomous actions for the client to execute, such as adding a new intelligence source."),
});
