export enum CONTACT_STATUS {
  'Absent',
  'Attended',
}

export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  email?: string;
  status: keyof typeof CONTACT_STATUS | string;
  avatarUrl: string;
}
