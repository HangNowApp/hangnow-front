import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import { clientJson } from '~/client/client';

// Test component, need to be styled

export default function login() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;

    clientJson('auth/login', { data: { email, password } }).then((v) => {
      console.log(v);
    });
  };

  return (
    <Box>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField id="email" type="text" placeholder="Email" />
          <TextField id="password" type="password" placeholder="Password" />
          <Button type="submit">Login</Button>
        </Box>
      </form>
    </Box>
  );
}
