import {
  Avatar,
  Box,
  Button,
  TextField,
  TextFieldProps,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { clientJson } from '~/client/client';
import MeetEventCardList from '~/components/event/meet-event-card/MeetEventCardList';
import { PasswordDialog } from '~/components/user/PasswordDialog';
import { useAuthContext } from '~/hooks/context/AuthContext';
import { AppEvent } from '~/types/event';

export default function Account() {
  const { user, isLoading, update } = useAuthContext();
  const [events, setEvents] = useState<AppEvent[]>();
  const [isEditing, setEditing] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!user?.id) return;
    clientJson<AppEvent[]>(`event/user/${user.id}`)
      .then((events) => {
        setEvents(events);
      })
      .catch(() => {
        console.log('Failed to fetch events');
      });
  }, [user]);

  if (isLoading) {
    return null;
  }

  const textFieldCommonProps: TextFieldProps = {
    disabled: !isEditing,
    variant: isEditing ? 'filled' : 'standard',
    margin: 'dense',
    size: 'small',
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (!isEditing) {
      setEditing(true);
      return;
    }

    const username = event.currentTarget.username?.value;
    const email = event.currentTarget.email?.value;
    const avatarUrl = event.currentTarget.avatarUrl?.value;

    const user = {
      username,
      email,
      avatarUrl,
    };

    update(user)
      .then((user) => {
        setEditing(false);

        if (!user) {
          return;
        }
        const emailField = event.currentTarget.email;
        const usernameField = event.currentTarget.username;
        const avatarUrlField = event.currentTarget.avatarUrl;

        if (emailField) {
          emailField.value = user.email;
        }
        if (usernameField) {
          usernameField.value = user.userName;
        }
        if (avatarUrlField) {
          avatarUrlField.value = user.avatarUrl;
        }
      })
      .catch(() => {
        setEditing(false);
      });
  };

  return (
    <>
      <Box
        component={'form'}
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          margin: 'auto',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            alignItems: 'center',
          }}
        >
          <Typography variant="h4">{user?.userName}'s profile page</Typography>
          <Avatar
            alt="avatar"
            src={
              user?.avatarUrl ??
              'https://i.pinimg.com/474x/2f/ec/a4/2feca4c9330929232091f910dbff7f87.jpg'
            }
            sx={{ width: 80, height: 80 }}
          />
        </Box>

        <TextField
          {...textFieldCommonProps}
          id="username"
          label="Username"
          defaultValue={user?.userName}
        />
        <TextField
          {...textFieldCommonProps}
          id="email"
          type="email"
          label="Email"
          defaultValue={user?.email}
        />
        <TextField
          {...textFieldCommonProps}
          id="avatarUrl"
          label="AvatarURL"
          defaultValue={user?.avatarUrl ?? ''}
        />

        <Button size="small" onClick={handleOpen}>
          Change password
        </Button>

        <Button size="small" type="submit" variant="contained">
          {isEditing ? 'Save' : 'Edit'}
        </Button>
        <Link href="/premium">
          <Button size="small" variant="contained" color="secondary">
            Get Premium !
          </Button>
        </Link>
      </Box>
      {events ? (
        <>
          <Typography variant="h5" sx={{ my: 4 }}>
            My events
          </Typography>
          <MeetEventCardList cards={events} />
        </>
      ) : null}

      <PasswordDialog open={open} onClose={handleClose} />
    </>
  );
}
