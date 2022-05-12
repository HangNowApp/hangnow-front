import {
  Avatar,
  Box,
  Button,
  TextField,
  TextFieldProps,
  Typography,
} from '@mui/material';
import React from 'react';

export function UserProfile() {
  const [user, setUser] = React.useState();
  const isEditing = React.useState(false);

  const textFieldCommonProps: TextFieldProps = {
    disabled: !isEditing,
    variant: isEditing ? 'filled' : 'standard',
    margin: 'dense',
    size: 'small',
  };

  const handleChange = () => {
    isEditing;
  };

  return (
    <Box
      sx={{
        component: 'form',
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
        <Typography variant="h4">Pascal's profile page</Typography>
        <Avatar
          alt="avatar"
          src="https://avatars0.githubusercontent.com/u/17098180?s=460&v=4"
          sx={{ width: 80, height: 80 }}
        />
      </Box>

      <TextField
        {...textFieldCommonProps}
        label="Username"
        defaultValue="Pascal"
      />
      <TextField
        {...textFieldCommonProps}
        label="Email"
        defaultValue="pascal@pascou.com"
      />
      <TextField
        {...textFieldCommonProps}
        label="AvatarURL"
        defaultValue="https://avatars0.githubusercontent.com/u/17098180?s=460&v=4"
      />
      <TextField
        {...textFieldCommonProps}
        type="password"
        label="Password"
        defaultValue="passworddasdas"
      />

      <Button
        onClick={handleChange}
        size="small"
        type="submit"
        variant="contained"
      >
        {isEditing ? 'Save profile' : 'Edit profile'}
      </Button>
    </Box>
  );
}
