import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 * 
 * Automatically scrolls to the top of the page when:
 * - Route changes (navigation between pages)
 * - Page is refreshed
 * - Component mounts
 * 
 * @returns {null} This component doesn't render anything
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes (route change)
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Scroll to top when component mounts (page refresh)
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export default ScrollToTop; 