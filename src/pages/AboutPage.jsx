import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, Mail, Youtube, ArrowRight, Lightbulb, Users, Search, Award } from 'lucide-react';
import './AboutPage.css';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About TEDx' },
    { id: 'journey', label: 'Our Journey' },
    { id: 'theme', label: '2026 Theme' },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-badge">
          <Info size={14} /> About Us
        </div>
        <h1 className="about-title">About <span className="red-accent">TEDx</span>GNI</h1>
        <p className="about-subtitle">
          Independently organized TED event hosted by Guru Nanak Institutions, bringing together innovators, thinkers, and doers to share ideas worth spreading.
        </p>
        
        {/* Tabs */}
        <div className="about-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Tab Content Area */}
      <section className="about-content-area wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="tab-panel"
          >
            {activeTab === 'about' && <AboutSection />}
            {activeTab === 'journey' && <JourneySection />}
            {activeTab === 'theme' && <ThemeSection />}
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
};

/* ─── ABOUT TAB ──────────────────────────────────── */
const AboutSection = () => (
  <div className="tab-container">
    <div className="about-grid">
      <div className="about-text-col">
        <h2 className="section-heading">What is TEDx?</h2>
        <p>
          In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience.
        </p>
        <p>
          At our TEDxGNI event, TED Talks video and live speakers combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.
        </p>
      </div>
      <div className="about-video-col">
        <div className="video-wrapper">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/d0NHOpeczUU" 
            title="What is TEDx?" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>

    {/* Connect With Us Bottom Block */}
    <div className="connect-block">
      <div className="connect-info">
        <h2 className="section-heading">Connect With Us</h2>
        <p className="margin-bottom">Want to get involved with TEDxGNI? We're always looking for volunteers, partners, and speakers who share our passion for ideas worth spreading.</p>
        
        <div className="connect-cards-grid">
          <div className="connect-card">
            <h4>Become a Speaker</h4>
            <p>Have an idea worth sharing? Apply to speak at our next event.</p>
          </div>
          <div className="connect-card">
            <h4>Volunteer With Us</h4>
            <p>Join our dedicated team in organizing future TEDxGNI events.</p>
          </div>
          <div className="connect-card">
            <h4>Partner With Us</h4>
            <p>Support ideas worth spreading as a sponsor or partner.</p>
          </div>
        </div>
      </div>
      
      <div className="connect-form-side">
        <div className="contact-form-card">
          <div className="form-header">
            <Mail size={18} className="red-icon" /> <h3>Get In Touch</h3>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit" className="btn btn-primary full-width">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

/* ─── JOURNEY TAB ────────────────────────────────── */
const JourneySection = () => {
  const milestones = [
    { year: 2019, title: 'The Road Not Taken', desc: 'Our first major event focused on unconventional paths and celebrating the courage to explore untrodden ways.', align: 'left' },
    { year: 2023, title: 'Shadowed Future', desc: 'Examining the relationship between our present choices and the uncertainties that shape our collective tomorrow.', align: 'right' },
    { year: 2024, title: 'Uncovered Origins', desc: 'Exploring how every innovation and personal story is rooted in fundamental beginnings.', align: 'left' },
    { year: 2026, title: 'Redefining Success', desc: 'Reshaping our understanding of achievement and impact in a rapidly changing global landscape.', align: 'right' },
  ];

  return (
    <div className="tab-container">
      <h2 className="section-heading text-center margin-bottom-lg">Our Journey</h2>
      <div className="timeline">
        <div className="timeline-line"></div>
        {milestones.map((m, idx) => (
          <div key={idx} className={`timeline-item ${m.align}`}>
            <div className="timeline-content">
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
            </div>
            <div className="timeline-dot">{m.year}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ─── THEME TAB ──────────────────────────────────── */
const ThemeSection = () => (
  <div className="tab-container">
    <div className="theme-grid">
      <div className="theme-text">
        <h2 className="section-heading">Theme of TEDxGNI 2026</h2>
        <div className="theme-badge">Redefining Success</div>
        <div className="theme-desc">
          <p>
            Our upcoming event explores "Redefining Success" – examining how we can reshape our understanding of achievement in a rapidly changing world, looking beyond traditional metrics to truly profound impact.
          </p>
          <p>
            In a world where people strive for meaning, the biggest ideas don't come from conventional paths, but from those who break molds to create extraordinary value. The celebration of that courage and reshaping of norms is known as Redefining Success.
          </p>
          <p>
            Come explore how collaboration propels advancements in science, art, technology, social impact, and other fields via a day of thought-provoking presentations and interactive experiences.
          </p>
        </div>
      </div>
      <div className="theme-images">
        <div className="image-grid">
          <div className="theme-img" style={{ backgroundImage: "url('/theme image 1.avif')" }}></div>
          <div className="theme-img" style={{ backgroundImage: "url('/theme image 2.jpg')" }}></div>
          <div className="theme-img" style={{ backgroundImage: "url('/theme image 3.webp')" }}></div>
          <div className="theme-img" style={{ backgroundImage: "url('/theme image 4.avif')" }}></div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;
