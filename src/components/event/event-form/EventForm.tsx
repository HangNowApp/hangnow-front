import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';

export default function EventForm() {
  const tag = ['Finances', 'Sport', 'Culture', 'Cinema', 'Amitié'];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: 320,
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

      <Select label={'Max participants'} sx={{ mb: 1, minWidth: 120 }}>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={6}>6</MenuItem>
        <MenuItem value={7}>7</MenuItem>
        <MenuItem value={8}>8</MenuItem>
        <MenuItem value={9}>9</MenuItem>
        <MenuItem value={10}>10</MenuItem>
      </Select>

      <Select label="Tags" multiple value={[]}>
        {tag.map((tag) => (
          <MenuItem key={tag} value={tag}>
            {tag}
          </MenuItem>
        ))}
      </Select>

      <Button variant="contained">Create</Button>
    </Box>
  );
}
