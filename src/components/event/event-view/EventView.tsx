import { Avatar, Box, Button, Link, Typography } from '@mui/material';
import Avatars from '~/components/avatars/Avatars';
import { AppEvent } from '~/types/event';

export function EventView({
  name,
  imageUrl,
  description,
  startDate,
  owner,
}: AppEvent) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        margin: 'auto',
      }}
    >
      <Typography variant="h4">{name}</Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="caption">
          {startDate?.toLocaleString('en-US', {})}
        </Typography>
        <Avatars />
      </Box>

      <Typography variant="subtitle2">About Event</Typography>

      <Typography variant="body2" fontStyle="italic">
        {description}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 2,
          margin: 'left',
        }}
      >
        <Avatar alt="" src={imageUrl} />
        <Box>
          <Typography variant="body2">{owner?.userName}</Typography>
          <Link href="/profile">view profile</Link>
        </Box>
      </Box>

      <Button variant="contained">Join event</Button>
    </Box>
  );
}
