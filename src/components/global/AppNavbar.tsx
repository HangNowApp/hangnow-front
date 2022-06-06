import { DiamondRounded } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuthContext } from '~/hooks/context/AuthContext';
import AppLink from './AppLink';
import AppLogo from './AppLogo';

export default function AppNavbar() {
  const router = useRouter();
  const isNotLogin = router.route !== '/login';

  const authContext = useAuthContext();

  return (
    <Box
      display="flex"
      position="fixed"
      flexDirection="row"
      alignItems="center"
      gap={2}
      minHeight={42}
      bgcolor="background.paper"
      zIndex={10}
      py={1}
      top={0}
      left={0}
      width={1}
      px={1}
    >
      <Link href="/" passHref>
        <Box component="a" sx={{ mr: 'auto' }}>
          <AppLogo sx={{ cursor: 'pointer' }} />
        </Box>
      </Link>
      {authContext.user?.isPremium && (
        <Box
          display="flex"
          flexDirection="column"
          color="primary.main"
          justifyContent="center"
          alignItems="center"
        >
          <DiamondRounded />
          <Typography variant="caption">PREMIUM</Typography>
        </Box>
      )}
      {authContext.isLoggedIn && (
        <AppLink href="/user">@{authContext.user?.userName}</AppLink>
      )}
      {isNotLogin && (
        <Link href={authContext.isLoggedIn ? '/logout' : '/login'} passHref>
          <Button variant="contained" size="small" href="">
            {authContext.isLoggedIn ? 'Logout' : 'Login'}
          </Button>
        </Link>
      )}
    </Box>
  );
}
