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
import { tag } from '~/types/typeTag';

export type MeetEventCardProps = {
  imageUrl: string;
  title: string;
  time: string;
  tags: tag[];
};

export function MeetEventCard({
  imageUrl,
  title,
  time,
  tags,
}: MeetEventCardProps) {
  return (
    <Box width="100%">
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
                <Avatars />
              </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, mt: 1 }}>
              {tags.map((tag) => {
                return <TagChip name={tag.name} selected={false} />;
              })}
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
