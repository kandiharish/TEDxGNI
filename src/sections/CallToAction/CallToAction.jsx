import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="wrapper">
        <motion.div 
          className="cta-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="cta-content">
            <h2 className="cta-title">Ready to Redefine <span className="red-accent">Success</span>?</h2>
            <p className="cta-desc">
              Don't miss out on the most transformative ideas of 2026. Join us at Guru Nanak Institutions for a day of inspiration, networking, and boundary-breaking conversations.
            </p>
            
            <div className="cta-btn-group">
              <a href="https://forms.fillout.com/t/vwNtnMQfEcus" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-cta">
                Register Now <ArrowRight size={20} className="icon-right" />
              </a>
              <a 
                href="https://www.ted.com/tedx" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline btn-cta"
              >
                Learn More <Globe size={20} className="icon-right" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
