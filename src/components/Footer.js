import React from 'react';
import './Footer.css';

/**
 * Footer Component
 * 
 * Features:
 * - Enhanced footer with prominent design
 * - PMI branding with animated elements
 * - Responsive design with proper spacing
 * - Dark mode support with enhanced visibility
 * 
 * Content:
 * - Company title and subtitle
 * - Copyright notice
 * - Company description
 * 
 * @returns {JSX.Element} Enhanced footer with prominent design
 */
function Footer() {
  return (
    <footer className="footer-enhanced mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="footer-content text-center">
          <h3 className="footer-title">
            PERMANENT INTEGRATION TRADING
          </h3>
          <p className="footer-subtitle">
            Empowering Lives Through Innovation & Quality
          </p>
          <div className="footer-divider"></div>
          <p className="footer-copyright">
            © 2022 All rights reserved.
          </p>
          <p className="footer-description">
            This is a showcase website for PMI functions and methodologies.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 