import {
  Box,
  Button,
  MenuItem,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { clientJson } from '~/client/client';
import { AppEvent } from '~/types/event';
import { Tag } from '~/types/tag';

type Data = {
  tags: Tag[];
};

const Create: NextPage<Data> = ({ tags: allTags }) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [tags, setTags] = React.useState<Tag[]>([]);

  const handleChangeTags = (event: SelectChangeEvent<unknown>) => {
    const value = event.target.value as Tag | Tag[];
    setTags(Array.isArray(value) ? value : [value]);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.eventName.value;
    const description = form.description.value;
    const location = form.location.value;
    const imageUrl = form.imageUrl.value;

    setIsLoading(true);
    clientJson<AppEvent>('event', {
      data: {
        name,
        description,
        location,
        imageUrl,
        tags,
      },
    })
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        err.json().then((res: AppEvent) => {
          console.error('err', res);
          setIsLoading(false);
        });
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

      <TextField
        label="Event Name"
        id="eventName"
        placeholder="ex: Golf with friends"
        variant="outlined"
      />

      <TextField
        label="About event"
        id="description"
        multiline
        rows={4}
        defaultValue="Some more informations"
        onFocus={(e) => e.target.select()}
      />

      <TextField
        label="Location"
        id="location"
        placeholder="ex: Lausanne-Flon"
        variant="outlined"
      />

      <TextField id="imageUrl" label="Image URL" placeholder="https://...." />

      <TextField
        select
        id="tags"
        label="Tags"
        value={tags}
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

      <Button type="submit" variant="contained">
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
