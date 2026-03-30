import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer-grid">
          {/* Brand & Socials */}
          <div className="footer-col brand-col">
            <h2 className="footer-logo">
              <span className="ted">TED</span><span className="x">x</span><span className="gni">GNI</span>
            </h2>
            <p className="footer-desc">
              This independent TEDx event is operated under license from TED.
            </p>
            <div className="social-links">
              <a href="https://www.instagram.com/tedxgni/?hl=en" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram"><Instagram size={24} /></a>
              <a href="https://www.linkedin.com/groups/18951001/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn"><Linkedin size={24} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/venue">Venue</Link></li>
              <li><Link to="/past-seasons">Past Seasons</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-col">
            <h3 className="footer-heading">STAY UPDATED</h3>
            <p className="footer-text-sm">Subscribe for event updates & exclusive content.</p>
            <form className="footer-subscribe-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email Address" required />
              <button type="submit">Stay updated</button>
            </form>
          </div>

          {/* Contact */}
          <div className="footer-col contact-col">
            <h3 className="footer-heading">Contact</h3>
            <p className="contact-detail">For any queries, please contact:</p>
            <p className="contact-detail">Krithi Bhaskara - 78160 72677</p>
            <p className="contact-detail">Email: tedxgni@gniindia.org</p>
            <p className="contact-address">
              Guru Nanak Institutions<br />
              Khanapur Village, Ibrahimpatnam<br />
              Ranga Reddy district, Telangana 501506, India
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 GNIMUN. All rights reserved. Developed by Harish kandi</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
