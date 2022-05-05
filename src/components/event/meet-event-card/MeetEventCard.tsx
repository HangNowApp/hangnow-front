import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from '@mui/material';
import React from 'react';
import Avatars from '~/components/avatars/Avatars';

type EventCardProps = {
  imageUrl: string;
  title: string;
  time: string;
  tag: string[];
};

export function MeetEventCard({ imageUrl, title, time, tag }: EventCardProps) {
  return (
    <Card>
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

          <Box sx={{ direction: 'row', gap: 1, mt: 1 }}>
            <Chip label={tag} />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
