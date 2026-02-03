'use server';

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { ventures } from '@/lib/ventures';
import { researchProjects } from '@/lib/research-projects';

// A simplified text-matching function for demonstration.
function performResonanceAnalysis(query: string): string {
  console.log(`Performing internal resonance analysis for: "${query}"`);
  const lowerQuery = query.toLowerCase();

  const ventureKeywords = ventures.map(v => v.sector.toLowerCase()).join(' ');
  const researchKeywords = researchProjects.map(p => p.field.toLowerCase()).join(' ');

  let resonance = "This idea has some novel aspects.";
  let alignmentFound = false;

  if (lowerQuery.includes('quantum') || researchKeywords.includes('quantum')) {
    resonance = "This aligns strongly with our Quantum research track (PQC, QKD, QML). There is significant internal resonance here.";
    alignmentFound = true;
  } else if (lowerQuery.includes('ai') || lowerQuery.includes('agent') || lowerQuery.includes('machine learning')) {
     resonance = "This aligns with our AI focus, particularly in agentic systems and AI architecture. There is strong internal resonance.";
     alignmentFound = true;
  } else if (ventureKeywords.includes(lowerQuery)) {
      resonance = `This shows alignment with our existing portfolio in the ${lowerQuery} sector. There may be opportunities for synergy.`;
      alignmentFound = true;
  }

  if (alignmentFound) {
      return `Resonance analysis complete. ${resonance} Let's explore the specific technical approach.`;
  }
  
  return `Resonance analysis complete. The concept appears to be outside our immediate focus areas of Quantum and AI, but we are always interested in foundational technologies. Let's delve deeper into the core problem you're solving.`;
}


export const analyzeInternalResonance = ai.defineTool(
  {
    name: 'analyzeInternalResonance',
    description: "Analyzes a founder's idea against Eve Count's internal portfolio, research tracks, and core investment thesis (Quantum & AI). Use this to determine if there is 'Internal Resonance' with the founder's vision.",
    inputSchema: z.object({
      concept: z.string().describe("A summary of the founder's core idea or technology."),
    }),
    outputSchema: z.string().describe('A concise summary of the resonance analysis, stating the alignment.'),
  },
  async (input) => {
    return performResonanceAnalysis(input.concept);
  }
);
