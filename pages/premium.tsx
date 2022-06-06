import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { client } from '~/client/client';
import { useAuthContext } from '~/hooks/context/AuthContext';

export default function premium() {
  const authContext = useAuthContext();
  const buyPremium = () => {
    void client(`User/premium/${authContext.user?.id}`, { method: 'PUT' });
    window.location.reload();
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
      gap={2}
      textAlign="center"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Emoji_u1f451.svg/1024px-Emoji_u1f451.svg.png"
        height="100px"
      />
      <Typography variant="h4">Get premium now !</Typography>
      <Typography variant="subtitle1">
        Support us now and get premium to get a lot of advantages.
      </Typography>
      <Typography variant="subtitle2" textAlign="left">
        <ul>
          <li>No limit on events creations !</li>
          <li>Become a Giga-Chad</li>
          <li>Get bros and hoes</li>
        </ul>
      </Typography>
      {authContext.user?.isPremium ? (
        <>
          <Typography variant="subtitle2" color="red">
            You already are subscribed !
          </Typography>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            onClick={buyPremium}
          >
            Resign Subscription
          </Button>
        </>
      ) : (
        <Button size="small" variant="contained" onClick={buyPremium}>
          19.99$ / month
        </Button>
      )}
    </Box>
  );
}
