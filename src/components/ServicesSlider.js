import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

// Import the Lottie animations
import aiAnimation from '../lottie img/AI animation.json';
import creativeAnimation from '../lottie img/Creative 3D Visual Animation - Website Development.json';
import onlineDoctorAnimation from '../lottie img/Online Doctor.json';
import medicamentsAnimation from '../lottie img/medicaments.json';
import shoppingCartAnimation from '../lottie img/shopping cart (1).json';
import medicalAnimation from '../lottie img/Medical.json';
import doctorHealthAnimation from '../lottie img/Doctor and health symbols.json';
// import medicalKitAnimation from '../lottie img/medical kit.json';
import meetingAnimation from '../lottie img/Meeting.json';
import shoppingEcommerceAnimation from '../lottie img/shopping Ecommerce.json';
import shippingUSAnimation from '../lottie img/Shipping to United States.json';

const ServicesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      id: 1,
      type: 'lottie',
      title: "Smart AI Integration",
      description: "At PMI IT Solutions, we build custom AI systems tailored to your business needs across mobile applications, enterprise management systems, and healthcare solutions.\n\nOur AI modules handle:\n📋 Automated report generation\n🔄 Task and workflow management\n📈 Performance tracking\n💡 Intelligent recommendations\n\nThese smart features streamline operations, reduce manual effort, and empower your team to make faster, data-driven decisions.",
      animation: aiAnimation
    },
    {
      id: 2,
      type: 'lottie',
      title: "Health & Wellness Made Simple",
      description: "PMI Healthcare is your one-stop shop for all your healthcare needs.\n\nWe provide a seamless shopping experience with a variety of high-quality products and services:\n\n💚 Skincare, haircare, baby care, and wellness products\n⚕️ Medical devices and home healthcare essentials\n🧴 Tupperware, personal care, and children's products\n📦 Fast delivery across all GCC countries\n💝 Option to send gifts directly to loved ones\n🛡️ Secure payments, smart tracking, and bilingual support",
      animation: shoppingCartAnimation
    },
    {
      id: 3,
      type: 'lottie',
      title: "Smart Medical App Solutions",
      description: "At PMI IT Solutions, we design and develop powerful healthcare apps tailored to clinics, hospitals, and wellness centers.\n\nOur systems simplify scheduling, improve patient communication, and give professionals better access to medical insights.\n\nWe offer:\n📅 Appointment booking and calendar integration\n👤 Patient profile management and history tracking\n🔐 Secure access to medical reports and lab results\n💬 Doctor-patient communication and reminders\n📊 Custom dashboards for clinics and admins\n📈 Scalable systems for both small and large medical providers",
      animation: onlineDoctorAnimation
    },
    {
      id: 4,
      type: 'lottie',
      title: "Trusted by Doctors, Chosen for Patients",
      description: "At PMI Medical, we provide some of the highest-quality medical products in the region—carefully selected to meet the exact needs of healthcare professionals and add real value to patient care.\n\nWe focus on:\n⭐ Premium medical supplies and consumables\n🩺 Products trusted by doctors and clinics\n🛡️ Enhancing treatment outcomes and patient safety\n📦 Regional distribution with reliable availability\n📚 Ongoing support and product training\n✨ A commitment to quality, innovation, and care",
      animation: medicamentsAnimation
    },
    {
      id: 5,
      type: 'lottie',
      title: "Professional Web Development Services",
      description: "At PMI IT Solutions, we design and develop powerful, high-performance websites tailored to your business goals.\n\nOur web development services ensure that your online presence is not only visually stunning, but also functional, scalable, and optimized for results.\n\nWe offer:\n✨ Custom website design tailored to your brand\n📲 Responsive and mobile-friendly layouts\n🛍️ E-commerce website development\n⚙️ Integration with advanced platforms (e.g., Odoo, Laravel, Next.js)\n🎯 SEO-ready and performance-optimized websites\n🛠️ Ongoing support and maintenance services",
      animation: creativeAnimation
    },
    {
      id: 6,
      type: 'lottie',
      title: "Integrated Health Systems",
      description: "At PMI IT Solutions, we build intelligent healthcare management systems that streamline operations across clinics and hospitals—efficient, multilingual, and fully connected.\n\nWe offer:\n⚙️ Complete clinic & hospital management platforms\n🗣️ Multilingual interfaces for staff and patients\n🔧 Seamless integration between departments (reception, pharmacy, labs, etc.)\n📝 Appointment scheduling, medical records, billing & insurance\n🎛️ Real-time dashboards for administrators and doctors\n🚀 Scalable solutions tailored to small clinics or large medical centers",
      animation: medicalAnimation
    },
    {
      id: 7,
      type: 'lottie',
      title: "All-in-One Hospital Management System",
      description: "PMI IT Solutions offers a unified platform that connects all departments in your hospital or clinic—making healthcare operations smarter, faster, and more efficient.\n\nWe provide:\n🔗 One system for all departments: reception, pharmacy, lab, radiology, finance, and more\n💾 Centralized patient records accessible across the hospital\n🗣️ Multilingual interface for staff and patients\n⏰ Built-in appointment scheduling and medical history tracking\n📈 Real-time reporting and analytics for better decision-making\n🚀 Scalable for clinics, polyclinics, and large hospitals",
      animation: doctorHealthAnimation
    },
    {
      id: 8,
      type: 'lottie',
      title: "IT Consultancy & Infrastructure Management",
      description: "PMI IT Solutions provides expert computer consultancy and end-to-end management of IT infrastructure to ensure your business runs securely, efficiently, and with minimal downtime.\n\nWe offer:\n🎯 Strategic IT consulting tailored to your business goals\n🔧 Network design, setup, and optimization\n⚙️ Server and data center management\n🛠️ Hardware and software procurement & lifecycle support\n🛡️ Security audits, backup, and disaster recovery planning\n📊 Ongoing monitoring and technical support",
      animation: meetingAnimation
    },
    {
      id: 9,
      type: 'lottie',
      title: "E-commerce Solutions That Drive Sales",
      description: "At PMI IT Solutions, we build custom e-commerce platforms that help businesses grow online—fast, secure, and designed to convert.\n\nWe offer:\n🛍️ Fully customized online stores tailored to your brand\n📦 Seamless product management and inventory control\n💳 Secure payment gateways and checkout systems\n📱 Mobile-optimized and user-friendly interfaces\n🔗 Integration with shipping, invoicing, and CRM tools\n📈 Scalable solutions for B2C and B2B businesses",
      animation: shoppingEcommerceAnimation
    },
    {
      id: 10,
      type: 'lottie',
      title: "Logistics & Maritime Tech Solutions",
      description: "PMI IT Solutions delivers smart digital systems for the logistics and maritime sectors—helping companies streamline operations, improve tracking, and ensure regulatory compliance.\n\nWe offer:\n🚢 Fleet and cargo tracking with real-time data\n🏭 Warehouse and inventory management systems\n⚓ Port operations management and scheduling tools\n🌊 Integration with customs and shipping systems\n📋 Automated reporting and compliance modules\n📈 Scalable platforms for shipping lines, freight companies, and logistics providers",
      animation: shippingUSAnimation
    }
  ];

  // Auto-slide functionality - move to next slide every 11 seconds
  useEffect(() => {
    if (isPaused) return; // Don't auto-slide if paused
    
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 11000); // 11 seconds

    return () => clearInterval(interval);
  }, [slides.length, isPaused]);

  const nextSlide = () => {
    setIsPaused(true); // Pause auto-slide when user manually navigates
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    // Resume auto-slide after 3 seconds of inactivity
    setTimeout(() => setIsPaused(false), 3000);
  };

  const prevSlide = () => {
    setIsPaused(true); // Pause auto-slide when user manually navigates
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    // Resume auto-slide after 3 seconds of inactivity
    setTimeout(() => setIsPaused(false), 3000);
  };

  const goToSlide = (index) => {
    setIsPaused(true); // Pause auto-slide when user manually navigates
    setCurrentSlide(index);
    // Resume auto-slide after 3 seconds of inactivity
    setTimeout(() => setIsPaused(false), 3000);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="services-slider-container">
      <div className="multi-slide-section">
        {/* Slide Content */}
        <div className="slide-content">
          {currentSlideData.type === 'lottie' ? (
            <div className="side-by-side-lottie-section">
              <div className="lottie-text-content">
                <h3 className="lottie-title">{currentSlideData.title}</h3>
                <p className="lottie-description">{currentSlideData.description}</p>
              </div>
              <div className={`lottie-animation-content ${currentSlideData.id === 7 ? 'extra-large-animation' : currentSlideData.id === 5 || currentSlideData.id === 9 || currentSlideData.id === 8 ? 'larger-animation' : ''}`}>
                {/* PMI Logo with Silver Shadow - Above Images */}
                <div className="pmi-logo-overlay">
                  <img 
                    src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1751977454/PMI_Circile_Gray_wiu9mh.png" 
                    alt="PMI Logo" 
                    className="pmi-logo-image"
                  />
                </div>
                <Lottie animationData={currentSlideData.animation} loop={true} autoplay={true} className="lottie-animation" />
              </div>
            </div>
          ) : (
            // Placeholder Slides
            <div className="placeholder-slide">
              <div className="placeholder-icon">{currentSlideData.icon}</div>
              <h3 className="placeholder-title">{currentSlideData.title}</h3>
              <p className="placeholder-description">{currentSlideData.description}</p>
            </div>
          )}
        </div>

        {/* Navigation Arrows */}
        <button className="slide-nav-btn slide-nav-prev" onClick={prevSlide}>
          ‹
        </button>
        <button className="slide-nav-btn slide-nav-next" onClick={nextSlide}>
          ›
        </button>

        {/* Slide Indicators */}
        <div className="slide-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`slide-indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="slide-counter">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>
    </div>
  );
};

export default ServicesSlider; 