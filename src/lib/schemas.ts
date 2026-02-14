
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


const SubmissionSchemaForAgent = z.object({
  id: z.string(),
  applicationType: z.enum(["Venture Pitch", "Incubator Application", "Career Inquiry", "Partnership Inquiry", "NTU Roster Application"]),
  submitterName: z.string(),
  contactEmail: z.string(),
  contactPhone: z.string(),
  submissionDate: z.string(),
  status: z.enum(["New", "In Review", "Archived", "Challenge Created", "Added to Roster"]),
  companyName: z.string().optional(),
  visionPitch: z.string().optional(),
  linkedinUrl: z.string().optional(),
  githubUrl: z.string().optional(),
  websiteUrl: z.string().optional(),
  roleInterest: z.string().optional(),
  resumeContent: z.string().optional(),
  partnershipInterest: z.string().optional(),
});

export const IncubatorMemberSchemaForAgent = z.object({
    id: z.string(),
    name: z.string(),
    expertise: z.string(),
    status: z.enum(['Available', 'Assigned']),
    submissionId: z.string().optional(),
});

export const ChallengeSchemaForAgent = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    status: z.enum(['Open', 'Assigned', 'Completed']),
    domain: z.string(),
    submissionId: z.string().optional(),
});

export const CommandCenterChatInputSchema = z.object({
  agentId: z.string().describe("The ID of the agent to chat with."),
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.string(),
  })).describe("The chat history."),
  submissions: z.array(SubmissionSchemaForAgent).optional().describe("A list of current submissions from Firestore."),
  roster: z.array(IncubatorMemberSchemaForAgent).optional().describe("A list of current incubator members from Firestore."),
  challenges: z.array(ChallengeSchemaForAgent).optional().describe("A list of current challenges from Firestore."),
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
  submissions: z.array(SubmissionSchemaForAgent).optional(),
  roster: z.array(IncubatorMemberSchemaForAgent).optional(),
  challenges: z.array(ChallengeSchemaForAgent).optional(),
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

export const IncubatorMatcherInputSchema = z.object({
    matchType: z.enum(['practitioner', 'challenge']),
    targetId: z.string(),
    practitioners: z.array(IncubatorMemberSchemaForAgent),
    challenges: z.array(ChallengeSchemaForAgent),
});

export const IncubatorMatcherOutputSchema = z.object({
    matches: z.array(z.object({
        id: z.string(),
        name: z.string().describe("The name of the matched practitioner or title of the matched challenge."),
        rationale: z.string().describe("A brief, one-sentence explanation for why this is a good match."),
    })).describe("A list of the top 3-5 matches, sorted by relevance."),
});

export type IncubatorMatcherInput = z.infer<typeof IncubatorMatcherInputSchema>;
export type IncubatorMatcherOutput = z.infer<typeof IncubatorMatcherOutputSchema>;


export const SubmissionSorterInputSchema = SubmissionSchemaForAgent;

export const SubmissionSorterOutputSchema = z.object({
  decision: z.enum(['addToRoster', 'createChallenge', 'archive']).describe("The agent's decision on how to classify the submission."),
  payload: z.union([
    z.object({
      name: z.string(),
      expertise: z.string(),
    }),
    z.object({
      title: z.string(),
      description: z.string(),
      domain: z.string(),
    }),
    z.object({
      reason: z.string(),
    }),
  ]).describe("The data payload corresponding to the decision. Contains roster details, challenge details, or an archive reason."),
  rationale: z.string().describe("The reasoning behind the agent's decision."),
});

export type SubmissionSorterOutput = z.infer<typeof SubmissionSorterOutputSchema>;
