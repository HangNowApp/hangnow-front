import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { useSnackbar } from 'notistack';
import { FormEventHandler, useState } from 'react';
import { clientJson } from '~/client/client';
import { Tag } from '~/types/tag';
import AppInput from './AppInput';

export function AddTagDialog({ onSubmit }: { onSubmit: (tag: Tag) => void }) {
  const [open, setOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const form = e.currentTarget;
    const name = form.tag_name.value;

    clientJson<Tag>('tag', { data: { name } })
      .then((tag) => {
        onSubmit(tag);
        enqueueSnackbar(`Tag ${tag.name} created`, { variant: 'success' });
        setOpen(false);
      })
      .catch(() => {
        enqueueSnackbar('Failed to create tag. Maybe tag already existe.', {
          variant: 'error',
        });
      });
  };

  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Add Tag
      </Button>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <DialogTitle>Create Tag</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <AppInput name="tag_name" id="tag_name" placeholder="Name" />
          </DialogContent>
          <DialogActions>
            <Button type="submit">Submit</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
