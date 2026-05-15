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
      
      <CurrentSpeakers onTicketsClick={onTicketsClick} />
      
      <EventInfo onTicketsClick={onTicketsClick} />
      
      <Afterglow />
      
      <Sponsors />
      <Testimonials />
      <Community />
    </div>
  );
};

export default Home;
