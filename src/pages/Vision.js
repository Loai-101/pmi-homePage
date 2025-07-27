import React, { useState, useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/pages/Vision.css';
import teamWorkAnimation from '../lottie img/team work.json';

/**
 * Vision Page Component
 * 
 * Features:
 * - Animated hero section with passion statement
 * - Mission and Vision sections with staggered animations
 * - Interactive elements with hover effects
 * - Responsive design with mobile optimizations
 * - Scroll-triggered animations
 * 
 * @returns {JSX.Element} Vision page with animated content
 */
function Vision() {
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    mission: false,
    vision: false,
    countries: false
  });
  
  const [visibleItems, setVisibleItems] = useState({
    missionItems: [],
    visionItems: []
  });
  
  // Refs for intersection observer
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const countriesRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
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
    const heroElement = heroRef.current;
    const missionElement = missionRef.current;
    const visionElement = visionRef.current;
    const countriesElement = countriesRef.current;

    if (heroElement) observer.observe(heroElement);
    if (missionElement) observer.observe(missionElement);
    if (visionElement) observer.observe(visionElement);
    if (countriesElement) observer.observe(countriesElement);

    return () => {
      if (heroElement) observer.unobserve(heroElement);
      if (missionElement) observer.unobserve(missionElement);
      if (visionElement) observer.unobserve(visionElement);
      if (countriesElement) observer.unobserve(countriesElement);
    };
  }, []);

  // Animate mission items when mission section becomes visible
  useEffect(() => {
    if (visibleSections.mission) {
      const missionItems = [
        "To deliver knowledge and essential information that empower individuals and communities.",
        "To provide the highest standards of care to all the communities we reach through our services.",
        "To consistently offer premium-quality products and services that meet the evolving needs of our customers."
      ];
      
      missionItems.forEach((_, index) => {
        setTimeout(() => {
          setVisibleItems(prev => ({
            ...prev,
            missionItems: [...prev.missionItems, index]
          }));
        }, index * 300);
      });
    }
  }, [visibleSections.mission]);

  // Animate vision items when vision section becomes visible
  useEffect(() => {
    if (visibleSections.vision) {
      const visionItems = [
        "To become a leader in our field, recognized for excellence and innovation.",
        "To operate in specialized and focused areas where we can create the most impact.",
        "To drive continuous progress in every solution we deliver."
      ];
      
      visionItems.forEach((_, index) => {
        setTimeout(() => {
          setVisibleItems(prev => ({
            ...prev,
            visionItems: [...prev.visionItems, index]
          }));
        }, index * 300);
      });
    }
  }, [visibleSections.vision]);

  return (
    <div className="vision-page">
      <Header />

      <main className="vision-main">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          data-section="hero"
          className={`vision-hero ${visibleSections.hero ? 'hero-visible' : ''}`}
        >
          <div className="hero-content">
            <div className="hero-text-container">
              <h1 className="hero-title">
                <span className="title-line">We Work With</span>
                <span className="title-line highlight">Passion</span>
              </h1>
              <p className="hero-description">
                At PMI, we are driven by passion, guided by purpose, and committed to delivering meaningful impact in every community we serve. Our mission, vision, and values reflect who we are and what we stand for.
              </p>
            </div>
            <div className="hero-visual">
              <div className="passion-icon">
                <Lottie 
                  animationData={teamWorkAnimation}
                  loop={true}
                  autoplay={true}
                  className="team-work-animation"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section 
          ref={missionRef}
          data-section="mission"
          className={`mission-section ${visibleSections.mission ? 'section-visible' : ''}`}
        >
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Our Mission</h2>
              <div className="title-underline"></div>
            </div>
            <div className="mission-items">
              {[
                "To deliver knowledge and essential information that empower individuals and communities.",
                "To provide the highest standards of care to all the communities we reach through our services.",
                "To consistently offer premium-quality products and services that meet the evolving needs of our customers."
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`mission-item ${visibleItems.missionItems.includes(index) ? 'item-visible' : ''}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="item-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="target-icon">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <p className="item-text">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section 
          ref={visionRef}
          data-section="vision"
          className={`vision-section ${visibleSections.vision ? 'section-visible' : ''}`}
        >
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Our Vision</h2>
              <div className="title-underline"></div>
            </div>
            <div className="vision-items">
              {[
                "To become a leader in our field, recognized for excellence and innovation.",
                "To operate in specialized and focused areas where we can create the most impact.",
                "To drive continuous progress in every solution we deliver."
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`vision-item ${visibleItems.visionItems.includes(index) ? 'item-visible' : ''}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="item-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="eye-icon">
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                    </svg>
                  </div>
                  <p className="item-text">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Countries We Serve Section */}
        <section 
          ref={countriesRef}
          data-section="countries"
          className={`countries-section ${visibleSections.countries ? 'section-visible' : ''}`}
        >
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Countries We Serve</h2>
              <div className="title-underline"></div>
            </div>
            <div className="countries-flags">
              {[
                { name: "Bahrain", image: "https://flagcdn.com/w320/bh.png" },
                { name: "Kuwait", image: "https://flagcdn.com/w320/kw.png" },
                { name: "Oman", image: "https://flagcdn.com/w320/om.png" },
                { name: "Qatar", image: "https://flagcdn.com/w320/qa.png" },
                { name: "Saudi Arabia", image: "https://flagcdn.com/w320/sa.png" },
                { name: "UAE", image: "https://flagcdn.com/w320/ae.png" }
              ].map((country, index) => (
                <div 
                  key={index}
                  className={`flag-item ${visibleSections.countries ? 'flag-visible' : ''}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img 
                    src={country.image} 
                    alt={`${country.name} flag`}
                    className="flag-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default Vision; 