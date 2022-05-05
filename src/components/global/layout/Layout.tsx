import { Box, Container } from '@mui/material';
import { useRouter } from 'next/router';
import React, { PropsWithChildren } from 'react';
import AppNavbar from '../AppNavbar';

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <Container
      maxWidth="sm"
      sx={{ height: 1, display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <Box my={1}>
        <AppNavbar />
      </Box>

      <Box sx={{ flex: 1 }}>{children}</Box>

      {/* TODO: replace by footer */}
      <Box my={1}>
        <p>Footer</p>
      </Box>
    </Container>
  );
}
