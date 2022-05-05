import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';

type FooterButtonProps = {
  icon: React.ReactNode;
  text: string;
  href: string;
};

export default function FooterButton({ icon, text, href }: FooterButtonProps) {
  return (
    <Link href={href}>
      <Button variant="text">
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
