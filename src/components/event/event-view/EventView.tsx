import {
  Avatar,
  Box,
  Button,
  Link as MuiLink,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { clientJson } from '~/client/client';
import Avatars from '~/components/avatars/Avatars';
import { useAuthContext } from '~/hooks/context/AuthContext';
import { AppEvent } from '~/types/event';

export function EventView(props: { event: AppEvent }) {
  const authContext = useAuthContext();
  const { enqueueSnackbar } = useSnackbar();
  const [event, setEvent] = useState(props.event);

  const currentUserIsInEvent =
    event.users?.some((u) => u.id === authContext.user?.id) ?? false;

  const handleJoinOrLeave = () => {
    if (currentUserIsInEvent) {
      clientJson<AppEvent>(`event/${event.id}/leave`, {
        method: 'DELETE',
      })
        .then((updatedEvent) => {
          setEvent(updatedEvent);
          enqueueSnackbar('Leave event', { variant: 'success' });
        })
        .catch(() => {
          enqueueSnackbar('Failed to leave event', { variant: 'error' });
        });
    } else {
      clientJson<AppEvent>(`event/${event.id}/join`, { method: 'PATCH' })
        .then((updatedEvent) => {
          setEvent(updatedEvent);
          enqueueSnackbar('Joined event', { variant: 'success' });
        })
        .catch(() => {
          enqueueSnackbar('Failed to join event', { variant: 'error' });
        });
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        margin: 'auto',
      }}
    >
      <Typography variant="h4">{event.name}</Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="caption">
          {event.startDate?.toLocaleString('en-US', {})}
        </Typography>

        {currentUserIsInEvent ? (
          <Typography variant="body1" color="green">
            You are part of this event.
          </Typography>
        ) : null}

        <Avatars users={event.users} />
      </Box>

      <Typography variant="subtitle2">About Event</Typography>

      <Typography variant="body2" fontStyle="italic">
        {event.description}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 2,
          margin: 'left',
        }}
      >
        <Avatar alt="" src={event.owner?.avatarUrl} />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="body2">{event.owner?.userName}</Typography>
          <Link href={`/user/${event.owner?.id}`} passHref>
            <MuiLink sx={{ cursor: 'pointer' }}>view profile</MuiLink>
          </Link>
        </Box>
      </Box>

      <Button variant="contained" onClick={handleJoinOrLeave}>
        {currentUserIsInEvent ? 'Leave' : 'Join'} event
      </Button>
    </Box>
  );
}
