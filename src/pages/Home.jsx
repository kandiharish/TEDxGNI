import React from 'react';
import Hero from '../sections/Hero/Hero';
import About from '../sections/About/About';
import Countdown from '../sections/Countdown/Countdown';
import EventInfo from '../sections/EventInfo/EventInfo';
import Testimonials from '../sections/Testimonials/Testimonials';
import Community from '../sections/Community/Community';
import Sponsors from '../sections/Sponsors/Sponsors';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Countdown />
      <EventInfo />
      <Sponsors />
      <Testimonials />
      <Community />
    </div>
  );
};

export default Home;
