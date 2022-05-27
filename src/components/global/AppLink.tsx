import { Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

export default function AppLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href}>
      <Typography
        sx={{
          color: 'primary.main',
          textDecoration: 'underline',
          cursor: 'pointer',
        }}
        component="a"
      >
        {children}
      </Typography>
    </Link>
  );
}
