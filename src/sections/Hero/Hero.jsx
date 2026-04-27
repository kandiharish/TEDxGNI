import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import './Hero.css';

/* ─── Main Hero ─────────────────────────────────── */
const Hero = ({ onTicketsClick }) => {
  // 3D Tilt Effect variables
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-400, 400], [8, -8]);
  const rotateY = useTransform(x, [-400, 400], [-8, 8]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const scrollToSpeakers = (e) => {
    e.preventDefault();
    const speakersSection = document.getElementById('current-speakers');
    if (speakersSection) {
      speakersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="hero-section"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Stage glow backdrop */}
      <div className="stage-glow" />

      {/* ── Centered text stage ────────────────────── */}
      <div className="hero-content wrapper" style={{ perspective: 1000 }}>
        <motion.div
          className="hero-text-container"
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
            className="clarity-reveal-wrapper"
          >
            <div className="clarity-reveal active">
              <span className="redefine-text">Redefining</span> <span className="redefine-highlight">Success</span>
            </div>
          </motion.div>

          <motion.div 
            className="cta-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div 
              className="urgency-banner"
              animate={{ 
                scale: [1, 1.02, 1],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="pulse-dot"></span>
              Last <span className="highlight-number">10</span> tickets left! Grab them soon.
            </motion.div>

            {/* CTA Buttons */}
            <div className="hero-cta-group hero-cta-spaced">
              <a 
                href="https://forms.fillout.com/t/vwNtnMQfEcus"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-cta-hero register-pulse"
              >
                Register Now
              </a>
              <a
                href="#current-speakers"
                onClick={scrollToSpeakers}
                className="btn btn-outline btn-cta-hero speakers-btn"
              >
                Meet the 2026 Speakers
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

