import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/pages/Team.css';

/**
 * Team Page Component
 * 
 * Features:
 * - Team member showcase with profile cards
 * - Responsive grid layout for team members
 * - PMI branding with logo integration
 * - Placeholder content for team profiles
 * 
 * Structure:
 * - Header with PMI logo and title
 * - Team description section
 * - Team member cards grid (currently 3 placeholder members)
 * - Each card includes avatar, name, role, and description
 * 
 * @returns {JSX.Element} Team page with member profile cards
 */
function Team() {
  return (
    <div className="team-page">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="team-header">
          <div className="team-title">
            <img 
              src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1751977454/PMI_Circile_Gray_wiu9mh.png" 
              alt="PMI Logo" 
              className="team-logo"
            />
            <h1 className="team-heading">
              Our Team
            </h1>
          </div>
          <p className="team-description">
            Meet the dedicated professionals behind PMI's success
          </p>
        </div>

        <div className="team-grid">
          {/* Team member cards will be added here */}
          <div className="team-member-card">
            <div className="w-32 h-32 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-600 text-4xl font-bold">TM</span>
            </div>
            <h3>Team Member 1</h3>
            <p className="member-role">Position/Role</p>
            <p>Brief description of team member 1 will be added here.</p>
          </div>
          
          <div className="team-member-card">
            <div className="w-32 h-32 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-600 text-4xl font-bold">TM</span>
            </div>
            <h3>Team Member 2</h3>
            <p className="member-role">Position/Role</p>
            <p>Brief description of team member 2 will be added here.</p>
          </div>
          
          <div className="team-member-card">
            <div className="w-32 h-32 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-600 text-4xl font-bold">TM</span>
            </div>
            <h3>Team Member 3</h3>
            <p className="member-role">Position/Role</p>
            <p>Brief description of team member 3 will be added here.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Team; 