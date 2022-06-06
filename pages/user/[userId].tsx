import {
  Box,
  Typography,
  Avatar,
  TextField,
  Button,
  TextFieldProps,
} from '@mui/material';
import { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { clientJson } from '~/client/client';
import { User } from '~/client/types/User';

type Data = {
  user: User;
};

const textFieldCommonProps: TextFieldProps = {
  disabled: true,
  variant: 'standard',
  margin: 'dense',
  size: 'small',
};

const UserPage: NextPage<Data> = ({ user }) => {
  const router = useRouter();

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          margin: 'auto',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            alignItems: 'center',
          }}
        >
          <Typography variant="h4">{user.userName}'s profile page</Typography>
          <Avatar
            alt="avatar"
            src={user.avatarUrl}
            sx={{ width: 80, height: 80 }}
          />
        </Box>

        <TextField
          {...textFieldCommonProps}
          id="username"
          label="Username"
          defaultValue={user.userName}
        />
        <TextField
          {...textFieldCommonProps}
          id="email"
          label="Email"
          defaultValue={user.email}
        />

        <Button onClick={() => { router.back(); }} size="small" variant="contained">
          Back
        </Button>
      </Box>
    </div>
  );
};

export async function getServerSideProps(
  context: NextPageContext
): Promise<{ props: Data }> {
  const { userId } = context.query;
  console.log(context.query);
  const user = await clientJson<User>(`auth/${userId}`);

  return { props: { user } };
}

export default UserPage;
