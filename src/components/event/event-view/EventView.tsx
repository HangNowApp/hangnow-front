import { Avatar, Box, Button, Link, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import Avatars from '~/components/avatars/Avatars';
import { AppEvent } from '~/types/event';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import TagChip from '~/components/TagFilter/TagChip';

export function EventView({ event }: { event: AppEvent }) {
  const router = useRouter();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        margin: 'auto',
      }}
    >
      <Box
        sx={{
          maxHeight: '100px',
          overflow: 'hidden',
        }}
      >
        <img
          object-fit="cover"
          object-position="center"
          src={
            event.imageUrl ??
            'https://wordlist.languagepod101.com/wordlist/media/10412&v=medium.jpg'
          }
        />
      </Box>

      <Box>
        <Typography variant="h4">{event.name}</Typography>

        {event.tags?.length ? (
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, mt: 1 }}>
            {event.tags?.map((tag) => {
              return <TagChip name={tag.name} key={tag.id} selected={false} />;
            })}
          </Box>
        ) : null}
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="body2" align="left">
          <LocationOnOutlinedIcon fontSize="small" />
          {event.location}
        </Typography>
        <Box>
          <Avatars users={event.users} />
        </Box>
      </Box>

      <Box>
        <Typography variant="subtitle2">About Event</Typography>
        <Typography variant="body2" fontStyle="italic">
          {event.description}
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 2,
          margin: 'left',
        }}
      >
        <Avatar alt="" src={event.owner?.avatarUrl} />
        <Box>
          <Typography variant="body2">{event.owner?.userName}</Typography>
          <Link onClick={() => router.push(`/user/${event.owner?.id}`)}>
            view profile
          </Link>
        </Box>
      </Box>

      <Button variant="contained">Join event</Button>
    </Box>
  );
}
