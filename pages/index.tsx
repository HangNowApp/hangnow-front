import { Box } from '@mui/material';
import type { NextPage } from 'next';
import { MeetEventCard } from '~/components/event/meet-event-card';

const Home: NextPage = () => (
  <div>
    <MeetEventCard
      title="Title of event"
      time="3m ago"
      imageUrl="https://www.wbcsd.org/var/site/storage/images/media/images/finance_img/25992-1-eng-GB/finance_img_i1140.jpg"
      tag={['Finances', 'Chill']}
    ></MeetEventCard>
  </div>
);

export default Home;
