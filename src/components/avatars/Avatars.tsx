import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

type AvatarsProps = {
  avatarUrl?: string;
};

export default function Avatars({ avatarUrl }: AvatarsProps) {
  return (
    <AvatarGroup max={4}>
      {new Array(5).fill(null).map((_, i) => (
        <Avatar key={i} alt="" src={avatarUrl} />
      ))}
    </AvatarGroup>
  );
}
