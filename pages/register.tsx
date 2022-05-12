import { Key, MailOutlined, Person, PersonOutline } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';
import { clientJson } from '~/client/client';
import { JWT } from '~/client/jwr';
import { AuthResponse } from '~/client/types/Auth';
import AppInput from '~/components/global/AppInput';
import AppLogo from '~/components/global/AppLogo';
import { useAuthContext } from '~/context/AuthContext';

// Test component, need to be styled
export default function Register() {
  const [error, setError] = useState<string>('');
  const authContext = useAuthContext();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setError('');
    e.preventDefault();

    const form = e.currentTarget;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmpassword.value;

    if (confirmPassword === password) {
      clientJson<AuthResponse>('auth/register', {
        data: { username, password, email },
      })
        .then((res) => {
          if (res.result) {
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
    } else {
      setError("The two passwords fields don't match!");
    }
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
          {error ? <Typography color="error">{error}</Typography> : null}

          <Button type="submit" variant="contained" size="small">
            Sign Up
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
