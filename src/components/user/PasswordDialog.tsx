import {
  TextField,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  Box,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { clientJson } from '~/client/client';
import { AuthResponse } from '~/client/types/Auth';
import AppInput from '../global/AppInput';

type PasswordDialogProps = {
  open: boolean;
  onClose: () => void;
};

export function PasswordDialog({ open, onClose }: PasswordDialogProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { enqueueSnackbar } = useSnackbar();

  const updatePassword: React.FormEventHandler<HTMLFormElement> = (event) => {
    event?.preventDefault();
    const oldpassword = event.currentTarget.oldpassword.value;
    const newpassword = event.currentTarget.newpassword.value;

    if (!oldpassword && !newpassword) {
      enqueueSnackbar('Password cannot be empty', { variant: 'error' });
    }

    setIsLoading(true);
    clientJson<AuthResponse>('auth/change_password', {
      method: 'PATCH',
      data: {
        oldpassword,
        newpassword,
      },
    })
      .then(() => {
        setIsLoading(false);
        onClose();
      })
      .catch((err) => {
        err.json().then((res: AuthResponse) => {
          if (!res.result) {
            console.error('err', res);
            enqueueSnackbar(res.message, { variant: 'error' });
            setIsLoading(false);
          }
        });
      });
  };

  return (
    <Dialog open={open} onClose={() => onClose()} maxWidth="sm" fullWidth>
      <form onSubmit={updatePassword}>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <AppInput
              id="oldpassword"
              type="password"
              placeholder="Old Password"
              icon={<LockOutlinedIcon />}
            />
            <AppInput
              id="newpassword"
              type="password"
              placeholder="New Password"
              icon={<LockOutlinedIcon />}
            />
          </Box>
        </DialogContent>

        <DialogActions>
          <Button size="small" onClick={() => onClose()}>
            Cancel
          </Button>
          <Button type="submit" size="small" variant="contained">
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
