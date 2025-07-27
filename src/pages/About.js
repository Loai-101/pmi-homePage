import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/pages/About.css';

/**
 * About Page Component
 * 
 * Features:
 * - Company information and story
 * - Responsive layout for about content
 * - PMI branding with logo integration
 * - Professional about page content
 * 
 * Structure:
 * - Header with PMI logo and title
 * - About description section
 * - Company information cards
 * - Mission and values section
 * 
 * @returns {JSX.Element} About page with company information
 */
function About() {
  return (
    <div className="about-page">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="about-header">
        </div>

        <div className="about-content">
          {/* About PMI Section */}
          <div className="about-section">
            <h2 className="section-title">About PMI</h2>
            <div className="section-content">
              <p className="section-text">
                PMI is a family-owned business, originally established as an idea in 2014 with a vision to provide high-quality medical and general health products. Over the years, PMI has evolved and expanded its operations. In 2021, the team ventured into specialized sectors including dermatology, healthcare IT, and medical IT.
              </p>
              <p className="section-text">
                PMI operates with a dedicated team of 11 professionals, managing business operations across the North Gulf and Saudi Arabia.
              </p>
            </div>
          </div>

          {/* Business Divisions Section */}
          <div className="about-section">
            <h2 className="section-title">Our Business Divisions</h2>
            
            {/* Medical Division */}
            <div className="division-card">
              <h3 className="division-title">Medical</h3>
              <p className="division-description">
                PMI focuses on a wide range of specialized medical fields including dental, surgical, orthopedic, and CSSD (Central Sterile Services Department). In addition, we supply general medical products and home-use medical devices to meet day-to-day healthcare needs.
              </p>
            </div>

            {/* Healthcare Division */}
            <div className="division-card">
              <h3 className="division-title">Healthcare</h3>
              <p className="division-description">
                We offer a comprehensive selection of skincare, baby care, cosmetics, and general wellness products, tailored to support both personal and professional healthcare standards.
              </p>
            </div>

            {/* IT Division */}
            <div className="division-card">
              <h3 className="division-title">Information Technology (PMI IT)</h3>
              <p className="division-description">
                PMI IT proudly formed a strategic technology alliance with FutureCitiesCouncil Inc., a leading Canadian firm established in 2019, known for its expertise in intelligent systems and advanced IT solutions.
              </p>
              <p className="partnership-description">
                This partnership combines deep technological expertise with a global perspective, offering:
              </p>
              <div className="services-list">
                <div className="service-item">Complete system architecture and custom software development</div>
                <div className="service-item">Enterprise-grade digital transformation</div>
                <div className="service-item">Strategic IT consulting</div>
                <div className="service-item">AI-powered smart solutions</div>
                <div className="service-item">Intelligent infrastructure tailored for healthcare, education, and e-commerce sectors</div>
              </div>
              <p className="partnership-vision">
                Together, PMI IT and FutureCitiesCouncil Inc. aim to drive technological innovation, enhance operational performance, and build a smarter, more efficient digital future for clients across the globe.
              </p>
            </div>
          </div>

          {/* Our Commitment Section */}
          <div className="about-section">
            <h2 className="section-title">Our Commitment</h2>
            <div className="commitment-content">
              <p className="section-text">
                Guided by a leadership team with over 30 years of experience in the medical and pharmaceutical fields, PMI is committed to operational excellence across all functions.
              </p>
              <p className="commitment-focus">
                We prioritize results that serve:
              </p>
              <div className="stakeholders-grid">
                <div className="stakeholder-item">Healthcare professionals</div>
                <div className="stakeholder-item">Patients</div>
                <div className="stakeholder-item">End users</div>
                <div className="stakeholder-item">IT serves</div>
              </div>
              <p className="mission-statement">
                Our mission is to design and deliver services that exceed expectations and help our partners reach — and surpass — their business objectives.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default About; 