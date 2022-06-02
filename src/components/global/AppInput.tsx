import { FilledInput, FilledInputProps, InputAdornment } from '@mui/material';

type AppInputProps = FilledInputProps & {
  placeholder?: string;
  icon?: React.ReactNode;
};

export default function AppInput({ icon, ...rest }: AppInputProps) {
  return (
    <FilledInput
      {...rest}
      hiddenLabel={true}
      size="small"
      margin="dense"
      startAdornment={
        icon ? (
          <InputAdornment position="start">{icon}</InputAdornment>
        ) : undefined
      }
    />
  );
}
