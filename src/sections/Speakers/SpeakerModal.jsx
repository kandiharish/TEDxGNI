import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Play } from 'lucide-react';

const SpeakerModal = ({ speaker, onClose }) => {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: 'spring', damping: 25, stiffness: 300 }
    },
    exit: { opacity: 0, scale: 0.95, y: 20 }
  };

  return (
    <motion.div 
      className="modal-backdrop"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div 
        className="modal-content"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="modal-grid">
          <div className="modal-image-col">
            <img src={speaker.image} alt={speaker.name} className="modal-image" />
          </div>
          <div className="modal-info-col">
            <h2 className="modal-name">{speaker.name}</h2>
            <p className="modal-role">{speaker.role}</p>
            
            <div className="modal-topic-badge">
              Talk: "{speaker.topic}"
            </div>
            
            <p className="modal-bio">{speaker.bio}</p>
            
            <div className="modal-video-box">
              <div className="video-placeholder">
                <Play size={40} className="play-icon" />
                <p>{speaker.videoPlaceholder}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SpeakerModal;
