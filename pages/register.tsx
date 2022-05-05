import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { clientJson } from '~/client/client';
import { JWT } from '~/client/jwr';
import { AuthResponse } from '~/client/types/Auth';
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
  };

  return (
    <Box sx={{ m: 'auto' }}>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <TextField id="username" type="text" placeholder="Username" />
          <TextField id="email" type="email" placeholder="Email" />
          <TextField id="password" type="password" placeholder="Password" />
          {error ? <Typography color="error">{error}</Typography> : null}

          <Button type="submit">Login</Button>
        </Box>
      </form>
    </Box>
  );
}
