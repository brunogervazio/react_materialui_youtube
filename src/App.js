import React from 'react'
import {ThemeProvider, createMuiTheme } from '@material-ui/core';

import Routes from './routes';

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#3EA6FF',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
