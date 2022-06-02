import {
  Box,
  Button,
  InputAdornment,
  MenuItem,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import React from 'react';
import { clientJson } from '~/client/client';
import { AddTagDialog } from '~/components/global/AddTagDialog';
import AppInput from '~/components/global/AppInput';
import { AppEvent } from '~/types/event';
import { Tag } from '~/types/tag';
import TitleIcon from '@mui/icons-material/Title';
import ShortTextOutlinedIcon from '@mui/icons-material/ShortText';
import ImageOutlinedIcon from '@mui/icons-material/Image';
import StyleOutlinedIcon from '@mui/icons-material/Style';
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocation';

type Data = {
  tags: Tag[];
};

const Create: NextPage<Data> = ({ tags: allTagsSource }) => {
  const router = useRouter();

  const [allTags, setAllTags] = React.useState(allTagsSource);
  const [tags, setTags] = React.useState<string[]>([]);

  const { enqueueSnackbar } = useSnackbar();

  const handleChangeTags = (event: SelectChangeEvent<unknown>) => {
    const value = event.target.value as string[] | string;
    setTags(Array.isArray(value) ? value : [value]);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.eventName.value;
    const description = form.description.value;
    const location = form.location.value;
    const imageUrl = form.imageUrl.value;

    clientJson<AppEvent>('event', {
      data: {
        name,
        description,
        location,
        imageUrl,
        tags: allTags.filter((t) => tags.includes(t.name)).map((t) => t.id),
      },
    })
      .then((event) => {
        void router.push(`/event/${event.id}`);
      })
      .catch(() => {
        void router.push('/');
      });
  };

  return (
    <Box
      onSubmit={onSubmit}
      component={'form'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        margin: 'auto',
      }}
    >
      <Typography variant="h4">Event Details</Typography>

      <AppInput placeholder="Name" id="eventName" icon={<TitleIcon />} />

      <AppInput
        placeholder="About event"
        id="description"
        multiline
        icon={<ShortTextOutlinedIcon />}
        onFocus={(e) => {
          e.target.select();
        }}
      />

      <AppInput
        placeholder="Location"
        id="location"
        icon={<AddLocationOutlinedIcon />}
      />

      <AppInput
        id="imageUrl"
        placeholder="Image URL"
        icon={<ImageOutlinedIcon />}
      />

      <Box sx={{ display: 'flex' }}>
        <TextField
          select
          sx={{ flex: 1 }}
          id="tags"
          label="Tags"
          value={tags}
          variant="filled"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <StyleOutlinedIcon />
              </InputAdornment>
            ),
          }}
          SelectProps={{
            multiple: true,
            onChange: handleChangeTags,
            renderValue: (selected) => (
              <>{Array.isArray(selected) ? selected.join(', ') : selected}</>
            ),
          }}
        >
          {allTags.map((tag) => (
            <MenuItem key={tag.id} value={tag.name}>
              {tag.name}
            </MenuItem>
          ))}
        </TextField>

        <AddTagDialog
          onSubmit={(tag) => {
            setAllTags([...allTags, tag]);
          }}
        />
      </Box>

      <Button id="create-form-submit" type="submit" variant="contained">
        Create
      </Button>
    </Box>
  );
};

export default Create;

export async function getServerSideProps(): Promise<{ props: Data }> {
  // Fetch data from external API
  const tags = await clientJson<Tag[]>('tag');

  // Pass data to the page via props
  return { props: { tags } };
}
