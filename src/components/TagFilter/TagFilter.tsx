import { Box, Chip, Typography } from '@mui/material';
import Link from 'next/link';
import { tag } from '~/types/typeTag';
import TagChip from './TagChip';

type TagFilterProps = {
  tags: tag[];
  selectedTag?: number;
};

export default function TagFilter({ tags, selectedTag }: TagFilterProps) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" width="100%">
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <Typography variant="subtitle1">See by tags</Typography>
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
        sx={{
          '&::-webkit-scrollbar': {
            width: 0,
          },
        }}
      >
        {tags.length > 0 &&
          tags.map((tag) => {
            return (
              <TagChip name={tag.name} selected={tag.id === selectedTag} />
            );
          })}
      </Box>
    </Box>
  );
}
