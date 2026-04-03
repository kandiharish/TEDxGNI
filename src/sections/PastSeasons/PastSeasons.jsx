import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Play } from 'lucide-react';
import './PastSeasons.css';

/* ─── Interactive 3D Card Overlay ───────────────────────── */
const InteractiveImageCard = ({ season }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // When mouse moves to top left (-200, -200), tilt down and right
  const rotateX = useTransform(y, [-200, 200], [10, -10]);
  const rotateY = useTransform(x, [-200, 200], [-10, 10]);

  // Translate overlay text slightly for parallax
  const textX = useTransform(x, [-200, 200], [-15, 15]);
  const textY = useTransform(y, [-200, 200], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={`season-image-card ${season.bgClass}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <motion.div 
        className="card-overlay"
        style={{ x: textX, y: textY, transformStyle: 'preserve-3d' }}
      >
        <span className="overlay-season">Season {season.id}</span>
        <h3 className="overlay-title">TEDxGNI {season.year}</h3>
        <p className="overlay-theme">{season.title}</p>
      </motion.div>
    </motion.div>
  );
};

const PastSeasons = () => {
  const seasons = [
    {
      id: 3,
      year: '2024',
      title: 'Uncovered Origins',
      desc: 'Our 2024 event explored the theme "Uncovered Origins," focusing on how every innovation, idea, and personal journey is rooted in fundamental beginnings. The talks emphasized understanding core principles that shape success, creativity, and human growth across disciplines.',
      speakers: [
        'Aditya Kuchibhotla – Chartered Accountant & VP, Berkadia',
        'Apeksha Gupta – SCM Research Scholar & Logistics Academician',
        'Ishita Saluja – Personal Stylist & Image Consultant',
        'Dr. Jyothirmayi Kotipalli – Neuro Psychiatrist',
        'Manisha Chopra – Nutritionist & Wellness Coach',
        'Mohammed Vanderheyden – Chairman, REEM Foundation',
        'Dr. Mohit Ramsinghani – Business Leader, Real Estate',
        'S Krithivasan – VP HR & HR Leader',
        'Sahil Nayar – HR Influencer & L&D Expert',
        'Vinay Chopra – Recruitment & Operations Leader'
      ],
      align: 'left',
      bgClass: 'bg-season-3'
    },
    {
      id: 2,
      year: '2023',
      title: 'Shadowed Future',
      desc: 'The 2023 edition, themed "Shadowed Future," explored the evolving relationship between present actions and future uncertainties. The event brought together voices from technology, business, and society to discuss innovation, identity, and the unseen impact of today\'s decisions.',
      speakers: [
        'Crisna Chaitanya Reddy – Aptitude Trainer & Founder, CreateU',
        'Kranti Kiran Reddy – Managing Director, Janapriya Group',
        'Mohammed Zubair Ali – Food Influencer & YouTuber',
        'Narayanan S – Co-founder & CBO, Unschool',
        'Piyush Kumar – VP, Data Platform Engineering, MakeMyTrip',
        'Siv Ram Shastri Jonnalagada – Tech Consultant & Co-founder, HyderabadDAO',
        'Supriyo Chakraborthy – Entrepreneur & LGBTQIA+ Activist',
        'Uma Rao Ganduri – CHRO, Granules India'
      ],
      align: 'right',
      bgClass: 'bg-season-2'
    },
    {
      id: 1,
      year: '2019',
      title: 'The Road Not Taken',
      desc: 'The inaugural TEDxGNI 2019 event centered around "The Road Not Taken," celebrating unconventional paths and untold stories. It provided a platform for innovators, creators, and change-makers whose ideas challenge norms and inspire new directions in life and society.',
      speakers: [
        'Ajinkya Jadhav – Founder & CEO, WeAllTeen',
        'Capricio – The Band',
        'Hema Balakrishnan – Social Entrepreneur & Founder, ColorDEarth',
        'Hemang Vellore – Young Innovator & Roboticist',
        'Ivana Perkovic – YouTuber & Travel Vlogger',
        'Natasha Noel – Yogini & Influencer',
        'Nikhil Paralikar – Fusion Percussionist',
        'Praveen Kumar Gorakavi – Scientist & Inventor',
        'Rajesh Vagh – Founder & MD, PharmaTutor',
        'Uzma A Kazmi – Senior Vice President, PNC Bank'
      ],
      align: 'left',
      bgClass: 'bg-season-1'
    }
  ];

  return (
    <section className="past-seasons-section wrapper" id="past">
      {seasons.map((season, idx) => (
        <motion.div 
          key={season.year}
          className={`season-row ${season.align === 'right' ? 'row-reverse' : ''}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Text Content */}
          <div className="season-content">
            <span className="season-badge">Season {season.id}</span>
            <h2 className="season-title">
              <span className="red-accent">{season.year}:</span> {season.title}
            </h2>
            <p className="season-desc">{season.desc}</p>
            
            <h4 className="featured-speakers-title">Featured Speakers</h4>
            <ul className="speaker-list">
              {season.speakers.map((speaker, sIdx) => (
                <li key={sIdx}><span className="red-dot"></span>{speaker}</li>
              ))}
            </ul>


          </div>

          {/* Image/Media Content */}
          <div className="season-media" style={{ perspective: 1000 }}>
            <InteractiveImageCard season={season} />
          </div>
        </motion.div>
      ))}

      {/* Looking Forward Footer */}
      <motion.div 
        className="looking-forward text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="looking-title">Looking Forward</h2>
        <p className="looking-desc">
          TEDxGNI continues to bring inspiring speakers and ideas to our community. Join us for our upcoming event and be part of the TEDx experience.
        </p>
        <button className="btn btn-primary" onClick={() => window.location.href='/about'}>
          Learn About Our Next Event
        </button>
      </motion.div>
    </section>
  );
};

export default PastSeasons;
