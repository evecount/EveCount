'use server';

import { aiLeadGatekeeper, type AiLeadGatekeeperInput, type AiLeadGatekeeperOutput } from '@/ai/flows/ai-lead-gatekeeper';
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
