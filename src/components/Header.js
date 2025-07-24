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
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1751977454/PMI_Circile_Gray_wiu9mh.png" 
                alt="PMI Logo" 
                className="h-6 sm:h-8 w-auto"
              />
              <span className="ml-2 sm:ml-3 text-lg sm:text-xl font-extrabold text-white tracking-wide navbar-functions-animate pmi-company-name">
                PMI
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <Navigation />
          
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="relative group">
              <a href="tel:13676757" className="hover:brightness-125" title="Call">
                <FaPhoneAlt className="w-5 h-5 social-icon-phone" />
              </a>
              <div className="social-tooltip group-hover:opacity-100">
                13676757
              </div>
            </div>
            <div className="relative group">
              <a href="https://wa.me/13676757" target="_blank" rel="noopener noreferrer" className="hover:brightness-125" title="WhatsApp">
                <FaWhatsapp className="w-5 h-5 social-icon-whatsapp" />
              </a>
              <div className="social-tooltip group-hover:opacity-100">
                WhatsApp: 13676757
              </div>
            </div>
            <div className="relative group">
              <a href="https://www.instagram.com/pmi.me/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" className="hover:brightness-125" title="Instagram">
                <FaInstagram className="w-5 h-5 social-icon-instagram" />
              </a>
              <div className="social-tooltip group-hover:opacity-100">
                @pmi.me
              </div>
            </div>
            <div className="relative group">
              <a href="mailto:pmiteam@pmi-me.net" className="hover:brightness-125" title="Email">
                <FaEnvelope className="w-5 h-5 social-icon-email" />
              </a>
              <div className="social-tooltip group-hover:opacity-100">
                pmiteam@pmi-me.net
              </div>
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden mobile-menu-button"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="w-5 h-5 text-gray-700 dark:text-white" />
              ) : (
                <FaBars className="w-5 h-5 text-gray-700 dark:text-white" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mobile-nav-container">
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
                to="/projects" 
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                to="/countries" 
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Countries
              </Link>
              <Link 
                to="/team" 
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Team
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header; 