import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/pages/Services.css';

/**
 * Services Page Component
 * 
 * Features:
 * - Clean service showcase layout
 * - Responsive grid design for service cards
 * - PMI branding with logo integration
 * - Placeholder content ready for real services
 * 
 * Structure:
 * - Header with PMI logo and title
 * - Description section
 * - Service cards grid (currently 3 placeholder cards)
 * 
 * @returns {JSX.Element} Services page with service cards
 */
function Services() {
  return (
    <div className="services-page">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="services-header">
          <div className="services-title">
            <img 
              src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1751977454/PMI_Circile_Gray_wiu9mh.png" 
              alt="PMI Logo" 
              className="services-logo"
            />
            <h1 className="services-heading">
              Our Services
            </h1>
          </div>
          <p className="services-description">
            Discover the comprehensive range of services we offer to empower your business
          </p>
        </div>

        <div className="services-grid">
          {/* Service cards will be added here */}
          <div className="service-card">
            <h3>Service 1</h3>
            <p>Description of service 1 will be added here.</p>
          </div>
          
          <div className="service-card">
            <h3>Service 2</h3>
            <p>Description of service 2 will be added here.</p>
          </div>
          
          <div className="service-card">
            <h3>Service 3</h3>
            <p>Description of service 3 will be added here.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Services; 