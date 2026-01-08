'use server';

import { aiLeadGatekeeper, type AiLeadGatekeeperInput, type AiLeadGatekeeperOutput } from '@/ai/flows/ai-lead-gatekeeper';
import { aiPartnerChat, type AiPartnerChatInput } from '@/ai/flows/ai-partner-chat';
import { visionPitchSchema } from '@/lib/schemas';
import type { z } from 'zod';


type ActionResponse = {
  success: boolean;
  message: string;
  data?: AiLeadGatekeeperOutput;
  errors?: z.ZodIssue[];
}

export async function submitVisionPitch(formData: AiLeadGatekeeperInput): Promise<ActionResponse> {
  const parsed = visionPitchSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      success: false,
      message: "Invalid form data.",
      errors: parsed.error.issues,
    };
  }

  try {
    const result = await aiLeadGatekeeper(parsed.data);
    return {
      success: true,
      message: "Pitch submitted successfully!",
      data: result,
    };
  } catch (error) {
    console.error("AI Lead Gatekeeper failed:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}

export async function submitChatMessage(input: AiPartnerChatInput) {
    try {
        const result = await aiPartnerChat(input);
        return { success: true, data: result };
    } catch (error) {
        console.error("AI Partner Chat failed:", error);
        const message = error instanceof Error ? error.message : "An unexpected error occurred.";
        return { success: false, message };
    }
}
