import Button from '@material-ui/core/Button';
import React from 'react';

function App() {
  return (
      <ThemeProvider theme={theme}>
    <Button variant="contained" color="primary">
      Hello World
    </Button>
    </ThemeProvider>
  );
}

export default App;
