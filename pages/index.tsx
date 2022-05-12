import { Box } from '@mui/material';
import type { NextPage } from 'next';
import { MeetEventCardProps } from '~/components/event/meet-event-card';
import MeetEventCardList from '~/components/event/meet-event-card/MeetEventCardList';
import TagFilter from '~/components/TagFilter/TagFilter';
import { tag } from '~/types/typeTag';

const tags: tag[] = [
  { id: 0, name: 'Buisiness' },
  { id: 1, name: 'lol' },
  { id: 2, name: 'test' },
  { id: 3, name: 'test' },
  { id: 4, name: 'test' },
  { id: 5, name: 'test' },
  { id: 6, name: 'test' },
  { id: 7, name: 'test' },
];

const cards: MeetEventCardProps[] = [
  {
    imageUrl: 'https://bit.ly/3surrpX',
    title: 'Meet for blabla',
    time: '3min ago',
    tags: [
      { id: 1, name: 'buisiness' },
      { id: 1, name: 'buisiness' },
      { id: 1, name: 'buisiness' },
    ],
  },
  {
    imageUrl: 'https://bit.ly/3surrpX',
    title: 'Meet for blabla',
    time: '3min ago',
    tags: [
      { id: 1, name: 'buisiness' },
      { id: 1, name: 'buisiness' },
      { id: 1, name: 'buisiness' },
    ],
  },
  {
    imageUrl: 'https://bit.ly/3surrpX',
    title: 'Meet for blabla',
    time: '3min ago',
    tags: [
      { id: 1, name: 'buisiness' },
      { id: 1, name: 'buisiness' },
      { id: 1, name: 'buisiness' },
    ],
  },
  {
    imageUrl: 'https://bit.ly/3surrpX',
    title: 'Meet for blabla',
    time: '3min ago',
    tags: [
      { id: 1, name: 'buisiness' },
      { id: 1, name: 'buisiness' },
      { id: 1, name: 'buisiness' },
    ],
  },
  {
    imageUrl: 'https://bit.ly/3surrpX',
    title: 'Meet for blabla',
    time: '3min ago',
    tags: [
      { id: 1, name: 'buisiness' },
      { id: 1, name: 'buisiness' },
      { id: 1, name: 'buisiness' },
    ],
  },
  {
    imageUrl: 'https://bit.ly/3surrpX',
    title: 'Meet for blabla',
    time: '3min ago',
    tags: [
      { id: 1, name: 'buisiness' },
      { id: 1, name: 'buisiness' },
      { id: 1, name: 'buisiness' },
    ],
  },
  {
    imageUrl: 'https://bit.ly/3surrpX',
    title: 'Meet for blabla',
    time: '3min ago',
    tags: [
      { id: 1, name: 'buisiness' },
      { id: 1, name: 'buisiness' },
      { id: 1, name: 'buisiness' },
    ],
  },
];

const Home: NextPage = () => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    width="100%"
    height="85%"
  >
    <TagFilter tags={tags} selectedTag={1} />
    <MeetEventCardList cards={cards} />
  </Box>
);

export default Home;
