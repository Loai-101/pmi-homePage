import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaInstagram, FaEnvelope, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import Navigation from './Navigation';
import './Header.css';

/**
 * Header Component
 * 
 * Features:
 * - Responsive navigation with mobile menu
 * - PMI branding with logo and company name
 * - Social media links with tooltips
 * - Contact information (phone, WhatsApp, email)
 * - Mobile-friendly hamburger menu
 * 
 * Social Links:
 * - Phone: 13676757
 * - WhatsApp: 13676757
 * - Instagram: @pmi.me
 * - Email: pmiteam@pmi-me.net
 * 
 * @returns {JSX.Element} Header with navigation and contact links
 */
function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="navbar-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Left side - Navigation */}
          <Navigation />
          
          {/* Right side - Social icons and mobile menu */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <a href="tel:13676757" className="social-icon-link" title="Call">
                <FaPhoneAlt className="w-5 h-5 social-icon-phone" />
              </a>
            <a href="https://wa.me/13676757" target="_blank" rel="noopener noreferrer" className="social-icon-link" title="WhatsApp">
                <FaWhatsapp className="w-5 h-5 social-icon-whatsapp" />
              </a>
            <a href="https://www.instagram.com/pmi.me/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" className="social-icon-link" title="Instagram">
                <FaInstagram className="w-5 h-5 social-icon-instagram" />
              </a>
            <a href="mailto:pmiteam@pmi-me.net" className="social-icon-link" title="Email">
                <FaEnvelope className="w-5 h-5 social-icon-email" />
              </a>
            
            {/* Mobile menu button */}
            <div className="md:hidden ml-2">
            <button
              onClick={toggleMobileMenu}
                className="mobile-menu-button"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                  <FaTimes className="w-6 h-6 text-gray-700 dark:text-white" />
              ) : (
                  <FaBars className="w-6 h-6 text-gray-700 dark:text-white" />
              )}
            </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mobile-nav-container show">
            <nav className="mobile-nav-menu">
              <Link 
                to="/" 
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/our-vision" 
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Vision
              </Link>
              <Link 
                to="/about" 
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header; 