import { Box, Container } from '@mui/material';
import { useRouter } from 'next/router';
import React, { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <Container
      maxWidth="sm"
      sx={{ height: 1, display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      {/* TODO: replace by navbar */}
      <Box my={1}>
        <h1>HangNow</h1>
      </Box>

      <Box sx={{ flex: 1 }}>{children}</Box>

      {/* TODO: replace by footer */}
      <Box my={1}>
        <p>Footer</p>
      </Box>
    </Container>
  );
}
