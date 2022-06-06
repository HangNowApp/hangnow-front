export type User = {
  id: string;
  userName: string;
  normalizedUsername: string;
  email: string;
  phoneNumber: string;
  avatarUrl: string;
  roles?: string[];
};
