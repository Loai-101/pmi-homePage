import React, { useState, useEffect } from 'react';
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
 * - Touch-friendly design for mobile devices
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
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for mobile menu
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-nav-container') && !event.target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-gradient ${isScrolled ? 'scrolled' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Left side - Navigation */}
          <div className="hidden md:block">
            <Navigation />
          </div>
          
          {/* Right side - Social icons and mobile menu */}
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
            {/* Social Icons - Responsive sizing */}
            <div className="hidden sm:flex items-center space-x-2 lg:space-x-3">
              <a 
                href="tel:13676757" 
                className="social-icon-link touch-target" 
                title="Call"
                aria-label="Call us"
              >
                <FaPhoneAlt className="w-4 h-4 sm:w-5 sm:h-5 social-icon-phone" />
              </a>
              <a 
                href="https://wa.me/13676757" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-link touch-target" 
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 social-icon-whatsapp" />
              </a>
              <a 
                href="https://www.instagram.com/pmi.me/?utm_source=ig_web_button_share_sheet" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-link touch-target" 
                title="Instagram"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5 social-icon-instagram" />
              </a>
              <a 
                href="mailto:pmiteam@pmi-me.net" 
                className="social-icon-link touch-target" 
                title="Email"
                aria-label="Email"
              >
                <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5 social-icon-email" />
              </a>
            </div>

            {/* Mobile Social Icons - Compact */}
            <div className="flex sm:hidden items-center space-x-1">
              <a 
                href="tel:13676757" 
                className="social-icon-link-mobile" 
                title="Call"
                aria-label="Call us"
              >
                <FaPhoneAlt className="w-4 h-4" />
              </a>
              <a 
                href="https://wa.me/13676757" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-link-mobile" 
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden ml-2">
              <button
                onClick={toggleMobileMenu}
                className="mobile-menu-button touch-target"
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                ) : (
                  <FaBars className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden mobile-nav-container ${isMobileMenuOpen ? 'show' : ''}`}>
          <nav className="mobile-nav-menu">
            <Link 
              to="/" 
              className="mobile-nav-link"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="mobile-nav-link"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
            <Link 
              to="/our-vision" 
              className="mobile-nav-link"
              onClick={closeMobileMenu}
            >
              Our Vision
            </Link>
            <Link 
              to="/about" 
              className="mobile-nav-link"
              onClick={closeMobileMenu}
            >
              About
            </Link>
            
            {/* Mobile Social Links */}
            <div className="mobile-social-links">
              <a 
                href="tel:13676757" 
                className="mobile-social-link"
                onClick={closeMobileMenu}
              >
                <FaPhoneAlt className="w-4 h-4" />
                <span>Call</span>
              </a>
              <a 
                href="https://wa.me/13676757" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mobile-social-link"
                onClick={closeMobileMenu}
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a 
                href="https://www.instagram.com/pmi.me/?utm_source=ig_web_button_share_sheet" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mobile-social-link"
                onClick={closeMobileMenu}
              >
                <FaInstagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
              <a 
                href="mailto:pmiteam@pmi-me.net" 
                className="mobile-social-link"
                onClick={closeMobileMenu}
              >
                <FaEnvelope className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header; 