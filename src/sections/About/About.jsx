import React from 'react';
import { Link } from 'react-router-dom';
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
              title="TEDxGNI Video"
            />
          </div>

          {/* Floating stat cards */}

        </motion.div>

        {/* Right — Text content */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
        >

          <h2 className="about-title">
            About <span className="red-accent">TEDx</span>GNI
          </h2>
          <motion.div 
            className="about-divider"
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          />

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

          <Link
            to="/about"
            className="btn btn-outline about-btn"
          >
            Learn More About TEDx GNI <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
