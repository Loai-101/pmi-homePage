import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import OurVision from './pages/Vision';
import About from './pages/About';
import ScrollToTop from './components/ScrollToTop';

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
 * - "/our-vision" - Our Vision page
 * - "/team" - Team page
 * 
 * @returns {JSX.Element} App with routing configuration
 */
function App() {



  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/our-vision" element={<OurVision />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
