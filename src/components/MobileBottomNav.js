import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaCogs, FaEye, FaInfoCircle, FaGlobe } from 'react-icons/fa';

/**
 * Mobile Bottom Navigation Component
 * 
 * Features:
 * - Mobile app-style bottom navigation
 * - Icons for each page
 * - Active page highlighting
 * - Touch-friendly design
 * - Fixed positioning at bottom
 * 
 * Navigation Links:
 * - Home (/) - Home icon
 * - Services (/services) - Settings icon
 * - Our Vision (/our-vision) - Eye icon
 * - About (/about) - Info icon
 * - Countries (/countries) - Globe icon
 * 
 * @returns {JSX.Element} Mobile bottom navigation
 */
function MobileBottomNav() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    {
      path: '/',
      name: 'Home',
      icon: FaHome
    },
    {
      path: '/services',
      name: 'Services',
      icon: FaCogs
    },
    {
      path: '/our-vision',
      name: 'Vision',
      icon: FaEye
    },
    {
      path: '/about',
      name: 'About',
      icon: FaInfoCircle
    }
  ];

  return (
    <div className="mobile-bottom-nav-container">
      <nav className="mobile-bottom-nav">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const active = isActive(item.path);
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`mobile-nav-item ${active ? 'mobile-nav-item-active' : ''}`}
              aria-label={item.name}
            >
              <div className="mobile-nav-icon-container">
                <IconComponent className="mobile-nav-icon" />
              </div>
              <span className="mobile-nav-label">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default MobileBottomNav; 