import { Box, Chip, Typography } from '@mui/material';
import Link from 'next/link';
import { tag } from '~/types/tag';
import TagChip from './TagChip';

type TagFilterProps = {
  tags: tag[];
  selectedTagId?: number;
  onTagClick: (tagId: number) => void;
};

export default function TagFilter({
  tags,
  selectedTagId,
  onTagClick,
}: TagFilterProps) {
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
        gap={1}
        overflow="scroll"
        sx={{
          '&::-webkit-scrollbar': {
            width: 0,
          },
        }}
        py={2}
      >
        {tags.length > 0 &&
          tags.map((tag) => (
            <TagChip
              onClick={() => {
                onTagClick(tag.id);
              }}
              name={tag.name}
              selected={tag.id === selectedTagId}
            />
          ))}
      </Box>
    </Box>
  );
}
