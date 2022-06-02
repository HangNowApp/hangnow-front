import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { Tag } from '~/types/tag';
import TagChip from './TagChip';

type TagFilterProps = {
  tags: Tag[];
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
        sx={{
          overflowY: 'auto',
          overflowX: 'hidden',
          '&::-webkit-scrollbar': {
            width: 0,
          },
        }}
        py={2}
      >
        {tags.length > 0 &&
          tags.map((tag) => (
            <TagChip
              key={tag.id}
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
