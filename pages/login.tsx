import { Box, Button, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { clientJson } from '~/client/client';
import { JWT } from '~/client/jwr';
import { AuthResponse } from '~/client/types/Auth';
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
    <Box>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField id="email" type="text" placeholder="Email" />
          <TextField id="password" type="password" placeholder="Password" />
          {error ? <Typography color="error">{error}</Typography> : null}

          <Button type="submit">Login</Button>
        </Box>
      </form>
    </Box>
  );
}
