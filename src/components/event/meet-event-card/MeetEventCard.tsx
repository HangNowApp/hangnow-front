import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import Avatars from '~/components/avatars/Avatars';

type EventCardProps = {
  imageUrl: string;
  title: string;
  time: string;
};

export default function MeetEventCard({
  imageUrl,
  title,
  time,
}: EventCardProps) {
  return (
    <Card sx={{ maxWidth: 340 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={imageUrl} alt="img" />
        <CardContent>
          <Typography gutterBottom variant="h6" align="center">
            {title}
          </Typography>
        </CardContent>

        <CardContent>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="body2" align="left">
              {time}
            </Typography>
            <Box>
              <Avatars></Avatars>
            </Box>
          </Box>

          <Stack direction="row" spacing={1} mt={2}>
            <Chip label="Finances" />
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
