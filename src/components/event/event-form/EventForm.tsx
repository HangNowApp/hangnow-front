import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';

// tags temp
const tags = ['Finances', 'Sport', 'Culture', 'Cinema', 'Amitié'];

export function EventForm() {
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

      <Select label={'tag'} sx={{ mb: 1, minWidth: 120 }}></Select>

      <Button variant="contained">Create</Button>
    </Box>
  );
}
