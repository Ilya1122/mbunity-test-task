import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { GlobalStyles } from '@mui/system';

import reportWebVitals from './reportWebVitals';

import theme from 'theme';
import AppRouter from 'router';
import { globalCss } from 'theme/globalCss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    {/* use it to wrap your entire application to provide routing */}
    <BrowserRouter>
      {/* I use this component to transfer the theme to your program */}
      <ThemeProvider theme={theme}>
        {/* reset styles to default values to avoid style conflicts between browsers */}
        <CssBaseline />

        {/* I use global styles */}
        <GlobalStyles styles={globalCss} />

        {/* main router */}
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();
