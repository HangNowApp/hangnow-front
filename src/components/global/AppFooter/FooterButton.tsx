import { Box, Button, SxProps, Typography } from '@mui/material';
import Link from 'next/link';

type FooterButtonProps = {
  icon: React.ReactNode;
  text: string;
  href: string;
  sx: SxProps;
};

export default function FooterButton({
  icon,
  text,
  href,
  sx,
}: FooterButtonProps) {
  return (
    <Link href={href}>
      <Button variant="text" sx={sx}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          {icon}
          <Typography variant="button">{text}</Typography>
        </Box>
      </Button>
    </Link>
  );
}
