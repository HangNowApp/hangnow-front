import {
  Box,
  Button,
  MenuItem,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import { NextPage } from 'next';
import React, { useState } from 'react';
import { clientJson } from '~/client/client';
import { Tag } from '~/types/tag';

const Create: NextPage<Data> = ({ tags: allTags }) => {
  const [tags, setTags] = React.useState<Tag[]>([]);

  const handleChangeTags = (event: SelectChangeEvent<unknown>) => {
    const value = event.target.value as Tag | Tag[];
    setTags(Array.isArray(value) ? value : [value]);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log('test');
  };

  return (
    <Box
      onSubmit={handleSubmit}
      component={'form'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        margin: 'auto',
      }}
    >
      <Typography variant="h4">Event Details</Typography>

      <TextField label="Event Name" variant="outlined" />

      <TextField
        label="About event"
        multiline
        rows={4}
        defaultValue="Some more informations"
        onFocus={(e) => e.target.select()}
      />

      <TextField
        select
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

type Data = {
  tags: Tag[];
};

export async function getServerSideProps(): Promise<{ props: Data }> {
  // Fetch data from external API
  const tags = await clientJson<Tag[]>('tag');

  // Pass data to the page via props
  return { props: { tags } };
}
