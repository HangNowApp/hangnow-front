import { Avatar, Box, Button, Link, Typography } from '@mui/material';
import Avatars from '~/components/avatars/Avatars';
import { AppEvent } from '~/types/event';

export function EventView({ event }: { event: AppEvent }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        margin: 'auto',
      }}
    >
      <Typography variant="h4">{event.name}</Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="caption">
          {event.startDate?.toLocaleString('en-US', {})}
        </Typography>
        <Avatars />
      </Box>

      <Typography variant="subtitle2">About Event</Typography>

      <Typography variant="body2" fontStyle="italic">
        {event.description}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 2,
          margin: 'left',
        }}
      >
        <Avatar alt="" src={event.imageUrl} />
        <Box>
          <Typography variant="body2">{event.owner?.userName}</Typography>
          <Link href="/profile">view profile</Link>
        </Box>
      </Box>

      <Button variant="contained">Join event</Button>
    </Box>
  );
}
