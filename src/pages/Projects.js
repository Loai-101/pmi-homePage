import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FunctionCard from '../components/FunctionCard';
import { functions } from '../data/functions';
import '../styles/pages/Projects.css';

/**
 * Projects Page Component
 * 
 * Features:
 * - PMI Functions detailed view
 * - Responsive layout with animated cards
 * - Integration with FunctionCard component
 * - Clean project showcase design
 * 
 * Structure:
 * - Header with PMI logo and title
 * - Function Description section
 * - Detailed function cards using FunctionCard component
 * - Each function displayed in full detail view
 * 
 * @returns {JSX.Element} Projects page with detailed function descriptions
 */
function Projects() {
  return (
    <div className="projects-page">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="projects-header">
          <div className="projects-title">
            <img 
              src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1751977454/PMI_Circile_Gray_wiu9mh.png" 
              alt="PMI Logo" 
              className="projects-logo"
            />
            <h1 className="projects-heading">
              Our Projects
            </h1>
          </div>
          <p className="projects-description">
            Explore our portfolio of successful projects and achievements
          </p>
        </div>

        {/* Function Description Section */}
        <section className="function-description-section">
          <div className="function-description-header">
            <h2 className="function-description-heading">
              Function Description
            </h2>
          </div>
          <div className="function-description-grid">
            {functions.map((pmFunction) => (
              <div key={`detail-${pmFunction.id}`} className="function-description-card">
                <FunctionCard 
                  function={pmFunction} 
                  isDetailView={true}
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Projects; 