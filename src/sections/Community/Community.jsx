import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight } from 'lucide-react';
import './Community.css';

const Community = () => {
  return (
    <section className="community-section" id="community">
      <div className="wrapper community-wrapper">
        <div className="community-header">
          <h2 className="community-title">
            Join Our <span className="red-accent">Community</span>
          </h2>
          <p className="community-subtitle">
            Connect with us on social media to stay updated with the latest news, speaker announcements, and join the conversation.
          </p>
        </div>

        <div className="community-card">
          <div className="community-social-buttons">
            <a 
              href="https://www.instagram.com/tedxgni/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary social-btn instagram-btn"
            >
              Follow on Instagram
            </a>
            <a 
              href="https://www.linkedin.com/groups/18951001/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline social-btn linkedin-btn"
            >
              Join LinkedIn Group
            </a>
          </div>

          <div className="action-links">
            <Link to="/past-seasons" className="action-tag">Previous Events</Link>
            <button className="action-tag" onClick={() => window.location.href='mailto:tedxgni@gniindia.org'}>Speaker Applications</button>
            <button className="action-tag" onClick={() => window.location.href='mailto:tedxgni@gniindia.org'}>Volunteer</button>
            <a href="/SPONSORSHIP 1.pdf" target="_blank" rel="noopener noreferrer" className="action-tag">Sponsorship</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
