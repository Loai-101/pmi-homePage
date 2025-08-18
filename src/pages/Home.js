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
  const [visibleCards, setVisibleCards] = useState([]);
  const [sectionsReady, setSectionsReady] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [selectedAdvisor, setSelectedAdvisor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSponsor, setSelectedSponsor] = useState(null);
  const [isSponsorModalOpen, setIsSponsorModalOpen] = useState(false);
  
  // Scroll animation states
  const [visibleSections, setVisibleSections] = useState({
    advisory: false,
    experts: false,
    partners: false,
    sponsors: false
  });
  
  // Refs for intersection observer
  const advisoryRef = useRef(null);
  const expertsRef = useRef(null);
  const partnersRef = useRef(null);
  const sponsorsRef = useRef(null);

  // Advisor data
  const advisors = [
    {
      id: 1,
      name: "Dr Mohammad Alfahad",
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1753897396/mohammed_alfahed_dkasvv.jpg",
      position: "Assistant Professor",
      department: "Department of Public Administration",
      institution: "College of Administrative Sciences - Kuwait University",
      bio: "Dr Mohammad Alfahad is an Assistant Professor at the Department of Public Administration in the College of Administrative Sciences - Kuwait University. He Holds a Master's degree in Public Administration from The University of West Florida, specializing in Human Resource Management, and a PhD degree in Public Policy from George Mason University, specializing in Culture and Policy. In addition to being active in teaching and research, Alfahad has served as the assistant Dean for student affairs in the College of Administrative Sciences and headed the Business Administration Consulting Unit at the Center of Excellence (the consulting arm of the College) that serves as a gateway for businesses and Government entities and individuals seeking expert advice and professional development in various business-related areas. Mohammad has also served as the Head of the National Permanent Committee for Testing and Selecting Candidates for leadership Position in Government. Dr Alfahad enjoys working on the ground to solve Management, Public Administration, and Policy issues facing Government and Businesses entities. Currently, Dr Mohammad Alfahad is involved in various consulting activities in Kuwait and abroad trying to facilitate funding issues through non-traditional financial institutions."
    },
    {
      id: 2,
      name: "Mr. Dheeraj Khatore",
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1754123077/Screenshot_2025-08-02_112224_pg9r4t.png",
      position: "Healthcare Quality Auditor & International Business Operations Expert",
      department: "Healthcare Management & EMS",
      institution: "Multiple Organizations - CEO Role",
      bio: "Mr. Dheeraj Khatore is a highly experienced professional with a diverse background in healthcare quality & ambulance auditing, emergency medical services (EMS), and entrepreneurship. As a Healthcare Quality Auditor, International Business Operations expert, and HEMS Paramedic, Mr. Dheeraj has accumulated over 1 decade of comprehensive work experience. As an entrepreneur, Dheeraj has ventured into various areas, including medical training, healthcare AI, digital health, quality accreditation, EMS consultations, and ambulance designs and operations in India and other countries. This entrepreneurial mindset showcases his ability to identify opportunities and drive innovation in the healthcare industry. Mr. Dheeraj holds a Master's degree in Health Care Management, specializing in Artificial Intelligence in Healthcare. He has also completed a Certificate Program in Digital Health from IIM Raipur, further enhancing his expertise in the intersection of healthcare and technology. Completed CXO Leadership program from Cornell University. Currently Mr. Dheeraj is in CEO's Role among the following organisations - Responsible for Global Operations, Business Expansion, and Investor Relations: American Accreditation Commission International - India & Africa, Emerge Medical Services UAE, Life One EMS - USA, India, EmergeSmart Health - UAE & India."
    },
    {
      id: 3,
      name: "Dr. Christian Bardon",
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1754123902/WhatsApp_Image_2025-08-02_at_11.38.09_179d7a38_uawcqh.jpg",
      position: "President & CEO",
      department: "Smart City Consultancy",
      institution: "VotreCity Monaco",
      bio: "Dr. Christian Bardon is a seasoned executive with over 20 years of experience at IBM France and Europe, later serving as Vice President at Gemplus and leading roles at Watchdata and MCTel. He founded VotreCity Monaco, a smart city consultancy supporting governments with advanced tech solutions, circular economy models, and cybersecurity. He has advised major global firms across Asia, Africa, and Europe, and has been a speaker at international smart city and tech events. Beyond business, he's been actively involved in sports leadership, including coaching Ghana's National Beach Soccer Team, and launching youth education programs in Africa. Dr. Christian Bardon holds engineering and business degrees from top French institutions and continues to contribute to global innovation and sustainable development."
    }
  ];

  // Sponsor data
  const sponsors = [
    {
      id: 1,
      name: "Podium Racing Middle East",
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1755521268/Screenshot_2025-08-18_154524_nc3xfp.png",
      description: "PMI is proud to support outstanding athletes in their journey to success. Recently, PMI sponsored the triathlete Mohammed Abdullatif, who achieved an impressive finishing time of 9:11 at the Full Ironman Germany. This remarkable performance reflects dedication, endurance, and world-class athletic spirit.",
      achievements: "Through this sponsorship, PMI celebrates not only a record-breaking achievement but also its commitment to empowering athletes to reach their full potential. The company takes pride in being part of such a historic milestone and continues to encourage excellence in sports across the region.",
      website: "https://l.instagram.com/?u=https%3A%2F%2Fmohamedhamada.com%2F%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAaeK_ZnP68ATE1p-60F2mziLUcsX5C83XYFBGJM6mTZWrkogcpFkmX1vKgf-SQ_aem_bHOMqkIDUS1bCv9Gs4PCuA&e=AT3gGnyQA1iTlaXIMIGQJOs8T4REV_HJ4JoWiqx8JjPdBv3O2TV4EUv_L0whDTAMOxSGpehRt9vKkG_UoiTBdUkugQahSf-eYGhtlFSmx2DYFNNZbc6wSw"
    },
    {
      id: 2,
      name: "A1 Stable",
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1754242068/WhatsApp_Image_2025-08-03_at_20.15.46_e842bd3a_vxgaxy.jpg",
      description: "PMI is deeply committed to supporting equestrian sports, with a special focus on endurance horses. As part of this vision, PMI has partnered with A1 Stable, providing both technical and professional support to enhance the stable's operations and development. The company's dedication extends beyond technology, reaching into the welfare of the horses, the athletic team, and the overall sporting and health aspects of the stable.",
      achievements: "Through this partnership, PMI proudly supports A1 Stable's first team, contributing to its growth and performance. By combining technical innovation with equestrian excellence, PMI aspires to see the team reach podiums and achieve remarkable milestones in endurance racing.",
      website: "https://www.a1-stable.com/"
    }
  ];

  // Modal functions
  const openModal = (advisor) => {
    setSelectedAdvisor(advisor);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAdvisor(null);
  };

  // Sponsor modal functions
  const openSponsorModal = (sponsor) => {
    console.log('Opening sponsor modal for:', sponsor.name);
    console.log('Sponsor data:', sponsor);
    setSelectedSponsor(sponsor);
    setIsSponsorModalOpen(true);
    console.log('Modal state set to open');
  };

  const closeSponsorModal = () => {
    console.log('Closing sponsor modal');
    setIsSponsorModalOpen(false);
    setSelectedSponsor(null);
  };

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
      setVisibleCards(functions.map((_, i) => i));
      setSectionsReady(true);
    }
    
    setIsInitialized(true);
  }, []);

  // Animation effect - only runs if shouldAnimate is true
  useEffect(() => {
    if (!shouldAnimate || !isInitialized) return;
    
    // Start the animation after a short delay
    const startDelay = setTimeout(() => {
      // Enable sections to be shown on scroll
      setSectionsReady(true);
    }, 600); // Reduced initial delay for mobile
    
    return () => clearTimeout(startDelay);
  }, [shouldAnimate, isInitialized]);

  // Cards animation effect - show immediately
  useEffect(() => {
    if (!isInitialized) return;
    // Show all cards immediately
    setVisibleCards([0, 1, 2, 3]);
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
    const sponsorsElement = sponsorsRef.current;

    if (advisoryElement) observer.observe(advisoryElement);
    if (expertsElement) observer.observe(expertsElement);
    if (partnersElement) observer.observe(partnersElement);
    if (sponsorsElement) observer.observe(sponsorsElement);

    return () => {
      if (advisoryElement) observer.unobserve(advisoryElement);
      if (expertsElement) observer.unobserve(expertsElement);
      if (partnersElement) observer.unobserve(partnersElement);
      if (sponsorsElement) observer.unobserve(sponsorsElement);
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

        {/* Advisory Board Section */}
        <section 
          ref={advisoryRef}
          data-section="advisory"
          className={`advisory-reports-section scroll-section ${visibleSections.advisory ? 'section-visible' : ''}`}
        >
          <div className="section-header">
            <h2 className="section-title">Advisory Board</h2>
            <div className="title-underline"></div>
            <p className="section-hint">Tap on an advisor to see more details!</p>
          </div>
          <div className="advisory-grid">
            {advisors.map((advisor, index) => (
              <div 
                key={advisor.id}
                className={`advisor-card hover-info-card scroll-card ${visibleSections.advisory ? 'card-visible' : ''}`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => openModal(advisor)}
              >
                <div className="advisor-image">
                  <img 
                    src={advisor.image}
                    alt={advisor.name}
                    className="advisor-img"
                  />
                </div>
                <div className="advisor-info">
                  <div className="advisor-name" style={{ 
                    textShadow: 'none',
                    fontWeight: '700',
                    fontSize: '1.1rem',
                    textAlign: 'center'
                  }}>{advisor.name}</div>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Experts Section - Hidden until further notice */}
        {false && (
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
        )}

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

        {/* Sponsors Section */}
        <section 
          ref={sponsorsRef}
          data-section="sponsors"
          className={`sponsors-section scroll-section ${visibleSections.sponsors ? 'section-visible' : ''}`}
        >
          <div className="section-header">
            <h2 className="section-title">Our Sponsors</h2>
            <div className="title-underline"></div>
            <p className="section-hint">Tap on a sponsor to see more details!</p>
          </div>
          <div className="sponsors-grid">
            {sponsors.map((sponsor, index) => (
              <div 
                key={sponsor.id}
                className={`sponsor-card technical-partner-card scroll-card ${visibleSections.sponsors ? 'card-visible' : ''}`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => openSponsorModal(sponsor)}
              >
                <div className="partner-logo-full">
                  <img 
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="partner-img-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Advisor Modal */}
      {isModalOpen && selectedAdvisor && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <div className="modal-header">
              <img 
                src={selectedAdvisor.image}
                alt={selectedAdvisor.name}
                className="modal-advisor-img"
              />
              <div className="modal-advisor-info">
                <h2 className="modal-advisor-name">{selectedAdvisor.name}</h2>
                <div className="modal-advisor-details">
                  <p className="modal-advisor-position">{selectedAdvisor.position}</p>
                  <p className="modal-advisor-department">{selectedAdvisor.department}</p>
                  <p className="modal-advisor-institution">{selectedAdvisor.institution}</p>
                </div>
              </div>
            </div>
            <div className="modal-body">
              <div className="modal-bio-section">
                <h3 className="modal-bio-title">Biography</h3>
                <p className="modal-advisor-bio">{selectedAdvisor.bio}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sponsor Modal */}
      {isSponsorModalOpen && selectedSponsor && (
        <div className="sponsor-modal-overlay" onClick={closeSponsorModal} style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999
        }}>
          <div className="sponsor-modal-content" onClick={(e) => e.stopPropagation()} style={{
            background: document.documentElement.classList.contains('dark-mode') ? '#1a1a1a' : 'white',
            borderRadius: '12px',
            padding: '2rem',
            maxWidth: '600px',
            width: '90%',
            maxHeight: '80vh',
            overflow: 'auto',
            position: 'relative',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
          }}>
            <button 
              onClick={closeSponsorModal}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: 'none',
                fontSize: '2rem',
                cursor: 'pointer',
                color: '#666',
                zIndex: 1
              }}
            >
              ×
            </button>
            
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', gap: '1rem' }}>
              <img 
                src={selectedSponsor.image}
                alt={selectedSponsor.name}
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
              />
              <div>
                <h2 style={{ 
                  margin: 0, 
                  color: '#000000 !important', 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold', 
                  textShadow: 'none !important',
                  WebkitTextFillColor: '#000000',
                  WebkitTextStroke: 'none'
                }}>{selectedSponsor.name}</h2>
              </div>
            </div>
            
            <div>
              <h3 style={{ color: '#000000', marginBottom: '1rem', fontSize: '1.2rem', fontWeight: 'bold', textShadow: 'none' }}>About</h3>
              <p style={{ color: '#000000', lineHeight: '1.6', marginBottom: '2rem', fontSize: '1rem', textShadow: 'none' }}>{selectedSponsor.description}</p>
              
              <h3 style={{ color: '#000000', marginBottom: '1rem', fontSize: '1.2rem', fontWeight: 'bold', textShadow: 'none' }}>Achievements</h3>
              <p style={{ color: '#000000', lineHeight: '1.6', marginBottom: '2rem', fontSize: '1rem', textShadow: 'none' }}>{selectedSponsor.achievements}</p>
              
              {selectedSponsor.website && (
                <div>
                  <h3 style={{ color: '#000000', marginBottom: '1rem', fontSize: '1.2rem', fontWeight: 'bold', textShadow: 'none' }}>Website</h3>
                  <a 
                    href={selectedSponsor.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      color: '#0066cc', 
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: '1rem',
                      textShadow: 'none'
                    }}
                  >
                    Visit Website →
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Home; 