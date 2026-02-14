
import challengesData from './challenges.json';

export interface Challenge {
  id: string;
  title: string;
  description: string;
  status: 'Open' | 'Assigned' | 'Completed';
  domain: string;
  submissionId?: string;
}

export const challenges: Challenge[] = challengesData;
