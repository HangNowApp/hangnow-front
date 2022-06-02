import { Key, MailOutlined } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import AppInput from '~/components/global/AppInput';
import AppLogo from '~/components/global/AppLogo';
import { useAuthForm } from '~/hooks/useAuthForm';

export default function Login() {
  const { authRequest } = useAuthForm('login');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;

    authRequest({ email, password });
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
          <Box display="flex" justifyContent="end" fontSize="14px">
            <Link href="/register">Forgot password?</Link>
          </Box>
          <Button type="submit" variant="contained" size="small">
            Login
          </Button>
          <Box display="flex" justifyContent="center" gap={1} fontSize="14px">
            Don't have an account? <Link href="/register">Sign up here</Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
