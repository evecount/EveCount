'use server';

/**
 * @fileOverview Tools for AI agents to access static data about the incubator roster and challenges.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { challenges } from '@/lib/challenges';
import { incubatorMembers } from '@/lib/incubator-members';

export const getRoster = ai.defineTool(
  {
    name: 'getRoster',
    description: 'Retrieves the full roster of current AI practitioners in the NTU x Eve Count incubator, including their domain expertise.',
    inputSchema: z.object({}),
    outputSchema: z.array(z.object({
        name: z.string(),
        expertise: z.string(),
    })),
  },
  async () => {
    return incubatorMembers;
  }
);

export const getChallenges = ai.defineTool(
  {
    name: 'getChallenges',
    description: 'Retrieves the list of open and assigned business challenges on the Incubator Challenge Board.',
    inputSchema: z.object({}),
    outputSchema: z.array(z.object({
        id: z.string(),
        title: z.string(),
        description: z.string(),
        status: z.string(),
        domain: z.string(),
    })),
  },
  async () => {
    return challenges;
  }
);
