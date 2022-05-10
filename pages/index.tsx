import { Box, Typography } from '@mui/material';
import type { NextPage } from 'next';
import { MeetEventCard } from '~/components/event/meet-event-card';

const Home: NextPage = () => (
  <Box>
    <Typography variant="h2">TODO: home page</Typography>
    <MeetEventCard
      imageUrl="https://thumbs.dreamstime.com/b/finance-business-concept-invesment-graph-coins-rows-investment-growth-table-blue-color-tone-111488763.jpg"
      title="Meet for money talk"
      time="3min ago" 
    />
    <TagFilter
      tags={[
        { id: 0, name: 'Buisiness' },
        { id: 1, name: 'lol' },
        { id: 2, name: 'test' },
        { id: 3, name: 'test' },
        { id: 4, name: 'test' },
        { id: 5, name: 'test' },
        { id: 6, name: 'test' },
        { id: 7, name: 'test' },
      ]}
      selectedTag={1}
    />
  </Box>
);

export default Home;
