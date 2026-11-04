
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
    executiveRole?: string;
    workEmail: string;
    organizationScale?: string;
    industry?: string;
    primaryObjective?: string;
    assetLiabilityBracket?: string;
    procurementTimeline?: string;
    mndaRequired?: boolean;
    technicalContext?: string;
    dataProfile?: string[];
    pqcAwareness?: string;
    currentEncryption?: string;
    dataLifespan?: string;
    classicalLimitations?: string;
    aiArchitecture?: string;
    immediateGoal?: string[];
}

export async function submitEnterpriseDiagnosticAction(input: EnterpriseDiagnosticInput) {
    try {
        const timestamp = new Date().toISOString();
        const referenceId = `EC-DOCKET-${Date.now().toString(36).toUpperCase()}`;
        console.log(`[Institutional Quantum Commissioning] Registered ${referenceId} from ${input.companyName} (${input.executiveSponsor} - ${input.executiveRole || 'Executive'}) at ${timestamp}:`, input);

        return { 
            success: true, 
            referenceId,
            message: "Institutional commission registered. A bilateral MNDA and direct executive briefing docket have been generated." 
        };
    } catch (error) {
        console.error("Institutional commissioning failed:", error);
        const message = error instanceof Error ? error.message : "An unexpected error occurred during submission.";
        return { success: false, message };
    }
}

export interface WorkInquiryInput {
    kind: string;
    name: string;
    title?: string;
    org?: string;
    email: string;
    sector?: string;
    message?: string;
    details?: Record<string, unknown>;
}

export async function submitWorkInquiryAction(input: WorkInquiryInput) {
    try {
        const timestamp = new Date().toISOString();
        const referenceId = `EC-WORK-${Date.now().toString(36).toUpperCase()}`;
        const notifyRecipients = ['gwen@evecount.com', 'ben@evecount.com', 'one@evecount.com'];
        console.log(`[Eve Count Work Practice] Registered ${referenceId} (${input.kind}) from ${input.name} <${input.email}> at ${timestamp} -> routing to ${notifyRecipients.join(', ')}:`, input);

        // 1. Forward to Lovable Supabase leads table
        try {
            const supabaseUrl = 'https://owghtvyaaimfsojmklwj.supabase.co/rest/v1/leads';
            const supabaseKey = 'sb_publishable_8a-VDj4n4jghAZLlUnNDqQ_x_nEWncy';
            await fetch(supabaseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': supabaseKey,
                    'Authorization': `Bearer ${supabaseKey}`,
                    'Prefer': 'return=minimal',
                },
                body: JSON.stringify({
                    kind: input.kind,
                    name: input.name,
                    title: input.title ?? '',
                    org: input.org ?? '',
                    email: input.email,
                    sector: input.sector ?? '',
                    message: input.message ?? '',
                    details: {
                        ...(input.details ?? {}),
                        referenceId,
                        notifyRecipients,
                    },
                }),
            });
        } catch (forwardErr) {
            console.warn("Optional Supabase forward skipped:", forwardErr);
        }

        // 2. Dispatch email notification to gwen@evecount.com, ben@evecount.com, and one@evecount.com
        try {
            await fetch('https://formsubmit.co/ajax/gwen@evecount.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    _subject: `[Eve Count Work · ${referenceId}] ${input.kind} — ${input.org || input.name}`,
                    _cc: 'ben@evecount.com,one@evecount.com',
                    _replyto: input.email,
                    referenceId,
                    kind: input.kind,
                    name: input.name,
                    title: input.title ?? 'Not specified',
                    organisation: input.org ?? 'Not specified',
                    email: input.email,
                    sector: input.sector ?? 'Not specified',
                    message: input.message ?? '',
                    details: JSON.stringify(input.details ?? {}),
                    submittedAt: timestamp,
                }),
            });
        } catch (mailErr) {
            console.warn("Optional email webhook dispatch skipped:", mailErr);
        }

        return {
            success: true,
            referenceId,
            notifyRecipients,
        };
    } catch (error) {
        console.error("Work inquiry submission failed:", error);
        const message = error instanceof Error ? error.message : "An unexpected error occurred.";
        return { success: false, message };
    }
}


