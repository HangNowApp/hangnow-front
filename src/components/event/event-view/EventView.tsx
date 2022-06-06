import {
  Alert,
  Avatar,
  Box,
  Button,
  CircularProgress,
  Link as MuiLink,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { clientJson } from '~/client/client';
import Avatars from '~/components/avatars/Avatars';
import { useAuthContext } from '~/hooks/context/AuthContext';
import { AppEvent } from '~/types/event';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import TagChip from '~/components/TagFilter/TagChip';

export function EventView(props: { event: AppEvent }) {
  const authContext = useAuthContext();
  const { enqueueSnackbar } = useSnackbar();
  const [event, setEvent] = useState(props.event);

  const currentUserIsInEvent =
    event.users?.some((u) => u.id === authContext.user?.id) ?? false;

  const isAdminOfEvent = event.owner?.id === authContext.user?.id;

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

  if (authContext.isLoading) {
    return <CircularProgress />;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        margin: 'auto',
      }}
    >
      <Box
        sx={{
          maxHeight: '100px',
          overflow: 'hidden',
        }}
      >
        <img object-fit="cover" object-position="center" src={event.imageUrl} />
      </Box>

      <Box>
        <Typography variant="h4">{event.name}</Typography>

        {event.tags?.length ? (
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, mt: 1 }}>
            {event.tags.map((tag) => (
              <TagChip name={tag.name} key={tag.id} selected={false} />
            ))}
          </Box>
        ) : null}
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="body2" align="left">
          <LocationOnOutlinedIcon fontSize="small" />
          {event.location}
        </Typography>

        <Avatars users={event.users} />
      </Box>

      <Box>
        <Typography variant="subtitle2">About Event</Typography>
        <Typography variant="body2" fontStyle="italic">
          {event.description}
        </Typography>
      </Box>

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

      {isAdminOfEvent || !authContext.user ? null : (
        <Button variant="contained" onClick={handleJoinOrLeave}>
          {currentUserIsInEvent ? 'Leave' : 'Join'} event
        </Button>
      )}
      {!authContext.user ? <Alert severity="error">Login to join</Alert> : null}

      {currentUserIsInEvent ? (
        <Alert severity="success">You are part of this event.</Alert>
      ) : null}

      {isAdminOfEvent ? <DeleteButton eventId={event.id} /> : null}
    </Box>
  );
}

const DeleteButton = ({ eventId }: { eventId: number }) => {
  const [confirmation, setConfirmation] = useState(false);
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const onDelete = () => {
    clientJson<AppEvent>(`event/${eventId}`, { method: 'DELETE' })
      .then(() => {
        void router.push('/');
      })
      .catch(() => {
        enqueueSnackbar('Failed to delete event', { variant: 'error' });
      });
  };

  return (
    <Button
      onClick={() => {
        if (!confirmation) {
          setConfirmation(true);
        } else {
          onDelete();
        }
      }}
      variant="text"
      color={confirmation ? 'warning' : 'primary'}
    >
      {confirmation ? 'Are you sure?' : 'Delete'}
    </Button>
  );
};
