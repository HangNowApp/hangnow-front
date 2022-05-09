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
  </Box>
);

export default Home;
