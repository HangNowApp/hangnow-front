import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';
import Avatars from '~/components/avatars/Avatars';
import TagChip from '~/components/TagFilter/TagChip';
import { AppEvent } from '~/types/event';
import { tag } from '~/types/tag';

export function MeetEventCard({
  imageUrl,
  name,
  startDate,
  tags,
  users,
  location,
}: AppEvent) {
  return (
    <Card sx={{ borderRadius: 4, boxShadow: '0px 0px 10px 5px #00000020' }}>
      <CardActionArea
        sx={{
          height: 1,
          display: 'flex',
          justifyContent: 'start',
          flexDirection: 'column',
        }}
      >
        <CardMedia component="img" height="140" image={imageUrl} />
        <CardContent sx={{ width: 1 }}>
          <Typography gutterBottom variant="h6" align="center">
            {name}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="body2" align="left">
              {location}
            </Typography>
            <Box>
              <Avatars users={users} />
            </Box>
          </Box>

          {tags?.length ? (
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, mt: 1 }}>
              {tags?.map((tag) => {
                return <TagChip name={tag.name} selected={false} />;
              })}
            </Box>
          ) : null}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
