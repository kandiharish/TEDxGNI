import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import './About.css';

const features = [
  'Inspiring speakers from diverse fields',
  'Interactive exhibitions and demonstrations',
  'Networking opportunities with innovators',
  'Live performances and artistic showcases',
];

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="wrapper about-wrapper">

        {/* Left — Video or image */}
        <motion.div
          className="about-media"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="video-frame">
            {/* Replace src with real YouTube embed when available */}
            <video
              src="/tedxgni video.mp4"
              autoPlay
              loop
              muted
              playsInline
              controls
              title="TEDxGNI Video"
            />
          </div>

          {/* Floating stat cards */}
          <div className="stat-card stat-card--top">
            <span className="stat-number">25+</span>
            <span className="stat-label">Speakers sharing<br />innovative ideas</span>
          </div>
          <div className="stat-card stat-card--bottom">
            <span className="stat-number">200+</span>
            <span className="stat-label">Attendees expected<br />for the 2026 event</span>
          </div>
        </motion.div>

        {/* Right — Text content */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
        >
          <span className="about-badge">About Us</span>
          <h2 className="about-title">
            About <span className="red-accent">TEDx</span>GNI
          </h2>
          <div className="about-divider"></div>

          <p className="about-desc">
            TEDxGNI is an independently organized TED event that brings together
            innovators, thinkers, and doers from various fields to share ideas
            worth spreading. In the spirit of TED's mission, our goal is to spark
            deep discussions and connections in our community.
          </p>
          <p className="about-desc">
            Organized by the students of Guru Nanak Institutions, TEDxGNI showcases
            innovative ideas and inspiring stories that challenge conventional
            thinking and spark meaningful conversations.
          </p>

          <ul className="feature-list">
            {features.map((f, i) => (
              <li key={i} className="feature-item">
                <CheckCircle size={18} className="feature-icon" />
                {f}
              </li>
            ))}
          </ul>

          <a
            href="https://www.ted.com/tedx"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline about-btn"
          >
            Learn More About TEDx GNI <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
