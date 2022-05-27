import { Key, MailOutlined, PersonOutline } from '@mui/icons-material';
import { Box, Button, Link } from '@mui/material';
import { useSnackbar } from 'notistack';
import React from 'react';
import AppInput from '~/components/global/AppInput';
import AppLogo from '~/components/global/AppLogo';
import { useAuthForm } from '~/hooks/useAuthForm';

// Test component, need to be styled
export default function Register() {
  const { authRequest } = useAuthForm('register');
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmpassword.value;

    if (password !== confirmPassword) {
      enqueueSnackbar('Password and confirm password must be the same', {
        variant: 'error',
      });
      return;
    }

    authRequest({ username, password, email });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
      gap={2}
    >
      <AppLogo
        sx={{
          fontSize: '42px',
        }}
      />
      <Box onSubmit={onSubmit} component="form" width="100%">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <AppInput
            id="username"
            type="text"
            placeholder="Username"
            icon={<PersonOutline />}
          />
          <AppInput
            id="email"
            type="text"
            placeholder="Email"
            icon={<MailOutlined />}
          />
          <AppInput
            id="password"
            type="password"
            placeholder="Password"
            icon={<Key />}
          />
          <AppInput
            id="confirmpassword"
            type="password"
            placeholder="Confirm Password"
            icon={<Key />}
          />

          <Button type="submit" variant="contained" size="small">
            Sign Up
          </Button>
          <Box display="flex" justifyContent="center" gap={1} fontSize="14px">
            Already have an account? <Link href="/login">Log in here</Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
