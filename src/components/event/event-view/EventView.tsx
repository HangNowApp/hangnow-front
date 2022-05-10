import { Avatar, Box, Button, Link, Typography } from '@mui/material';
import React from 'react';
import Avatars from '~/components/avatars/Avatars';
import TagFilter from '~/components/TagFilter/TagFilter';

type EventViewProps = {
  title: string;
  description: string;
  username: string;
  avatarUrl: string;
  time: string;
  tag: string;
};

export function EventView({
  title,
  description,
  username,
  avatarUrl,
  time,
  tag,
}: EventViewProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        margin: 'auto',
      }}
    >
      <Typography variant="h4">{title}</Typography>

      <Box sx={{ direction: 'row', gap: 1 }}>
        <TagFilter
          tags={[
            { id: 0, name: 'Financens' },
            { id: 1, name: 'Oui' },
            { id: 2, name: 'Non' },
          ]}
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="caption">{time}</Typography>
        <Avatars />
      </Box>

      <Typography variant="subtitle2">About Event</Typography>

      <Typography variant="body2" fontStyle="italic">
        {description}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 2,
          margin: 'left',
        }}
      >
        <Avatar alt="" src={avatarUrl} />
        <Box>
          <Typography variant="body2">{username}</Typography>
          <Link href="/profile">view profile</Link>
        </Box>
      </Box>

      <Button variant="contained">Join event</Button>
    </Box>
  );
}
