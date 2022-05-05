import { Avatar, Box, Button, Chip, Stack, Typography } from '@mui/material';
import React from 'react';
import Avatars from '~/components/avatars/Avatars';

type EventCardProps = {
  title: string;
  description: string;
  username: string;
  avatarUrl: string;
  time: string;
  tag: string;
};

export function EventCard({
  title,
  description,
  username,
  avatarUrl,
  time,
  tag,
}: EventCardProps) {
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

      <Stack direction="row" spacing={1}>
        <Chip label={tag} />
      </Stack>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="caption">{time}</Typography>
        <Avatars></Avatars>
      </Box>

      <Typography variant="subtitle2">About Event</Typography>

      <Typography variant="body2">{description}</Typography>

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
          <a href="/profile">view profile</a>
        </Box>
      </Box>

      <Button variant="contained">Join event</Button>
    </Box>
  );
}
