import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

type AvatarsProps = {
  avatarUrl?: string;
};

export default function Avatars({ avatarUrl }: AvatarsProps) {
  return (
    <AvatarGroup max={4}>
      <Avatar alt="" src={avatarUrl} />
      <Avatar alt="" src={avatarUrl} />
      <Avatar alt="" src={avatarUrl} />
      <Avatar alt="" src={avatarUrl} />
      <Avatar alt="" src={avatarUrl} />
    </AvatarGroup>
  );
}
