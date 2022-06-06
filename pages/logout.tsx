import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { useAuthContext } from '~/hooks/context/AuthContext';

export default function Logout() {
  const router = useRouter();
  const authContext = useAuthContext();
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    authContext.logout();
    timeoutRef.current = setTimeout(() => {
      void router.push('/');
    }, 5000);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [authContext, router]);

  return (
    <Box>
      <Typography variant="h4">You're logout</Typography>
      <Typography variant="body1">
        You will be redirect in 5 secondes...
      </Typography>
    </Box>
  );
}
