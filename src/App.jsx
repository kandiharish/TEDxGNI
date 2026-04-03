import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from './components/layout/Layout';
import Particles from './components/Particles';
import PreLoader from './components/PreLoader';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import VenuePage from './pages/VenuePage';
import PastSeasonsPage from './pages/PastSeasonsPage';
import SpeakersPage from './pages/SpeakersPage';
import Register from './pages/Register';
import Success from './pages/Success';
import TicketsModal from './components/common/TicketsModal';
import './App.css';

function App() {
  const isFirstVisit = !sessionStorage.getItem('preloaderPlayed');
  const [showPreloader, setShowPreloader] = useState(isFirstVisit);
  const [showTicketsModal, setShowTicketsModal] = useState(false);

  const handlePreloaderComplete = useCallback(() => {
    sessionStorage.setItem('preloaderPlayed', 'true');
    setShowPreloader(false);
  }, []);

  const toggleTicketsModal = useCallback(() => {
    setShowTicketsModal(prev => !prev);
  }, []);

  return (
    <Router>
      {showPreloader && <PreLoader onComplete={handlePreloaderComplete} />}
      <Particles />
      <Layout onTicketsClick={toggleTicketsModal}>
        <Routes>
          <Route path="/" element={<Home onTicketsClick={toggleTicketsModal} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/speakers" element={<SpeakersPage />} />
          <Route path="/venue" element={<VenuePage />} />
          <Route path="/past-seasons" element={<PastSeasonsPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Layout>
      <TicketsModal isOpen={showTicketsModal} onClose={toggleTicketsModal} />

    </Router>
  );
}

export default App;

