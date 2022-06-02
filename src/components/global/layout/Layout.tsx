import { ArrowBack } from '@mui/icons-material';
import { Box, Button, Container } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { PropsWithChildren } from 'react';
import AppFooter from '../AppFooter/AppFooter';
import AppNavbar from '../AppNavbar';

export default function Layout({ children }: PropsWithChildren<never>) {
  const router = useRouter();
  const isNotLogin = router.route !== '/login';
  const isNotRegister = router.route !== '/register';
  return (
    <Container
      maxWidth="sm"
      sx={{ height: 1, display: 'flex', flexDirection: 'column', gap: 2, p: 1 }}
    >
      <Box>
        {isNotLogin && isNotRegister ? (
          <AppNavbar />
        ) : (
          <Link href="/" passHref>
            <Button variant="text" size="small" href="">
              <ArrowBack /> Go back
            </Button>
          </Link>
        )}
      </Box>

      <Box sx={{ flex: 1, mt: 6 }}>{children}</Box>

      {isNotLogin && isNotRegister && (
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
      )}
    </Container>
  );
}
