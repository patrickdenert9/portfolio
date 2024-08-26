import React from 'react';
import Navbar from './components/Navbar';
import { Skills } from './components/Skills';
import { Stack } from '@mui/material';
import About from './components/About';
import Projects from './components/Projects';



function App() {
  return (
    <div className="App">
      <Stack spacing={10}>
          <Navbar/>
          <About />
        <Skills/>
        <Projects/>
      </Stack>
    </div>
  );
}

export default App;
