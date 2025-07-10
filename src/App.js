import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import { DotGrid } from './components';
import Threads from './components/Threads/Threads';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Persistent Background Elements */}
      <div className="background-container">
        {/* Background DotGrid */}
        <DotGrid
          dotSize={3}
          gap={25}
          baseColor="#404040"
          activeColor="#42FF62"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={3}
        />
        {/* Threads Component */}
        <Threads
          color={[0.259, 1.0, 0.384]}
          amplitude={1.8}
          distance={0.7}
          enableMouseInteraction={true}
        />
      </div>

      {/* Routes */}
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

