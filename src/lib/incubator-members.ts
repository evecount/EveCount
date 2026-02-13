
export interface IncubatorMember {
  id: string;
  name: string;
  expertise: string;
  status: 'Available' | 'Assigned';
  submissionId?: string;
}
