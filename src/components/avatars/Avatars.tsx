import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { User } from '~/client/types/User';

type AvatarsProps = {
  users?: User[];
};

export default function Avatars({ users }: AvatarsProps) {
  return (
    <AvatarGroup max={4}>
      {users?.map((u, i) => (
        <Avatar
          key={i}
          alt=""
          src={u.avatarUrl}
          sx={{ width: 32, height: 32 }}
        />
      ))}
    </AvatarGroup>
  );
}
