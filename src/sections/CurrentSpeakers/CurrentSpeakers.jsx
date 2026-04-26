import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CurrentSpeakers.css';

const speakers2026 = [
  {
    id: 1,
    name: "Shivaranjani",
    title: "To Be Revealed",
    image: "/Shivaranjani.jpg copy.jpeg",
    fullImage: "/shivaranjani full photo.jpeg",
    scale: 1.15 // Slight zoom for Shivaranjani, less than Harshith
  },
  {
    id: 2,
    name: "Harshith Sai",
    title: "To Be Revealed",
    image: "/harshith sai.jpeg",
    fullImage: "/harshith full photo.jpeg",
    scale: 1.1 // Zooms in slightly
  },
  {
    id: 3,
    name: "Athvik",
    title: "To Be Revealed",
    image: "/Athvik.webp",
    fullImage: "/Advik full photo.jpeg"
  },
  {
    id: 4,
    name: "Josna",
    title: "To Be Revealed",
    image: "/Josna.png",
    fullImage: "/Josna Full photo.jpeg"
  },
  {
    id: 5,
    name: "Dinesh Kumar Murugesan",
    title: "To Be Revealed",
    image: "/dinesh kumar murugeshan.png",
    linkedin: "https://www.linkedin.com/in/dineshkumarm/?skipRedirect=true"
  },
  {
    id: 6,
    name: "Sana Afreen",
    title: "To Be Revealed",
    image: "/sana afreen small photo.png",
    fullImage: "/sana afreen full photo.jpeg",
    scale: 0.9
  }
];

const CurrentSpeakers = ({ onTicketsClick }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="current-speakers" id="current-speakers">
      <div className="current-speakers-content padding-wrapper">
        <motion.div 
          className="current-speakers-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            The Voices of <span className="red-accent">2026.</span>
          </h2>
          <p className="section-subtitle">
            Prepare to be inspired. Meet the brilliant minds taking the stage for "Redefining Success". 
            These are the ideas that will shape our future.
          </p>
        </motion.div>

        <div className="marquee-container">
          <div className="marquee-track">
            {[...speakers2026, ...speakers2026].map((speaker, index) => (
              <motion.div 
                key={`${speaker.id}-${index}`} 
                className="current-speaker-card"
                whileHover={{ y: -10 }}
              >
                <div className="speaker-image-container">
                  <div className="speaker-image-overlay"></div>
                  <img 
                    src={speaker.image} 
                    alt={speaker.name} 
                    className="speaker-img"
                    style={{
                      '--base-scale': speaker.scale || 1,
                      '--hover-scale': (speaker.scale || 1) + 0.05
                    }}
                    loading="lazy"
                  />
                </div>
                <div className="speaker-info">
                  <button 
                    className="know-more-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (speaker.linkedin) {
                        window.open(speaker.linkedin, "_blank", "noopener,noreferrer");
                      } else {
                        setSelectedImage(speaker.fullImage);
                      }
                    }}
                  >
                    Know about speaker
                  </button>
                  {/* <h3 className="speaker-name" style={{ margin: "0.5rem 0 0", color: "#fff", zIndex: 3, position: "relative" }}>{speaker.name}</h3> */}
                  <div className="speaker-glow"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="speakers-cta-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <button className="premium-cta-btn pulse-glow" onClick={onTicketsClick}>
            Secure Your Seat Now
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="speaker-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="speaker-modal-content"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="close-modal-btn"
                onClick={() => setSelectedImage(null)}
              >
                &times;
              </button>
              <img src={selectedImage} alt="Full Speaker Profile" className="speaker-modal-img" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CurrentSpeakers;
