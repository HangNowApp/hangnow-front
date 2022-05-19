import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuthContext } from '~/hooks/context/AuthContext';
import AppLogo from './AppLogo';

export default function AppNavbar() {
  const router = useRouter();
  const isNotLogin = router.route !== '/login';

  const authContext = useAuthContext();

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      gap={2}
      minHeight={42}
    >
      <Link href="/">
        <Box component="a" sx={{ mr: 'auto' }}>
          <AppLogo sx={{ cursor: 'pointer' }} />
        </Box>
      </Link>
      {authContext.isLoggedIn && (
        <Link href="/account">
          <Typography>@{authContext.user?.userName}</Typography>
        </Link>
      )}
      {isNotLogin && (
        <Link href={authContext.isLoggedIn ? '/logout' : '/login'}>
          <Button variant="contained" size="small" href="">
            {authContext.isLoggedIn ? 'Logout' : 'Login'}
          </Button>
        </Link>
      )}
    </Box>
  );
}
