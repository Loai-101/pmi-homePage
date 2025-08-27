import React, { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import './FunctionCard.css';

/**
 * FunctionCard Component
 * 
 * Features:
 * - Interactive PMI function cards with themes
 * - Responsive design with hover effects
 * - Image loading with fallback placeholders
 * - Accessibility support with keyboard navigation
 * - Two display modes: compact and detailed view
 * 
 * Theme System:
 * - PMI Medical (Blue theme)
 * - IT Solutions (Purple theme)
 * - Health Care (Green/Teal theme)
 * - Advertising and Publicity (Brown theme)
 * 
 * Props:
 * - function: PMI function object with id, name, description, logo, officialLink
 * - isDetailView: Boolean to switch between compact and detailed display
 * 
 * @param {Object} props - Component props
 * @param {Object} props.function - PMI function data
 * @param {boolean} props.isDetailView - Display mode flag
 * @returns {JSX.Element} Interactive function card
 */

// Custom styling functions based on logo colors
const getCardThemeStyles = (functionId) => {
  switch (functionId) {
    case 1: // PMI Medical - Blue
      return {
        cardClass: "blue-medical-theme",
        nameClass: "function-name-blue",
        glowClass: "blue-glow-effect",
        shimmerClass: "blue-shimmer-animation",
        buttonClass: "blue-button-theme"
      };
    case 2: // IT Solutions - Purple
      return {
        cardClass: "purple-it-theme",
        nameClass: "function-name-purple",
        glowClass: "purple-glow-effect",
        shimmerClass: "purple-shimmer-animation",
        buttonClass: "purple-button-theme"
      };
    case 3: // Health Care - Green/Teal
      return {
        cardClass: "green-health-theme",
        nameClass: "function-name-green",
        glowClass: "green-glow-effect",
        shimmerClass: "green-shimmer-animation",
        buttonClass: "green-button-theme"
      };
    case 4: // Advertising and Publicity - Brown
      return {
        cardClass: "brown-advertising-theme",
        nameClass: "function-name-brown",
        glowClass: "brown-glow-effect",
        shimmerClass: "brown-shimmer-animation",
        buttonClass: "brown-button-theme"
      };
    default:
      return {
        cardClass: "default-theme",
        nameClass: "",
        glowClass: "",
        shimmerClass: "",
        buttonClass: ""
      };
  }
};

const FunctionCard = ({ function: pmFunction, isDetailView = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const themeStyles = getCardThemeStyles(pmFunction.id);



  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  const handleContactClick = (e) => {
    e.stopPropagation();
    setShowContactModal(true);
  };

  const handleContactOption = (type) => {
    setShowContactModal(false);
    
    // Function-specific contact information
    const getContactInfo = (functionId) => {
      switch (functionId) {
        case 1: // PMI Medical
          return {
            phone: '13676757',
            whatsapp: '13676757',
            email: 'pmiteam@pmi-me.net'
          };
        case 2: // IT Solutions
          return {
            phone: '+97332009540',
            whatsapp: '97332009540',
            email: 'it.solutions@pmigroup.me'
          };
        case 3: // Health Care
          return {
            phone: '13676757',
            whatsapp: '13676757',
            email: 'pmiteam@pmi-me.net'
          };
        case 4: // Advertising and Publicity
          return {
            phone: '13676757',
            whatsapp: '13676757',
            email: 'pmiteam@pmi-me.net'
          };
        default:
          return {
            phone: '13676757',
            whatsapp: '13676757',
            email: 'pmiteam@pmi-me.net'
          };
      }
    };
    
    const contactInfo = getContactInfo(pmFunction.id);
    
    switch (type) {
      case 'email':
        window.open(`mailto:${contactInfo.email}?subject=Inquiry about ${pmFunction.name}`, '_blank');
        break;
      case 'phone':
        window.open(`tel:${contactInfo.phone}`, '_blank');
        break;
      case 'whatsapp':
        const message = `Hello! I'm interested in learning more about ${pmFunction.name}.`;
        const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        break;
      default:
        break;
    }
  };

  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setShowContactModal(false);
    }
  };

  if (isDetailView) {
    return (
      <div className={`sparkling-bg rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 theme-transition animate-fade-in-up border border-gray-300 dark:border-gray-600 ${themeStyles.cardClass} ${themeStyles.glowClass}`}>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-6 relative z-10">
          <div className="flex-shrink-0">
            <div className={`w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 ${!imageLoaded ? 'image-loading' : ''} ${themeStyles.shimmerClass}`}>
          <img
                                src={imageError ? 'https://res.cloudinary.com/dvybb2xnc/image/upload/v1751977454/PMI_Circile_Gray_wiu9mh.png' : pmFunction.logo}
            alt={`${pmFunction.name} logo`}
            className="w-full h-full object-contain"
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className={`text-xl sm:text-2xl lg:text-3xl font-black mb-3 sm:mb-4 tracking-wide uppercase ${themeStyles.nameClass}`}>
              {pmFunction.name}
            </h3>
            <p className="leading-relaxed text-sm sm:text-base lg:text-lg">
              {pmFunction.description}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative sparkling-bg rounded-xl shadow-lg overflow-hidden theme-transition animate-fade-in-up border border-gray-300 dark:border-gray-600 w-full h-72 sm:h-80 md:h-88 ${themeStyles.cardClass} ${themeStyles.glowClass}`}
    >
      <div className="p-4 sm:p-6 relative z-10 h-full flex flex-col items-center justify-center">
        <div className={`w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 mb-3 sm:mb-4 ${!imageLoaded ? 'image-loading' : ''} ${themeStyles.shimmerClass}`}>
          <img
                                src={imageError ? 'https://res.cloudinary.com/dvybb2xnc/image/upload/v1751977454/PMI_Circile_Gray_wiu9mh.png' : pmFunction.logo}
            alt={`${pmFunction.shortName} logo`}
            className="w-full h-full object-contain"
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        </div>
        
        <h3 className={`text-sm sm:text-base md:text-lg font-black tracking-wide uppercase ${themeStyles.nameClass} function-card-title text-center`}>
          {pmFunction.name}
        </h3>
        
        {/* Card buttons */}
        <div className="function-card-buttons">
          <button 
            className={`function-card-button ${themeStyles.buttonClass}`}
            onClick={(e) => {
              e.stopPropagation();
              if (pmFunction.id === 1) {
                // PMI Medical - Show admin only message
                alert("For Admin Use Only");
              } else if (pmFunction.officialLink && pmFunction.officialLink !== '#') {
                window.open(pmFunction.officialLink, '_blank', 'noopener,noreferrer');
              } else {
                alert("Coming Soon!");
              }
            }}
          >
            Visit Website
          </button>
          <button 
            className={`function-card-button function-card-contact-button ${themeStyles.buttonClass}`}
            onClick={handleContactClick}
          >
            Contact
          </button>
        </div>
      </div>
      
      {/* Focus indicator for accessibility */}
      <div className="function-card-focus-indicator"></div>
      
      {/* Contact Card */}
      {showContactModal && (
        <div className="contact-card-overlay" onClick={closeModal}>
          <div className={`contact-card ${themeStyles.cardClass} ${themeStyles.glowClass}`}>
            <div className="contact-card-header">
              <h3 className={`contact-card-title ${themeStyles.nameClass}`}>
                Contact {pmFunction.name}
              </h3>
              <button 
                className="contact-card-close" 
                onClick={() => setShowContactModal(false)}
                aria-label="Close contact options"
              >
                ×
              </button>
            </div>
            <div className="contact-card-content">
              <div className="contact-option-item">
                <button 
                  className="contact-option-button whatsapp-button"
                  onClick={() => handleContactOption('whatsapp')}
                  aria-label="Contact via WhatsApp"
                >
                  <span className="contact-option-icon">
                    <FaWhatsapp />
                  </span>
                  <div className="contact-option-details">
                    <span className="contact-option-label">WhatsApp</span>
                    <span className="contact-option-value">
                      {pmFunction.id === 2 ? '+973 3200 9540' : '13676757'}
                    </span>
                  </div>
                </button>
              </div>
              <div className="contact-option-item">
                <button 
                  className="contact-option-button email-button"
                  onClick={() => handleContactOption('email')}
                  aria-label="Contact via Email"
                >
                  <span className="contact-option-icon">
                    <FaEnvelope />
                  </span>
                  <div className="contact-option-details">
                    <span className="contact-option-label">Email</span>
                    <span className="contact-option-value">
                      {pmFunction.id === 2 ? 'it.solutions@pmigroup.me' : 'pmiteam@pmi-me.net'}
                    </span>
                  </div>
                </button>
              </div>
              <div className="contact-option-item">
                <button 
                  className="contact-option-button phone-button"
                  onClick={() => handleContactOption('phone')}
                  aria-label="Contact via Phone"
                >
                  <span className="contact-option-icon">
                    <FaPhone />
                  </span>
                  <div className="contact-option-details">
                    <span className="contact-option-label">Phone Call</span>
                    <span className="contact-option-value">
                      {pmFunction.id === 2 ? '+973 3200 9540' : '13676757'}
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FunctionCard; 