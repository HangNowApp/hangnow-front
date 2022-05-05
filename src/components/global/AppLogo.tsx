import { Box, SxProps, Typography } from '@mui/material';

export default function AppLogo({ sx }: { sx?: SxProps }) {
  return (
    <Typography
      component="span"
      sx={sx}
      variant="h4"
      fontWeight="bold"
      fontSize={24}
      color="textPrimary"
    >
      Hang
      <Box color="primary.main" component="span">
        Now!
      </Box>
    </Typography>
  );
}
