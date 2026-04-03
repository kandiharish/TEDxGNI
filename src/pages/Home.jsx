import React from 'react';
import Hero from '../sections/Hero/Hero';
import About from '../sections/About/About';
import Countdown from '../sections/Countdown/Countdown';
import EventInfo from '../sections/EventInfo/EventInfo';
import Testimonials from '../sections/Testimonials/Testimonials';
import Community from '../sections/Community/Community';
import Sponsors from '../sections/Sponsors/Sponsors';

const Home = ({ onTicketsClick }) => {
  return (
    <div>
      <Hero onTicketsClick={onTicketsClick} />
      <About />
      <Countdown />
      <EventInfo onTicketsClick={onTicketsClick} />
      <Sponsors />
      <Testimonials />
      <Community />
    </div>
  );
};

export default Home;
