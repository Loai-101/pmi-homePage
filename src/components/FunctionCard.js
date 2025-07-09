import React, { useState } from 'react';

// Custom styling functions based on logo colors
const getCardThemeStyles = (functionId) => {
  switch (functionId) {
    case 1: // PMI Medical - Blue
      return {
        cardClass: "blue-medical-theme",
        nameClass: "function-name-blue",
        glowClass: "blue-glow-effect",
        shimmerClass: "blue-shimmer-animation"
      };
    case 2: // IT Solutions - Purple
      return {
        cardClass: "purple-it-theme",
        nameClass: "function-name-purple",
        glowClass: "purple-glow-effect",
        shimmerClass: "purple-shimmer-animation"
      };
    case 3: // Health Care - Green/Teal
      return {
        cardClass: "green-health-theme",
        nameClass: "function-name-green",
        glowClass: "green-glow-effect",
        shimmerClass: "green-shimmer-animation"
      };
    case 4: // Advertising and Publicity - Brown
      return {
        cardClass: "brown-advertising-theme",
        nameClass: "function-name-brown",
        glowClass: "brown-glow-effect",
        shimmerClass: "brown-shimmer-animation"
      };
    default:
      return {
        cardClass: "default-theme",
        nameClass: "",
        glowClass: "",
        shimmerClass: ""
      };
  }
};

const FunctionCard = ({ function: pmFunction, isDetailView = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const themeStyles = getCardThemeStyles(pmFunction.id);

  const handleCardClick = () => {
    if (pmFunction.officialLink === "#") {
      alert("Coming Soon!");
    } else {
      window.open(pmFunction.officialLink, '_blank', 'noopener,noreferrer');
    }
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  if (isDetailView) {
    return (
      <div className={`sparkling-bg rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 theme-transition animate-fade-in-up border border-gray-300 dark:border-gray-600 ${themeStyles.cardClass} ${themeStyles.glowClass}`}>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-6 relative z-10">
          <div className="flex-shrink-0">
            <div className={`w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 ${!imageLoaded ? 'image-loading' : ''} ${themeStyles.shimmerClass}`}>
          <img
            src={imageError ? 'https://via.placeholder.com/192x192/1e40af/ffffff?text=PMI' : pmFunction.logo}
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
      className={`relative sparkling-bg rounded-xl shadow-lg overflow-hidden cursor-pointer card-hover theme-transition animate-fade-in-up border border-gray-300 dark:border-gray-600 w-full h-48 sm:h-56 md:h-64 ${themeStyles.cardClass} ${themeStyles.glowClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCardClick();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`${pmFunction.name} - Click to learn more`}
    >
      <div className="p-4 sm:p-6 relative z-10 h-full flex flex-col items-center justify-center">
        <div className={`w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mb-3 sm:mb-4 ${!imageLoaded ? 'image-loading' : ''} ${themeStyles.shimmerClass}`}>
          <img
            src={imageError ? 'https://via.placeholder.com/128x128/1e40af/ffffff?text=PMI' : pmFunction.logo}
            alt={`${pmFunction.shortName} logo`}
            className="w-full h-full object-contain"
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        </div>
        
        <h3 className={`text-sm sm:text-base md:text-lg font-black tracking-wide uppercase ${themeStyles.nameClass} function-card-title text-center`}>
          {pmFunction.name}
        </h3>
        
        
      </div>
      
      {/* Focus indicator for accessibility */}
      <div className="absolute inset-0 border-2 border-transparent rounded-xl focus-within:border-blue-500 pointer-events-none z-20"></div>
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`} style={{background: isHovered ? 'rgba(0,0,0,0.35)' : 'transparent', zIndex: 20}}>
        <div className="text-white text-center text-lg font-bold pointer-events-auto px-6 py-3 rounded-lg bg-black bg-opacity-40 shadow-lg animate-fade-in-up">
          {pmFunction.officialLink && pmFunction.officialLink !== '#' ? 'Visit Website' : 'Coming Soon!'}
        </div>
      </div>
    </div>
  );
};

export default FunctionCard; 