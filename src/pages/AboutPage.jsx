import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, Mail, Youtube, ArrowRight, Lightbulb, Users, Search, Award } from 'lucide-react';
import './AboutPage.css';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About TEDx' },
    { id: 'mission', label: 'Our Mission' },
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
            {activeTab === 'mission' && <MissionSection />}
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

/* ─── MISSION TAB ────────────────────────────────── */
const MissionSection = () => (
  <div className="tab-container">
    <div className="mission-grid">
      <div className="mission-left">
        <h2 className="section-heading">Our Mission</h2>
        <p className="margin-bottom">
          Our mission is to discover and help spread ideas that spark imagination, embrace possibility and catalyze impact. By bringing together people who are curious and engaged, we aim to inspire conversations, build connections, and trigger action for a better future.
        </p>
        
        <div className="features-grid">
          <div className="feature-item">
            <div className="icon-box"><Lightbulb size={20} /></div>
            <div>
              <h4>Ideas Worth Spreading</h4>
              <p>We are committed to finding and sharing ideas that can change perspectives.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="icon-box"><Users size={20} /></div>
            <div>
              <h4>Community Connection</h4>
              <p>We believe in the power of bringing people together to foster understanding.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="icon-box"><Search size={20} /></div>
            <div>
              <h4>Diversity of Thought</h4>
              <p>We celebrate diverse perspectives and believe the best ideas emerge from variety.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="icon-box"><Award size={20} /></div>
            <div>
              <h4>Excellence in Experience</h4>
              <p>We strive to create memorable, high-quality events that inspire our audience.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mission-right">
        <div className="impact-card">
          <div className="impact-glow"></div>
          <h3 className="red-accent">Our Impact</h3>
          <ul className="impact-list">
            <li><span className="arrow">→</span> 500+ attendees in past events</li>
            <li><span className="arrow">→</span> 25+ speakers who have shared ideas</li>
            <li><span className="arrow">→</span> 3,000+ online viewers of our talks</li>
            <li><span className="arrow">→</span> 50+ student volunteers engaged</li>
            <li><span className="arrow">→</span> 15+ local partnerships formed</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

/* ─── JOURNEY TAB ────────────────────────────────── */
const JourneySection = () => {
  const milestones = [
    { year: 2020, title: 'TED introduces TEDx', desc: 'TED launches the TEDx program to enable independent organizers to create TED-like events in their communities.', align: 'left' },
    { year: 2022, title: 'The Beginning', desc: 'Students at GNI establish the TEDxGNI license and begin planning the inaugural event.', align: 'right' },
    { year: 2025, title: 'First TEDxGNI Event', desc: 'The inaugural TEDxGNI event brings together speakers from diverse fields to share ideas worth spreading.', align: 'left' },
    { year: 2026, title: 'Program Expansion', desc: 'Growing the community with more events, larger audiences, and broader intellectual horizons.', align: 'right' },
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
          <button className="btn btn-primary margin-top">Apply to Speak <ArrowRight size={18} style={{marginLeft: 8}} /></button>
        </div>
      </div>
      <div className="theme-images">
        <div className="image-grid">
          <div className="theme-img bg-img-1"></div>
          <div className="theme-img bg-img-2"></div>
          <div className="theme-img bg-img-3"></div>
          <div className="theme-img bg-img-4"></div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;
