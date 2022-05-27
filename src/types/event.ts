import { User } from '~/client/types/User';
import { Tag } from './tag';

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
