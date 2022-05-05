import { Components } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const components: Components = {
  MuiButton: {
    styleOverrides: {
      root: {
        backgroundColor: '#EF4444',
        borderRadius: '8px',
        ':hover': {
          backgroundColor: '#FF3333',
        },
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
        color: '#FF3333',
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
      main: '#556cd6',
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
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
  },
  components,
});

const themes = { darkTheme, lightTheme };

export default themes;
