import { createTheme, Theme, ThemeOptions } from '@mui/material';
import {} from '@mui/material/colors';

export const defaultThemeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#000000',
      light: '#656870',
      dark: '#000000',
      contrastText: '#fff',
    },
  },
  spacing: 8,
};

export const defaultTheme: Theme = createTheme(defaultThemeOptions);
