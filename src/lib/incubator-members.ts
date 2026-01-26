
import memberData from './incubator-members.json';

export interface IncubatorMember {
  name: string;
  expertise: string;
}

export const incubatorMembers: IncubatorMember[] = memberData;
