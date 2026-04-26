import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../sections/Hero/Hero';
import About from '../sections/About/About';
import Countdown from '../sections/Countdown/Countdown';
import CurrentSpeakers from '../sections/CurrentSpeakers/CurrentSpeakers';
import EventInfo from '../sections/EventInfo/EventInfo';
import Testimonials from '../sections/Testimonials/Testimonials';
import Community from '../sections/Community/Community';
import Sponsors from '../sections/Sponsors/Sponsors';
import Afterglow from '../sections/Afterglow/Afterglow';

const Home = ({ onTicketsClick }) => {
  const [showFab, setShowFab] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.7) {
        setShowFab(true);
      } else {
        setShowFab(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <Hero onTicketsClick={onTicketsClick} />
      
      <About />
      
      <Countdown />
      
      <CurrentSpeakers onTicketsClick={onTicketsClick} />
      
      <EventInfo onTicketsClick={onTicketsClick} />
      
      <Afterglow />
      
      <Sponsors />
      <Testimonials />
      <Community />
      
      {/* Floating Registration Button */}
      <AnimatePresence>
        {showFab && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            style={{
              position: 'fixed',
              bottom: '30px',
              right: '30px',
              zIndex: 9999,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '10px'
            }}
          >
            {/* Pop-up Tooltip */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                backgroundColor: '#ffffff',
                color: '#000000',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
                position: 'relative',
                marginRight: '10px'
              }}
            >
              Hurry up! Grab yours before you lose it 👋
              <div style={{
                position: 'absolute',
                bottom: '-6px',
                right: '30px',
                width: '0',
                height: '0',
                borderLeft: '6px solid transparent',
                borderRight: '6px solid transparent',
                borderTop: '6px solid #ffffff'
              }} />
            </motion.div>

            <a 
              href="https://forms.fillout.com/t/vwNtnMQfEcus"
              target="_blank"
              rel="noopener noreferrer"
              className="floating-register-btn"
              style={{
                backgroundColor: '#e62b1e',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '50px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                boxShadow: '0 10px 25px rgba(230, 43, 30, 0.4)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(230, 43, 30, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(230, 43, 30, 0.4)';
              }}
            >
              <span className="pulse-dot" style={{ width: '8px', height: '8px', backgroundColor: '#fff', borderRadius: '50%' }}></span>
              Buy Tickets
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
