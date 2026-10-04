
'use server';

import { aiPartnerChat, type AiPartnerChatInput } from '@/ai/flows/ai-partner-chat';
import { commandCenterChat, type CommandCenterChatInput } from '@/ai/flows/command-center-chat';
import { runStrategist, type StrategistInput, type StrategistOutput } from '@/ai/flows/strategist';
import { runSubmissionSorter, type SubmissionSorterOutput } from '@/ai/flows/submission-sorter';
import type { Submission } from '@/lib/submissions';
import { runIncubatorMatcher, type IncubatorMatcherInput, type IncubatorMatcherOutput } from '@/ai/flows/incubator-matcher';


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

export async function sortSubmissionAction(submission: Submission): Promise<{ success: boolean; data?: SubmissionSorterOutput; message?: string; }> {
    try {
        const result = await runSubmissionSorter(submission);
        return { success: true, data: result };
    } catch (error) {
        console.error("Submission Sorter flow failed:", error);
        const message = error instanceof Error ? error.message : "An unexpected error occurred while sorting the submission.";
        return { success: false, message };
    }
}

export async function runIncubatorMatcherAction(input: IncubatorMatcherInput): Promise<{ success: boolean; data?: IncubatorMatcherOutput; message?: string; }> {
    try {
        const result = await runIncubatorMatcher(input);
        return { success: true, data: result };
    } catch (error) {
        console.error("Incubator Matcher flow failed:", error);
        const message = error instanceof Error ? error.message : "An unexpected error occurred while finding matches.";
        return { success: false, message };
    }
}

export interface EnterpriseDiagnosticInput {
    companyName: string;
    executiveSponsor: string;
    workEmail: string;
    industry: string;
    dataProfile: string[];
    pqcAwareness: string;
    currentEncryption: string;
    dataLifespan: string;
    classicalLimitations: string;
    aiArchitecture: string;
    immediateGoal: string[];
}

export async function submitEnterpriseDiagnosticAction(input: EnterpriseDiagnosticInput) {
    try {
        const timestamp = new Date().toISOString();
        const referenceId = `EQD-${Date.now().toString(36).toUpperCase()}`;
        console.log(`[Enterprise Quantum Diagnostic] Received ${referenceId} from ${input.companyName} (${input.executiveSponsor}) at ${timestamp}:`, input);

        return { 
            success: true, 
            referenceId,
            message: "Diagnostic received. Our chief quantum architects will evaluate your baseline and reach out within 24 hours." 
        };
    } catch (error) {
        console.error("Diagnostic submission failed:", error);
        const message = error instanceof Error ? error.message : "An unexpected error occurred during submission.";
        return { success: false, message };
    }
}

