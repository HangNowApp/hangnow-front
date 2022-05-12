import { FilledInput, InputAdornment } from '@mui/material';

type AppInputProps = {
  id?: string;
  type?: string;
  placeholder?: string;
  icon: React.ReactNode;
};

export default function AppInput({
  id,
  type,
  placeholder,
  icon,
}: AppInputProps) {
  return (
    <FilledInput
      id={id}
      type={type}
      hiddenLabel={true}
      placeholder={placeholder}
      size="small"
      margin="dense"
      startAdornment={<InputAdornment position="start">{icon}</InputAdornment>}
    />
  );
}
