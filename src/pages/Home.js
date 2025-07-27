import React, { useState, useEffect, useRef } from 'react';
import FunctionCard from '../components/FunctionCard';
import { functions } from '../data/functions';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/pages/Home.css';

const DESCRIPTION = "Through creativity, innovation and quality, we empower lives and adding value by our diverse range of organizations, providing excellence in cosmetics, medical products, general essentials, and IT solutions.";

// Global variable to track if animation has been shown in this session
if (typeof window !== 'undefined' && !window.homeAnimationShownThisSession) {
  window.homeAnimationShownThisSession = false;
}

/**
 * Home Page Component
 * 
 * Features:
 * - Animated word-by-word description display
 * - Sequential card animations after description completes
 * - Responsive design with mobile optimizations
 * - PMI Functions showcase with interactive cards
 * 
 * Animation Flow:
 * 1. Description words appear one by one
 * 2. Function cards animate in sequence after description
 * 3. Fallback ensures all content is visible within 5 seconds
 * 
 * @returns {JSX.Element} Home page with animated content
 */
function Home() {
  const [visibleDescWords, setVisibleDescWords] = useState([]);
  const [visibleCards, setVisibleCards] = useState([]);
  const [descriptionComplete, setDescriptionComplete] = useState(false);
  const [cardsComplete, setCardsComplete] = useState(false);
  const [sectionsReady, setSectionsReady] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  
  // Scroll animation states
  const [visibleSections, setVisibleSections] = useState({
    advisory: false,
    experts: false,
    partners: false
  });
  
  // Refs for intersection observer
  const advisoryRef = useRef(null);
  const expertsRef = useRef(null);
  const partnersRef = useRef(null);

  // Check if this is first visit or page refresh
  useEffect(() => {
    const hasVisited = localStorage.getItem('pmi-home-visited');
    const isPageRefresh = performance.navigation.type === 1 || window.performance.getEntriesByType('navigation')[0]?.type === 'reload';
    
    // Show animation if first visit, page refresh, or animation not shown in this session
    if (!hasVisited || isPageRefresh || !window.homeAnimationShownThisSession) {
      setShouldAnimate(true);
      localStorage.setItem('pmi-home-visited', 'true');
      window.homeAnimationShownThisSession = true;
    } else {
      // Skip animation, show all content immediately
      setShouldAnimate(false);
      setVisibleDescWords(DESCRIPTION.split(' ').filter(word => word.trim() !== '').map((_, i) => i));
      setDescriptionComplete(true);
      setVisibleCards(functions.map((_, i) => i));
      setCardsComplete(true);
      setSectionsReady(true);
    }
    
    setIsInitialized(true);
  }, []);

  // Animation effect - only runs if shouldAnimate is true
  useEffect(() => {
    if (!shouldAnimate || !isInitialized) return;
    
    const words = DESCRIPTION.split(' ').filter(word => word.trim() !== '');
    setVisibleDescWords([]);
    setDescriptionComplete(false);
    
    // Start the word animation after a short delay
    const startDelay = setTimeout(() => {
      // Use a more reliable approach with Promise-based delays
      const animateWordsSequentially = async () => {
        for (let i = 0; i < words.length; i++) {
          await new Promise(resolve => {
            setTimeout(() => {
              setVisibleDescWords(prev => [...prev, i]);
              resolve();
            }, window.innerWidth <= 768 ? 80 : 100);
          });
        }
        setDescriptionComplete(true);
      };
      
      animateWordsSequentially();
      
      // Fallback: ensure all words are visible after 5 seconds
      const fallback = setTimeout(() => {
        setVisibleDescWords(words.map((_, i) => i));
        setDescriptionComplete(true);
      }, 5000);
      
      return () => clearTimeout(fallback);
    }, 600); // Reduced initial delay for mobile
    
    return () => clearTimeout(startDelay);
  }, [shouldAnimate, isInitialized]);

  // Cards animation effect - show immediately
  useEffect(() => {
    if (!isInitialized) return;
    // Show all cards immediately
    setVisibleCards([0, 1, 2, 3]);
    setCardsComplete(true);
    // Enable sections to be shown on scroll
    setTimeout(() => {
      setSectionsReady(true);
    }, 100);
  }, [isInitialized]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    if (!sectionsReady) return; // Only start observing when sections are ready

    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.dataset.section;
          setVisibleSections(prev => ({
            ...prev,
            [sectionName]: true
          }));
        }
      });
    }, observerOptions);

    // Observe sections
    const advisoryElement = advisoryRef.current;
    const expertsElement = expertsRef.current;
    const partnersElement = partnersRef.current;

    if (advisoryElement) observer.observe(advisoryElement);
    if (expertsElement) observer.observe(expertsElement);
    if (partnersElement) observer.observe(partnersElement);

    return () => {
      if (advisoryElement) observer.unobserve(advisoryElement);
      if (expertsElement) observer.unobserve(expertsElement);
      if (partnersElement) observer.unobserve(partnersElement);
    };
  }, [sectionsReady]);



  return (
    <div className="home-page">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* PMI Functions Section */}
        <section className="pmi-functions-section">
          <div className="pmi-functions-header">
            <div className="pmi-functions-title">
              <div className="pmi-logo-container">
                <img 
                  src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1751977454/PMI_Circile_Gray_wiu9mh.png" 
                  alt="PMI Logo" 
                  className="pmi-logo-beside-title"
                />
              </div>
              <div className="pmi-title-container">
                <h2 className="pmi-functions-heading">
                  PERMANENT INTEGRATION TRADING
                </h2>
                <div className="pmi-title-underline"></div>
              </div>
            </div>
            <p className="pmi-description">
              <span id="desc-blue">
                {DESCRIPTION}
              </span>
            </p>
          </div>
          <div className="functions-grid">
            {functions.map((pmFunction, index) => (
              <div
                key={pmFunction.id}
                className={`function-card-wrapper ${
                  visibleCards.includes(index) 
                    ? 'card-animate-in' 
                    : 'opacity-0'
                }`}
              >
                <FunctionCard 
                  function={pmFunction} 
                  isDetailView={false}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Advisory Reports Section */}
        <section 
          ref={advisoryRef}
          data-section="advisory"
          className={`advisory-reports-section scroll-section ${visibleSections.advisory ? 'section-visible' : ''}`}
        >
          <div className="section-header">
            <h2 className="section-title">Advisory Reports</h2>
            <div className="title-underline"></div>
          </div>
          <div className="advisory-grid">
            {[1, 2, 3, 4, 5].map((advisor, index) => (
              <div 
                key={advisor} 
                className={`advisor-card hover-info-card scroll-card ${visibleSections.advisory ? 'card-visible' : ''}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="advisor-image">
                  <img 
                    src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1751977454/PMI_Circile_Gray_wiu9mh.png" 
                    alt={`Advisor ${advisor}`}
                    className="advisor-img"
                  />
                  <div className="hover-info-overlay">
                    <h3 className="hover-info-title">Advisor {advisor}</h3>
                    <p className="hover-info-description">Strategic guidance and expert insights for business development and market analysis.</p>
                  </div>
                </div>
                <div className="advisor-info">
                  <h3 className="advisor-name">Advisor {advisor}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experts Section */}
        <section 
          ref={expertsRef}
          data-section="experts"
          className={`experts-section scroll-section ${visibleSections.experts ? 'section-visible' : ''}`}
        >
          <div className="section-header">
            <h2 className="section-title">Experts</h2>
            <div className="title-underline"></div>
          </div>
          <div className="experts-grid">
            {[1, 2, 3, 4, 5].map((expert, index) => (
              <div 
                key={expert} 
                className={`expert-card hover-info-card scroll-card ${visibleSections.experts ? 'card-visible' : ''}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="expert-image">
                  <img 
                    src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1751977454/PMI_Circile_Gray_wiu9mh.png" 
                    alt={`Expert ${expert}`}
                    className="expert-img"
                  />
                  <div className="hover-info-overlay">
                    <h3 className="hover-info-title">Expert {expert}</h3>
                    <p className="hover-info-description">Specialized professional with deep expertise in industry-specific solutions and innovations.</p>
                  </div>
                </div>
                <div className="expert-info">
                  <h3 className="expert-name">Expert {expert}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Partners Section */}
        <section 
          ref={partnersRef}
          data-section="partners"
          className={`partners-section scroll-section ${visibleSections.partners ? 'section-visible' : ''}`}
        >
          <div className="section-header">
            <h2 className="section-title">Our Partners</h2>
            <div className="title-underline"></div>
          </div>
          <div className="partners-grid">
            {/* FutureCitiesCouncil Inc */}
            <div className="partner-card technical-partner-card">
              <div className="partner-logo-full">
                <img 
                  src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1751551231/futurecities-logo_qgotzj.jpg" 
                  alt="FutureCitiesCouncil Inc"
                  className="partner-img-full"
                />
                <div className="technical-partner-overlay">
                  <h3 className="technical-partner-text">Technical Partner</h3>
                </div>
              </div>
            </div>
            
            {/* Second Technical Partner */}
            <div className="partner-card technical-partner-card">
              <div className="partner-logo-full">
                <img 
                  src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1752663108/ChatGPT_Image_Jul_16_2025_01_51_33_PM_pvbywq.png" 
                  alt="Second Technical Partner"
                  className="partner-img-full"
                />
                <div className="technical-partner-overlay">
                  <h3 className="technical-partner-text">Technical Partner</h3>
                </div>
              </div>
            </div>
            
            {/* Third Medical Partner */}
            <div className="partner-card technical-partner-card">
              <div className="partner-logo-full">
                <img 
                  src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1752663438/ChatGPT_Image_Jul_16_2025_01_57_02_PM_qt3jha.png" 
                  alt="Medical Partner"
                  className="partner-img-full"
                />
                <div className="technical-partner-overlay">
                  <h3 className="technical-partner-text">Medical Partner</h3>
                </div>
              </div>
            </div>
            
            {/* Fourth Consulting Partner */}
            <div 
              className={`partner-card technical-partner-card scroll-card ${visibleSections.partners ? 'card-visible' : ''}`}
              style={{ animationDelay: `${3 * 150}ms` }}
            >
              <div className="partner-logo-full">
                <img 
                  src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1752666549/ChatGPT_Image_Jul_16_2025_02_43_36_PM_dng74e.png" 
                  alt="Consulting and Systems Management Services Partner"
                  className="partner-img-full"
                />
                <div className="technical-partner-overlay">
                  <h3 className="technical-partner-text">Consulting and Systems Management Services Partner</h3>
                </div>
              </div>
            </div>
            
            {/* Fifth Podium Racing Partner */}
            <div 
              className={`partner-card technical-partner-card scroll-card ${visibleSections.partners ? 'card-visible' : ''}`}
              style={{ animationDelay: `${4 * 150}ms` }}
            >
              <div className="partner-logo-full">
                <img 
                  src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1753552171/ChatGPT_Image_Jul_26_2025_08_41_01_PM_svtphh.png" 
                  alt="Podium Racing"
                  className="partner-img-full"
                />
                <div className="technical-partner-overlay">
                  <h3 className="technical-partner-text">Sport Partner</h3>
                </div>
              </div>
            </div>
            

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home; 