import { Box, Typography } from '@mui/material';
import type { NextPage } from 'next';
import { useAuthContext } from '~/context/AuthContext';

const Home: NextPage = () => (
  <Box>
    <Typography variant="h2">HangNow</Typography>
    <TestUser />
  </Box>
);

const TestUser = () => {
  const authContext = useAuthContext();

  if (authContext.isLoggedIn) {
    return (
      <Typography variant="h4">
        You're logged in: USERNAME:{' '}
        <Box component="span" color="primary.main">
          {authContext.user?.userName}
        </Box>
      </Typography>
    );
  }

  return (
    <Box>
      <Typography variant="h4">No Logged IN</Typography>
    </Box>
  );
};

export default Home;
