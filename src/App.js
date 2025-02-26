import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './Pages/About';
import Experience from './Pages/Experience';
import Project from './Pages/Project';
import Education from './Pages/Education';
import Skills from './Pages/Skills';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
   
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
