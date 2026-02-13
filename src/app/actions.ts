
'use server';

import { aiPartnerChat, type AiPartnerChatInput } from '@/ai/flows/ai-partner-chat';
import { commandCenterChat, type CommandCenterChatInput } from '@/ai/flows/command-center-chat';
import { runStrategist, type StrategistInput, type StrategistOutput } from '@/ai/flows/strategist';

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

export async function submitCommandCenterMessage(input: CommandCenterChatInput) {
    try {
        const result = await commandCenterChat(input);
        return { success: true, data: result };
    } catch (error) {
        console.error("Command Center Chat failed:", error);
        const message = error instanceof Error ? error.message : "An unexpected error occurred.";
        return { success: false, message };
    }
}

export async function generateProposalAction(input: StrategistInput): Promise<{ success: boolean; data?: StrategistOutput; message?: string; }> {
    try {
        const result = await runStrategist(input);
        return { success: true, data: result };
    } catch (error) {
        console.error("Strategist flow failed:", error);
        const message = error instanceof Error ? error.message : "An unexpected error occurred while generating the proposal.";
        return { success: false, message };
    }
}
