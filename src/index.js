import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles'; // Add import for ThemeProvider
import { ThemeOptions } from '@mui/material/styles';

export const themeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#e0842e',
    },
    secondary: {
      main: '#f50057',
    },
  },
};

// Create the theme using createTheme
const theme = createTheme(themeOptions);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
