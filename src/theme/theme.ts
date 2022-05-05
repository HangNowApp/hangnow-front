import { Components, alpha } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const PRIMARY_COLOR = '#ef4444';

const components: Components = {
  MuiButton: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: {
        borderRadius: 1000,
        '&:focus': {
          boxShadow: `0px 0px 0px 4px ${alpha(PRIMARY_COLOR, 0.8)}`,
        },
      },
      sizeSmall: {
        padding: '8px 16px 8px 16px',
        fontSize: '14px',
      },
      sizeMedium: {
        padding: '12px 18px 12px 18px',
        fontSize: '16px',
      },
      sizeLarge: {
        padding: '16px 28px 16px 28px',
        fontSize: '18px',
      },
    },
  },
  MuiSelect: {
    styleOverrides: {
      select: {
        '& legend': {
          color: '#fff',
        },
      },
    },
  },
  MuiAvatarGroup: {
    styleOverrides: {
      avatar: {
        width: '20px',
        height: '20px',
        fontSize: '10px',
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        backgroundColor: '#FFC8C8',
        fontSize: '10px',
        color: PRIMARY_COLOR,
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: '32px',
      },
    },
  },
};

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: PRIMARY_COLOR,
    },
    secondary: {
      main: '#19857b',
    },
  },
  components,
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: PRIMARY_COLOR,
    },
    secondary: {
      main: '#19857b',
    },
    background: {
      default: '#1E2025',
      paper: '#26241E',
    },
  },
  components,
});

const themes = { darkTheme, lightTheme };

export default themes;