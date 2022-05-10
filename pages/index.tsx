import { Box, Typography } from '@mui/material';
import type { NextPage } from 'next';
import TagFilter from '~/components/TagFilter/TagFilter';

const Home: NextPage = () => (
  <Box>
    <Typography variant="h2">TODO: home page</Typography>
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
