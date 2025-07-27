import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesSlider from '../components/ServicesSlider';
import '../styles/pages/Services.css';

/**
 * Services Page Component
 * 
 * Features:
 * - Clean service showcase layout
 * - Responsive grid design for service cards
 * - PMI branding with logo integration
 * - Interactive slider with Lottie animations
 * - Comprehensive service offerings
 * 
 * Structure:
 * - Header with PMI logo and title
 * - Description section
 * - Services slider with carousel
 * - Lottie animation section
 * - Service cards grid
 * 
 * @returns {JSX.Element} Services page with service cards and slider
 */
function Services() {
  return (
    <div className="services-page">
      <Header />

      <main className="services-main">
        {/* Services Slider Section */}
        <section className="services-slider-section">
          <ServicesSlider />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Services; 