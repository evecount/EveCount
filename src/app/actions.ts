'use server';

import { aiPartnerChat, type AiPartnerChatInput } from '@/ai/flows/ai-partner-chat';
import type { z } from 'zod';

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
