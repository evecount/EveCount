
import challengeData from './challenges.json';

export interface Challenge {
  id: string;
  title: string;
  description: string;
  status: 'Open' | 'Assigned' | 'Completed';
  domain: string;
}

export const challenges: Challenge[] = challengeData;

    