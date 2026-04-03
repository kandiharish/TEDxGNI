import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Ticket, Instagram, Linkedin } from 'lucide-react';
import './TicketsModal.css';

const TicketsModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay">
          {/* Backdrop Blur overlay */}
          <motion.div 
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div 
            className="tickets-modal-content"
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 40 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <button className="modal-close-btn" onClick={onClose}>
              <X size={24} />
            </button>

            <div className="modal-inner">
              <motion.div 
                className="ticket-icon-glow"
                animate={{ 
                  filter: ["drop-shadow(0 0 20px rgba(230, 43, 30, 0.4))", "drop-shadow(0 0 40px rgba(230, 43, 30, 0.8))", "drop-shadow(0 0 20px rgba(230, 43, 30, 0.4))"],
                  y: [0, -10, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Ticket size={80} strokeWidth={1} className="main-ticket-icon" />
              </motion.div>

              <div className="modal-text-group">
                <motion.span 
                  className="status-badge"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Coming Soon
                </motion.span>
                
                <motion.h2 
                  className="modal-high-energy-title"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Tickets are opening soon...
                </motion.h2>

                <motion.p 
                  className="modal-high-energy-subtitle"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Stay updated on our social media and right here on our website!
                </motion.p>
              </div>

              <motion.div 
                className="modal-social-actions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="social-button-group">
                  <a 
                    href="https://www.instagram.com/tedxgni/?hl=en" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-pill-btn instagram"
                  >
                    <Instagram size={20} /> Instagram
                  </a>
                  <a 
                    href="https://www.linkedin.com/groups/18951001/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-pill-btn linkedin"
                  >
                    <Linkedin size={20} /> LinkedIn
                  </a>
                </div>
                <p className="modal-disclaimer">Let's be ready to grab them fast!</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default TicketsModal;
