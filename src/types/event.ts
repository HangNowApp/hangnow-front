import { User } from '~/client/types/User';
import { tag } from './tag';

export type AppEvent = {
  id: string;
  name: string;
  description?: string;
  location?: string;
  imageUrl?: string;
  startDate?: Date;
  endDate?: Date;
  owner?: User;
  users?: User[];
  tags?: tag[];
  createdAt?: Date;
};
