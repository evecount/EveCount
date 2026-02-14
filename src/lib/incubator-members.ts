
import membersData from './incubator-members.json';

export interface IncubatorMember {
  id: string;
  name: string;
  expertise: string;
  status: 'Available' | 'Assigned';
  submissionId?: string;
}

export const incubatorMembers: IncubatorMember[] = membersData;
