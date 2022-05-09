import { Box, Chip, Typography } from '@mui/material';
import Link from 'next/link';
import TagChip from './TagChip';

type TagFilterProps = {
  tagList: string[];
};

export default function TagFilter({ tagList }: TagFilterProps) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      overflow="hidden"
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <Typography variant="h6">See by tags</Typography>
        <Link href="">See all</Link>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="start"
        alignItems="center"
        width="100%"
        gap={2}
        overflow="scroll"
      >
        {tagList.length > 0 &&
          tagList.map((tag) => {
            return <TagChip tagName={tag} selected={false} />;
          })}
      </Box>
    </Box>
  );
}
