import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import ProjectPage from './components/ProjectPage';
import Me from './components/Me';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/me" element={<Me />} /> 
      </Routes>
    </Router>
  );
}

export default App;
