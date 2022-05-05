import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import { Url } from 'url';

type FooterButtonProps = {
  icon: React.ReactNode;
  text: string;
  href: string;
  buttonClick?: () => void;
};

export default function FooterButton({
  icon,
  text,
  href,
  buttonClick,
}: FooterButtonProps) {
  return (
    <Link href={href}>
      <Button variant="text" onClick={() => buttonClick}>
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
