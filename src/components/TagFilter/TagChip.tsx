import { Chip } from '@mui/material';

type TagChipProps = {
  selected: boolean;
  name: string;
  onClick?: () => void;
};

export default function TagChip({ selected, name, onClick }: TagChipProps) {
  return (
    <Chip
      onClick={onClick}
      label={name}
      color="primary"
      variant={selected ? 'filled' : 'outlined'}
      sx={{
        color: selected ? '#FFFFFF' : 'text.primary',
        borderWidth: 2,
        fontSize: '0.8rem',
      }}
    />
  );
}
