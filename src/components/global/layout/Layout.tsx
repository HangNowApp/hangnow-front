import { Box, Container } from '@mui/material';
import { useRouter } from 'next/router';
import React, { PropsWithChildren } from 'react';
import AppFooter from '../AppFooter/AppFooter';
import AppNavbar from '../AppNavbar';

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <Container
      maxWidth="sm"
      sx={{ height: 1, display: 'flex', flexDirection: 'column', gap: 2, p: 1 }}
    >
      <Box my={1}>
        <AppNavbar />
      </Box>

      <Box sx={{ flex: 1 }}>{children}</Box>

      <Box
        display="flex"
        justifyContent="center"
        my={1}
        position="fixed"
        bottom={0}
        right={0}
        left={0}
        margin={-1}
        bgcolor="background.paper"
      >
        <AppFooter />
      </Box>
    </Container>
  );
}
