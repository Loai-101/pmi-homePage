import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/pages/Countries.css';

/**
 * Countries Page Component
 * 
 * Features:
 * - Global presence showcase
 * - Responsive country cards grid
 * - PMI branding with logo integration
 * - Placeholder content for international operations
 * 
 * Structure:
 * - Header with PMI logo and title
 * - Description of global reach
 * - Country cards grid (currently 3 placeholder countries)
 * - Each card shows region and establishment date
 * 
 * @returns {JSX.Element} Countries page with global presence cards
 */
function Countries() {
  return (
    <div className="countries-page">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="countries-header">
          <div className="countries-title">
            <img 
              src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1751977454/PMI_Circile_Gray_wiu9mh.png" 
              alt="PMI Logo" 
              className="countries-logo"
            />
            <h1 className="countries-heading">
              Global Presence
            </h1>
          </div>
          <p className="countries-description">
            Discover our international reach and operations across different countries
          </p>
        </div>

        <div className="countries-grid">
          {/* Country cards will be added here */}
          <div className="country-card">
            <h3>Country 1</h3>
            <p>Description of operations in country 1 will be added here.</p>
            <div className="country-details">
              <p>Region: Middle East</p>
              <p>Established: 2020</p>
            </div>
          </div>
          
          <div className="country-card">
            <h3>Country 2</h3>
            <p>Description of operations in country 2 will be added here.</p>
            <div className="country-details">
              <p>Region: Europe</p>
              <p>Established: 2021</p>
            </div>
          </div>
          
          <div className="country-card">
            <h3>Country 3</h3>
            <p>Description of operations in country 3 will be added here.</p>
            <div className="country-details">
              <p>Region: Asia</p>
              <p>Established: 2022</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Countries; 