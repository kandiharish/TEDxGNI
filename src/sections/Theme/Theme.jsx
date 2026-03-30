import React from 'react';
import { motion } from 'framer-motion';
import './Theme.css';

const Theme = () => {
  return (
    <section className="theme-section">
      <div className="theme-wrapper">

        {/* Header */}
        <motion.div
          className="theme-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <p className="theme-eyebrow">TEDxGNI 2026</p>
          <h2 className="theme-title">
            <span className="red-accent">Redefine.</span> The Theme.
          </h2>
          <p className="theme-desc">
            "Success is what you Redefine." — A theme built around breaking
            conventional formulas and discovering what success truly means for you.
          </p>
        </motion.div>

        {/* Asymmetric 4-Image Collage */}
        <div className="theme-collage">

          {/* Large Left Feature */}
          <motion.div
            className="collage-cell cell-large"
            initial={{ opacity: 0, scale: 0.93 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <img src="/theme image 1.avif" alt="TEDxGNI 2026 Theme" className="collage-img" />
            <div className="collage-overlay">
              <span>Ideas Worth Redefining</span>
            </div>
          </motion.div>

          {/* Right Column - 3 stacked */}
          <div className="collage-right-col">
            <motion.div
              className="collage-cell cell-medium"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <img src="/theme image 2.jpg" alt="TEDxGNI 2026 Theme" className="collage-img" />
              <div className="collage-overlay">
                <span>Break the Formula</span>
              </div>
            </motion.div>

            <motion.div
              className="collage-cell cell-medium"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <img src="/theme image 3.webp" alt="TEDxGNI 2026 Theme" className="collage-img" />
              <div className="collage-overlay">
                <span>Discover Your Path</span>
              </div>
            </motion.div>

            <motion.div
              className="collage-cell cell-medium"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <img src="/theme image 4.avif" alt="TEDxGNI 2026 Theme" className="collage-img" />
              <div className="collage-overlay">
                <span>Own Your Success</span>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Theme;
