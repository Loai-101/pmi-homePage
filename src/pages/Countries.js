import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/pages/Countries.css';

/**
 * Our Vision Page Component
 * 
 * Features:
 * - PMI's vision and mission
 * - GCC countries presence
 * - Real flag images of Gulf States
 * - PMI branding with logo integration
 * - Gulf Cooperation Council presence
 * 
 * GCC Countries:
 * - Saudi Arabia
 * - United Arab Emirates
 * - Kuwait
 * - Qatar
 * - Bahrain
 * - Oman
 * 
 * @returns {JSX.Element} Our Vision page with PMI's vision and GCC flags
 */
function OurVision() {
  const gccCountries = [
    { 
      name: 'Saudi Arabia', 
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg',
      code: 'SA' 
    },
    { 
      name: 'United Arab Emirates', 
      flag: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg',
      code: 'AE' 
    },
    { 
      name: 'Kuwait', 
      flag: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Kuwait.svg',
      code: 'KW' 
    },
    { 
      name: 'Qatar', 
      flag: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg',
      code: 'QA' 
    },
    { 
      name: 'Bahrain', 
      flag: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain.svg',
      code: 'BH' 
    },
    { 
      name: 'Oman', 
      flag: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Oman.svg',
      code: 'OM' 
    }
  ];

  const handleImageError = (event) => {
    // Fallback to emoji if image fails to load
    const countryName = event.target.alt;
    const emojiMap = {
      'Saudi Arabia flag': '🇸🇦',
      'United Arab Emirates flag': '🇦🇪',
      'Kuwait flag': '🇰🇼',
      'Qatar flag': '🇶🇦',
      'Bahrain flag': '🇧🇭',
      'Oman flag': '🇴🇲'
    };
    
    if (emojiMap[countryName]) {
      event.target.style.display = 'none';
      const emojiDiv = document.createElement('div');
      emojiDiv.className = 'flag-emoji-fallback';
      emojiDiv.textContent = emojiMap[countryName];
      emojiDiv.style.fontSize = '3rem';
      emojiDiv.style.textAlign = 'center';
      emojiDiv.style.lineHeight = '60px';
      event.target.parentNode.appendChild(emojiDiv);
    }
  };

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
              Our Vision
            </h1>
          </div>
          <p className="countries-description">
            To be the leading technology partner across the Gulf Cooperation Council, 
            delivering innovative solutions that transform businesses and enhance lives
          </p>
        </div>

        <div className="vision-content">
          <div className="vision-section">
            <h2 className="vision-section-title">Our Mission</h2>
            <p className="vision-section-text">
              At PMI, we are committed to providing cutting-edge IT solutions, healthcare innovations, 
              and digital transformation services that empower organizations across the GCC region. 
              We strive to bridge the gap between technology and human needs, creating sustainable 
              solutions that drive growth and improve quality of life.
            </p>
          </div>

          <div className="vision-section">
            <h2 className="vision-section-title">Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>Innovation</h3>
                <p>Pioneering new technologies and creative solutions</p>
              </div>
              <div className="value-item">
                <h3>Excellence</h3>
                <p>Delivering the highest quality in everything we do</p>
              </div>
              <div className="value-item">
                <h3>Integrity</h3>
                <p>Building trust through transparency and ethical practices</p>
              </div>
              <div className="value-item">
                <h3>Partnership</h3>
                <p>Collaborating closely with our clients for mutual success</p>
              </div>
            </div>
          </div>
        </div>

        <div className="gcc-flags-container">
          <h2 className="gcc-title">Gulf Cooperation Council Presence</h2>
          <p className="gcc-subtitle">Serving all GCC countries with local expertise and global standards</p>
          <div className="gcc-flags-line">
            {gccCountries.map((country, index) => (
              <div key={index} className="gcc-flag-item">
                <div className="flag-image-container">
                  <img 
                    src={country.flag} 
                    alt={`${country.name} flag`}
                    className="flag-image"
                    onError={handleImageError}
                  />
                </div>
                <span className="country-name">{country.name}</span>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default OurVision; 