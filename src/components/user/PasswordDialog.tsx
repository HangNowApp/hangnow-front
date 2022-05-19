import {
  TextField,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  Box,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { clientJson } from '~/client/client';
import { AuthResponse } from '~/client/types/Auth';

type PasswordDialogProps = {
  open: boolean;
  onClose: () => void;
};

export function PasswordDialog({ open, onClose }: PasswordDialogProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const updatePassword: React.FormEventHandler<HTMLFormElement> = (event) => {
    event?.preventDefault();
    const oldpassword = event.currentTarget.oldpassword.value;
    const newpassword = event.currentTarget.newpassword.value;

    setIsLoading(true);
    clientJson<AuthResponse>('auth/change_password', {
      method: 'PATCH',
      data: {
        oldpassword,
        newpassword,
      },
    })
      .then((res) => {
        if (res.result) {
          setIsLoading(false);
          onClose();
        } else {
          setError(res.message);
        }
      })
      .catch((err) => {
        err.json().then((res: AuthResponse) => {
          if (!res.result) {
            console.error('err', res);
            setError(res.message);
            setIsLoading(false);
          }
        });
      });
  };

  return (
    <Dialog open={open} onClose={() => onClose()}>
      <form onSubmit={updatePassword}>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField id="oldpassword" type="password" label="Old Password" />
            <TextField id="newpassword" type="password" label="New Password" />
            {error ? <Typography color="error">{error}</Typography> : null}
          </Box>
        </DialogContent>

        <DialogActions>
          <Button size="small" onClick={() => onClose()}>
            Cancel
          </Button>
          <Button type="submit" size="small">
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
