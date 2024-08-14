import React from 'react';
import Navbar from './components/Navbar';
import { IconCloudDemo } from './components/IconCloud';
import { Stack } from '@mui/material';


function App() {
  return (
    <div className="App">
      <Stack spacing={10}>
          <Navbar/>
        <IconCloudDemo/>
      </Stack>
    </div>
  );
}

export default App;
