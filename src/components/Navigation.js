import React from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Navigation Component
 * 
 * Features:
 * - Desktop navigation menu
 * - Active page highlighting
 * - Smooth hover transitions
 * - React Router integration
 * 
 * Navigation Links:
 * - Home (/)
 * - Services (/services)
 * - Projects (/projects)
 * - Countries (/countries)
 * - Team (/team)
 * 
 * @returns {JSX.Element} Desktop navigation menu
 */
function Navigation() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="hidden md:flex items-center space-x-8">
      <Link 
        to="/" 
        className={`text-white hover:text-gray-200 transition-colors duration-200 font-medium ${
          isActive('/') ? 'text-yellow-300 font-semibold' : ''
        }`}
      >
        Home
      </Link>
      <Link 
        to="/services" 
        className={`text-white hover:text-gray-200 transition-colors duration-200 font-medium ${
          isActive('/services') ? 'text-yellow-300 font-semibold' : ''
        }`}
      >
        Services
      </Link>
      <Link 
        to="/projects" 
        className={`text-white hover:text-gray-200 transition-colors duration-200 font-medium ${
          isActive('/projects') ? 'text-yellow-300 font-semibold' : ''
        }`}
      >
        Projects
      </Link>
      <Link 
        to="/countries" 
        className={`text-white hover:text-gray-200 transition-colors duration-200 font-medium ${
          isActive('/countries') ? 'text-yellow-300 font-semibold' : ''
        }`}
      >
        Countries
      </Link>
      <Link 
        to="/team" 
        className={`text-white hover:text-gray-200 transition-colors duration-200 font-medium ${
          isActive('/team') ? 'text-yellow-300 font-semibold' : ''
        }`}
      >
        Team
      </Link>
    </nav>
  );
}

export default Navigation; 