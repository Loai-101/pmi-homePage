import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Countries from './pages/Countries';
import Team from './pages/Team';

/**
 * Main App Component
 * 
 * Features:
 * - React Router setup for navigation
 * - Route configuration for all pages
 * - Clean routing structure
 * 
 * Routes:
 * - "/" - Home page (default)
 * - "/services" - Services page
 * - "/projects" - Projects page  
 * - "/countries" - Countries page
 * - "/team" - Team page
 * 
 * @returns {JSX.Element} App with routing configuration
 */
function App() {



  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;
