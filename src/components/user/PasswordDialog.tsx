import {
  TextField,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  Box,
} from '@mui/material';
import React from 'react';

type PasswordDialogProps = {
  open: boolean;
  onClose: () => void;
  onSave: () => void;
};

export function PasswordDialog({ open, onClose, onSave }: PasswordDialogProps) {
  return (
    <Dialog open={open} onClose={() => onClose()}>
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField type="password" label="Old Password" />
          <TextField type="password" label="New Password" />
        </Box>
      </DialogContent>

      <DialogActions>
        <Button size="small" onClick={() => onClose()}>
          Cancel
        </Button>
        <Button size="small" onClick={() => onSave()}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
