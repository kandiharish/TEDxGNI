import React from 'react';
import { motion } from 'framer-motion';
import './Speakers.css';

const speakersData = [
  {
    year: '2024',
    title: 'Uncovered Origins',
    speakers: [
      { 
        name: 'Vinay Chopra', 
        desc: 'Recruitment & Operations Leader',
        image: '/vinay chopra.jpeg'
      },
      { 
        name: 'Aditya Kuchibhotla', 
        desc: 'Chartered Accountant & VP, Berkadia',
        image: '/aditya-2-1024x683.jpg.jpeg'
      },
      { 
        name: 'Apeksha Gupta', 
        desc: 'SCM Research Scholar & Logistics Academician',
        image: '/Apeksha_gupta1.webp'
      },
      { 
        name: 'Ishita Saluja', 
        desc: 'Personal Stylist & Image Consultant',
        image: '/ishitha.jpeg'
      },
      { 
        name: 'Dr. Jyothirmayi Kotipalli', 
        desc: 'Neuro Psychiatrist',
        image: '/dr-kotipalli-jyothirmayi-673c113d88d00.jpeg'
      },
      { 
        name: 'Manisha Chopra', 
        desc: 'Nutritionist & Wellness Coach',
        image: '/manisha-chopra.jpg.jpeg',
        objectPosition: 'center 10%'
      },
      { 
        name: 'Mohammed Vanderheyden', 
        desc: 'Chairman, REEM Foundation',
        image: '/vanderheyden.jpeg'
      },
      { 
        name: 'Dr. Mohit Ramsinghani', 
        desc: 'Business Leader, Real Estate',
        image: '/Dr-Mohit-Ramsinghani-Head-Sales-Marketing-Customer-Relations-Bombay-Realty-1024x1024.jpeg'
      },
      { 
        name: 'S Krithivasan', 
        desc: 'VP HR & HR Leader',
        image: '/kritivasan.jpeg'
      },
      { 
        name: 'Sahil Nayar', 
        desc: 'HR Influencer & L&D Expert',
        image: '/sahil.png'
      }
    ]
  },
  {
    year: '2023',
    title: 'Shadowed Future',
    speakers: [
      { 
        name: 'Crisna Chaitanya Reddy', 
        desc: 'Aptitude Trainer & Founder, CreateU',
        image: '/crisnachaitanya2023speaker.jpg.jpeg'
      },
      { 
        name: 'Kranti Kiran Reddy', 
        desc: 'Managing Director, Janapriya Group',
        image: '/kranti-kiran-reddy.jpg.jpeg'
      },
      { 
        name: 'Mohammed Zubair Ali', 
        desc: 'Food Influencer & YouTuber',
        image: '/mohammed zubair ali.jpg.jpeg'
      },
      { 
        name: 'Narayanan S', 
        desc: 'Co-founder & CBO, Unschool',
        image: '/narayana s.jpg.jpeg'
      },
      { 
        name: 'Piyush Kumar', 
        desc: 'VP, Data Platform Engineering, MakeMyTrip',
        image: '/piyush-kumar-1043311-1718785786.avif'
      },
      { 
        name: 'Siv Ram Shastri Jonnalagada', 
        desc: 'Tech Consultant & Co-founder, HyderabadDAO',
        image: '/sivramshastri.jpg.jpeg'
      },
      { 
        name: 'Supriyo Chakraborthy', 
        desc: 'Entrepreneur & LGBTQIA+ Activist',
        image: '/supriyochakraborty.jpg.jpeg'
      },
      { 
        name: 'Uma Rao Ganduri', 
        desc: 'CHRO, Granules India',
        image: '/uma rao.jpg.jpeg',
        objectPosition: 'right center'
      }
    ]
  }
];

const Speakers = () => {
  return (
    <div className="speakers-directory">
      <div className="speakers-header padding-wrapper">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="directory-title"
        >
          Past <span className="red-accent">Voices.</span>
        </motion.h1>
        <motion.p 
          className="directory-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Meet the brilliant minds who have stepped onto the TEDxGNI stage and sparked change.
        </motion.p>
      </div>

      <div className="seasons-container">
        {speakersData.map((season, sIdx) => (
          <div key={sIdx} className="season-row-container">
            <div className="season-row-header padding-wrapper">
              <h2>TEDxGNI {season.year}</h2>
              <p>"{season.title}"</p>
            </div>
            
            {/* The Horizontal Spotlight Slider */}
            <div className="spotlight-slider">
              <div className="spotlight-track">
                {season.speakers.map((speaker, idx) => (
                  <motion.div 
                    key={idx} 
                    className="speaker-spotlight-card"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <div className="speaker-image-wrapper">
                      <img 
                        src={speaker.image || "/speaker_placeholder.png"} 
                        alt={speaker.name} 
                        className="speaker-image" 
                        style={{ objectPosition: speaker.objectPosition || 'center' }}
                      />
                      <div className="speaker-overlay">
                        <h3>{speaker.name}</h3>
                        <p>{speaker.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
