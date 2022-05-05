import { Box, Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AppLogo from './AppLogo';

export default function AppNavbar() {
  const router = useRouter();
  const isNotLogin = router.route !== '/login';

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      marginX={1}
    >
      <AppLogo />
      {isNotLogin && (
        <Link href="/login">
          <Button variant="outlined" size="small" href="">
            Login
          </Button>
        </Link>
      )}
    </Box>
  );
}
