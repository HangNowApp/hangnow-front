import {
  Box,
  Button,
  ListItemText,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

const tags = [
  { id: '1', value: 'Finances' },
  { id: '2', value: 'Sport' },
  { id: '3', value: 'Culture' },
];

export function EventForm() {
  const [tag, setTag] = React.useState([]);

  const handleChangeTags = (event: any) => {
    const {
      target: { value },
    } = event;
    setTag(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <Box
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
      />

      <TextField select label="Max participants" onChange={() => {}}>
        {new Array(10)
          .fill(0)
          .map((_, i) => i + 1)
          .map((e) => (
            <MenuItem>{e}</MenuItem>
          ))}
      </TextField>

      <TextField
        label="Tags"
        select
        value={tag}
        onChange={handleChangeTags}
        SelectProps={{
          multiple: true,
          renderValue: (selected) => (
            <>{Array.isArray(selected) ? selected.join(', ') : selected}</>
          ),
        }}
      >
        {tags.map((tag) => (
          <MenuItem key={tag.value} value={tag.value}>
            <ListItemText primary={tag.value} />
          </MenuItem>
        ))}
      </TextField>

      <Button variant="contained">Create</Button>
    </Box>
  );
}
