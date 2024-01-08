import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    customColor: {
      base_01: '#fff',
      base_02: '#f6f7f8',
      base_03: '#9299a2',
      base_04: '#333333',
      base_05: '#666666',
      base_06: 'rgba(0, 0, 0, 0.2)',
    },
    button: {
      main: '#ffdd2d',
      light: '#fcc521',
      dark: '#fab619',
      contrastText: '#000000',
    },
  },
});
