import React from 'react';
import { motion } from 'framer-motion';
import { Download, Users } from 'lucide-react';
import './Sponsors.css';

const Sponsors = () => {
  const sponsorsList = [
    {
      year: '2019',
      image: '/2019 sponsor.png',
      alt: 'CtrlS Sponsor 2019'
    },
    {
      year: '2023',
      image: '/2023 sponsor.png',
      alt: 'Isthara Sponsor 2023'
    },
    {
      year: '2024',
      image: '/2024 sponsor.png',
      alt: 'Your Tribe Sponsor 2024'
    }
  ];

  return (
    <section className="sponsors-section" id="sponsors">
      <div className="sponsors-wrapper wrapper">
        
        {/* Section Header */}
        <motion.div 
          className="sponsors-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="sponsors-brand">
            <span className="red-accent">TEDx</span>GNI
          </h2>
          <h3 className="sponsors-title">PREVIOUS SPONSORS</h3>
        </motion.div>

        {/* Sponsors Infinite Marquee Wave */}
        <div className="sponsors-marquee-container">
          <motion.div 
            className="sponsors-marquee-track"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          >
            {/* We duplicate the list to ensure a seamless infinite loop */}
            {[...sponsorsList, ...sponsorsList, ...sponsorsList].map((sponsor, idx) => (
              <div key={idx} className="sponsor-card-container">
                <div className="sponsor-card">
                  <img src={sponsor.image} alt={sponsor.alt} className="sponsor-logo" />
                </div>
                <p className="sponsor-label">SPONSOR-{sponsor.year}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Minimalist Pill Brochures */}
        <motion.div 
          className="brochures-pill-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a href="#brochure-attendee" className="btn btn-primary pill-btn">
            <Users size={16} /> Attendee Brochure
          </a>
          <a href="#brochure-sponsor" className="btn btn-outline pill-btn brochure-btn-sponsor">
            <Download size={16} /> Sponsorship Deck
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Sponsors;
