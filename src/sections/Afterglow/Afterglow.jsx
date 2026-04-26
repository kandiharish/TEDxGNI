import React from 'react';
import { motion } from 'framer-motion';
import './Afterglow.css';

const Afterglow = () => {
  return (
    <section className="afterglow-section" id="afterglow">
      <div className="afterglow-container padding-wrapper">
        <div className="afterglow-content">
          <motion.div 
            className="afterglow-text"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="afterglow-tagline">The Post-Event Experience</h3>
            <h2 className="section-title">The <span className="red-accent">Afterglow Band.</span></h2>
            <p className="afterglow-statement">
              The Stage is Set for the <span className="highlight-text">Rhythm of Ideas.</span>
            </p>
            <p className="afterglow-description">
              Elevate your TEDx experience with an extraordinary live performance. Featuring a high-energy <strong>Live Band</strong> and a mesmerizing <strong>Violinist</strong>, the Afterglow is where intellectual sparks meet soulful melodies.
            </p>
            <motion.a 
              href="https://forms.gle/SfaDTV841iGCfQPo9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="afterglow-cta-btn"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(230, 43, 30, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              Get Your Band Pass Now
            </motion.a>
          </motion.div>

          <div className="afterglow-visual-container">
            <motion.div 
              className="afterglow-img-wrapper b-img-main"
              initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            >
              <img src="/live band.jpg.jpeg" alt="Live Band" className="afterglow-img" />
              <div className="img-overlay-content">
                <span className="live-badge">LIVE</span>
                <h4>Main Stage Band</h4>
              </div>
            </motion.div>

            <motion.div 
              className="afterglow-img-wrapper v-img-sub"
              initial={{ opacity: 0, x: 100, y: 50, rotate: 5 }}
              whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, type: "spring" }}
            >
              <img src="/violinist.jpg.jpeg" alt="Violinist" className="afterglow-img" />
              <div className="img-overlay-content">
                <h4>Soulful Strings</h4>
              </div>
            </motion.div>
            
            <div className="floating-elements">
              <motion.div className="float-circle c1" animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} />
              <motion.div className="float-circle c2" animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Afterglow;
