import { createTheme } from '@mui/material/styles';

import { customPalette } from './palette';

// Додаю свої кольори, шрифти для проекту як в дизайні
const theme = createTheme({
  palette: customPalette,
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
  },
});

export default theme;
