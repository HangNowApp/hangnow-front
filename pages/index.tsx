import { Box, Typography } from '@mui/material';
import type { NextPage } from 'next';
import TagFilter from '~/components/TagFilter/TagFilter';

const Home: NextPage = () => (
  <Box>
    <Typography variant="h2">TODO: home page</Typography>
    <TagFilter
      tagList={[
        'Buisiness',
        'lol',
        'test',
        'test',
        'test',
        'test',
        'test',
        'test',
      ]}
    />
  </Box>
);

export default Home;
