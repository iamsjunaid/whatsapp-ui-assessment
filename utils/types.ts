export type Group = {
  id: number;
  name: string;
  project: string;
  labels: string[];
  members: number;
  last_active: string;
  details?: string;
};
