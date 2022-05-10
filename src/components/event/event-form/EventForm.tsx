import {
  Box,
  Button,
  ListItemText,
  MenuItem,
  SelectChangeEvent,
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
  const [people, setPeople] = React.useState<string | null>(null);
  const [tag, setTag] = React.useState([]);

  const handleChangeTags = (event: SelectChangeEvent<unknown>) => {
    const value = event.target.value;
    setTag(typeof value === 'string' ? value.split(',') : value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPeople(event.target.value);
  };

  return (
    <Box
      sx={{
        component: 'form',
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
        value={people}
        onChange={handleChange}
        select
        label="Max participants"
      >
        {new Array(10)
          .fill(0)
          .map((_, i) => i + 1)
          .map((e) => (
            <MenuItem value={e} key={e}>
              {e}
            </MenuItem>
          ))}
      </TextField>

      <TextField
        select
        label="Tags"
        value={tag}
        SelectProps={{
          multiple: true,
          onChange: handleChangeTags,
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

      <Button type="submit" variant="contained">
        Create
      </Button>
    </Box>
  );
}
