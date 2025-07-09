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
      <div className={`sparkling-bg rounded-xl shadow-lg p-8 theme-transition animate-fade-in-up border border-gray-300 dark:border-gray-600 ${themeStyles.cardClass} ${themeStyles.glowClass}`}>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
          <div className="flex-shrink-0">
            <div className={`w-48 h-48 rounded-xl overflow-hidden bg-white dark:bg-gray-800 p-6 shadow-md ${!imageLoaded ? 'image-loading' : ''} ${themeStyles.shimmerClass}`}>
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
            <h3 className={`text-3xl font-black mb-4 tracking-wide uppercase ${themeStyles.nameClass}`}>
              {pmFunction.name}
            </h3>
            <p className="leading-relaxed text-lg">
              {pmFunction.description}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative sparkling-bg rounded-xl shadow-lg overflow-hidden cursor-pointer card-hover theme-transition animate-fade-in-up border border-gray-300 dark:border-gray-600 function-card-container ${themeStyles.cardClass} ${themeStyles.glowClass}`}
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
      <div className="p-6 relative z-10 h-full flex flex-col">
        <div className="flex flex-col items-center text-center flex-1">
          <div className="mb-4 flex-shrink-0">
            <div className={`w-40 h-40 rounded-xl overflow-hidden bg-white dark:bg-gray-800 p-4 shadow-md ${!imageLoaded ? 'image-loading' : ''} ${themeStyles.shimmerClass}`}>
              <img
                src={imageError ? 'https://via.placeholder.com/160x160/1e40af/ffffff?text=PMI' : pmFunction.logo}
                alt={`${pmFunction.shortName} logo`}
                className="w-full h-full object-contain"
                onLoad={handleImageLoad}
                onError={handleImageError}
              />
            </div>
          </div>
          
          <div className="transition-all duration-300 flex-1 flex items-center justify-center px-2">
            <h3 className={`text-xl font-black tracking-wide uppercase ${themeStyles.nameClass} function-card-title`}>
              {pmFunction.name}
            </h3>
          </div>
          
          <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <div className="text-white text-center p-4">
              <p className="text-sm font-medium">Click to learn more</p>
              <p className="text-xs opacity-90">Opens in new tab</p>
            </div>
          </div>
        </div>
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