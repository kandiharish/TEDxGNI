import React from 'react';
import { Link } from 'react-router-dom';
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

          {/* CTA Buttons */}
          <motion.div
            className="hero-cta-group hero-cta-spaced"
            style={{ marginTop: '4rem' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <button 
              onClick={onTicketsClick} 
              className="btn btn-primary btn-cta-hero"
            >
              Register Now
            </button>
            <Link
              to="/about"
              className="btn btn-outline btn-cta-hero"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

