import { Components } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const components: Components = {};

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
