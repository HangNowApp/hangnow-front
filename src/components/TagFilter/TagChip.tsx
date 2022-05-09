import { Chip } from '@mui/material';

type TagChipProps = {
  selected: boolean;
  tagName: string;
};

export default function TagChip({ selected, tagName }: TagChipProps) {
  return (
    <Chip
      label={tagName}
      color="primary"
      variant={selected ? 'filled' : 'outlined'}
    />
  );
}
