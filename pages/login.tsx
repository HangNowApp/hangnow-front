import { Key, MailOutlined } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { clientJson } from '~/client/client';
import { JWT } from '~/client/jwr';
import { AuthResponse } from '~/client/types/Auth';
import AppInput from '~/components/global/AppInput';
import AppLogo from '~/components/global/AppLogo';
import { useAuthContext } from '~/context/AuthContext';

// Test component, need to be styled

export default function login() {
  const [error, setError] = useState<string>('');

  const router = useRouter();
  const authContext = useAuthContext();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;

    clientJson<AuthResponse>('auth/login', { data: { email, password } })
      .then((res) => {
        if (res.result) {
          router.push('/');
          authContext.login(res.token);
        } else {
          setError(res.message);
        }
      })
      .catch((r) => {
        r.json().then((res: AuthResponse) => {
          if (!res.result) {
            console.log('set error', res);
            setError(res.message);
          }
        });
      });
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
          {error ? <Typography color="error">{error}</Typography> : null}

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
