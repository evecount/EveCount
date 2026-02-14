
import membersData from './incubator-members.json';

export interface IncubatorMember {
  id: string;
  name: string;
  expertise: string;
  status: 'Available' | 'Assigned' | 'Completed';
  submissionId?: string;
  resume?: string;
}

export const incubatorMembers: IncubatorMember[] = membersData;
