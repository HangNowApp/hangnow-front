import { Chip } from '@mui/material';

type TagChipProps = {
  selected: boolean;
  name: string;
};

export default function TagChip({ selected, name }: TagChipProps) {
  return (
    <Chip
      label={name}
      color="primary"
      variant={selected ? 'filled' : 'outlined'}
    />
  );
}
