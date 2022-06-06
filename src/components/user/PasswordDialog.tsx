import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  LinearProgress,
} from '@mui/material';
import { useSnackbar } from 'notistack';
import React from 'react';
import { AuthResponse } from '~/client/types/Auth';
import { useLoadingClient } from '~/hooks/useLoadingClient';
import AppInput from '../global/AppInput';

type PasswordDialogProps = {
  open: boolean;
  onClose: () => void;
};

export function PasswordDialog({ open, onClose }: PasswordDialogProps) {
  const { enqueueSnackbar } = useSnackbar();
  const { isLoading, run } = useLoadingClient();

  const updatePassword: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const oldpassword = event.currentTarget.oldpassword.value;
    const newpassword = event.currentTarget.newpassword.value;

    if (!oldpassword && !newpassword) {
      enqueueSnackbar('Password cannot be empty', { variant: 'error' });
      return;
    }

    run<AuthResponse>('auth/change_password', {
      method: 'PATCH',
      data: {
        oldpassword,
        newpassword,
      },
    })
      .then(() => {
        onClose();
      })
      .catch((err) => {
        err.json().then((res: AuthResponse) => {
          if (!res.result) {
            enqueueSnackbar(res.message, { variant: 'error' });
          }
        });
      });
  };

  return (
    <Dialog
      open={open}
      onClose={() => {
        onClose();
      }}
      maxWidth="sm"
      fullWidth
    >
      <form onSubmit={updatePassword}>
        {isLoading ? <LinearProgress /> : null}
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
          <Button
            size="small"
            onClick={() => {
              onClose();
            }}
          >
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
