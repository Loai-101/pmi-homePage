import React from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Navigation Component
 * 
 * Features:
 * - Desktop navigation menu with transparent icons
 * - Active page highlighting
 * - Smooth hover transitions
 * - React Router integration
 * 
 * Navigation Links:
 * - Home (/) - House icon
 * - Services (/services) - Gear icon
 * - Our Vision (/our-vision) - Eye icon
 * - Team (/team) - People icon
 * 
 * @returns {JSX.Element} Desktop navigation menu
 */
function Navigation() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="hidden md:flex items-center space-x-6">
      <Link 
        to="/" 
        className={`text-white hover:text-gray-200 transition-colors duration-200 font-medium flex items-center space-x-1.5 ${
          isActive('/') ? 'text-yellow-300 font-semibold' : ''
        }`}
      >
        <svg className="w-4 h-4 opacity-60" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
        </svg>
        <span>Home</span>
      </Link>
      <Link 
        to="/services" 
        className={`text-white hover:text-gray-200 transition-colors duration-200 font-medium flex items-center space-x-1.5 ${
          isActive('/services') ? 'text-yellow-300 font-semibold' : ''
        }`}
      >
        <svg className="w-4 h-4 opacity-60" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
        </svg>
        <span>Services</span>
      </Link>
      <Link 
        to="/our-vision" 
        className={`text-white hover:text-gray-200 transition-colors duration-200 font-medium flex items-center space-x-1.5 ${
          isActive('/our-vision') ? 'text-yellow-300 font-semibold' : ''
        }`}
      >
        <svg className="w-4 h-4 opacity-60" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
        </svg>
        <span>Our Vision</span>
      </Link>
      <Link 
        to="/about" 
        className={`text-white hover:text-gray-200 transition-colors duration-200 font-medium flex items-center space-x-1.5 ${
          isActive('/about') ? 'text-yellow-300 font-semibold' : ''
        }`}
      >
        <svg className="w-4 h-4 opacity-60" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
        </svg>
        <span>About</span>
      </Link>
    </nav>
  );
}

export default Navigation; 