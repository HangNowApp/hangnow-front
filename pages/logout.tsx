import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { JWT } from '~/client/jwr';
import { useAuthContext } from '~/context/AuthContext';

export default function logout() {
  const router = useRouter();
  const authContext = useAuthContext();

  useEffect(() => {
    authContext.logout();
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }, []);

  return (
    <Box>
      <Typography variant="h4">You're logout</Typography>
      <Typography variant="body1">
        You will be redirect in 5 secondes...
      </Typography>
    </Box>
  );
}
