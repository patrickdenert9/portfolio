import React from 'react';
import Navbar from './components/Navbar';
import { Skills } from './components/Skills';
import { Stack } from '@mui/material';
import About from './components/About';



function App() {
  return (
    <div className="App">
      <Stack spacing={10}>
          <Navbar/>
          <About />
        <Skills/>
      </Stack>
    </div>
  );
}

export default App;
