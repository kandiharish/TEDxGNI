import React, { useEffect } from 'react';
import Speakers from '../sections/Speakers/Speakers';

const SpeakersPage = () => {
  // Scroll to top when loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="speakers-page">
      <Speakers />
    </div>
  );
};

export default SpeakersPage;
