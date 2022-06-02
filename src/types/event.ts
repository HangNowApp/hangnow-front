import { User } from '~/client/types/User';
import { Tag } from './tag';

export type AppEvent = {
  id: number;
  name: string;
  description?: string;
  location?: string;
  imageUrl?: string;
  startDate?: Date;
  endDate?: Date;
  owner?: User;
  users?: User[];
  tags?: Tag[];
  createdAt?: Date;
};
