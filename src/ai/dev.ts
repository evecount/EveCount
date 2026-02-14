
'use client';
import { config } from 'dotenv';
config();

import '@/ai/flows/dual-persona-ai-feedback.ts';
import '@/ai/flows/multilingual-ocr-fact-extraction.ts';
import '@/ai/flows/ai-menu-auto-gen.ts';
import '@/ai/flows/ai-partner-chat.ts';
import '@/ai/flows/strategist.ts';
import '@/ai/flows/command-center-chat.ts';
import '@/ai/flows/submission-sorter.ts';
import '@/ai/flows/incubator-matcher.ts';
import '@/ai/tools/web-search.ts';
import '@/ai/tools/internal-resonance.ts';
import '@/ai/tools/dynamic-persona-adjustment.ts';
import '@/ai/tools/business-consultant.ts';
