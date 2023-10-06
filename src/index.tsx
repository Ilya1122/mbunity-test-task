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
    <BrowserRouter>
      {/* додав тему для проекта та скинув стилі браузера */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={globalCss} />

        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();
