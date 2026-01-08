import { config } from 'dotenv';
config();

import '@/ai/flows/dual-persona-ai-feedback.ts';
import '@/ai/flows/ai-lead-gatekeeper.ts';
import '@/ai/flows/multilingual-ocr-fact-extraction.ts';
import '@/ai/flows/ai-menu-auto-gen.ts';