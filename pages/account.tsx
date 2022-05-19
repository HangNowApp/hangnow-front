import {
  Avatar,
  Box,
  Button,
  TextField,
  TextFieldProps,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { PasswordDialog } from '~/components/user/PasswordDialog';
import { useAuthContext } from '~/hooks/context/AuthContext';

export default function account() {
  const authContext = useAuthContext();

  if (authContext.isLoading) {
    return null;
  }

  const user = authContext.user;
  const [isEditing, setEditing] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const textFieldCommonProps: TextFieldProps = {
    disabled: !isEditing,
    variant: isEditing ? 'filled' : 'standard',
    margin: 'dense',
    size: 'small',
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event?.preventDefault();
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

    authContext.update(user).then((user) => {
      setEditing(false);
      setIsLoading(false);

      if (!user) {
        return;
      }
      const emailField = event.currentTarget?.email;
      const usernameField = event.currentTarget?.username;
      const avatarUrlField = event.currentTarget?.avatarUrl;

      if (emailField) {
        emailField.value = user.email;
      }
      if (usernameField) {
        usernameField.value = user.userName;
      }
      if (avatarUrlField) {
        avatarUrlField.value = user.avatarUrl;
      }
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
      </Box>
      <PasswordDialog open={open} onClose={handleClose} />
    </>
  );
}
