import { Box, Typography } from '@mui/material';

export default function AppLogo() {
  return (
    <Box>
      <Typography variant="h4" fontWeight="bold">
        Hang
        <Box color="primary.main" component="span">
          Now!
        </Box>
      </Typography>
    </Box>
  );
}
