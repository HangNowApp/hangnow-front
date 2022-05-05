import { Box, Typography } from '@mui/material';

export default function AppLogo() {
  return (
      <Typography variant="h4" fontWeight="bold" fontSize={24}>
        Hang
        <Box color="primary.main" component="span">
          Now!
        </Box>
      </Typography>
  );
}
