import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    text: "It was an absolute honor to speak at TEDxGNI and be part of such a thoughtfully curated platform. The entire experience from the preparation to stepping onto the stage was truly enriching and memorable. The team’s professionalism, attention to detail, and passion made the journey seamless for every speaker. Engaging with such a vibrant and curious audience made the talk even more impactful. TEDxGNI is not just an event, but a powerful community driving meaningful conversations and ideas.",
    author: "Siv Ram Sastri",
    designation: "Speaker at TEDxGNI",
    image: "/sivramshastri.jpg.jpeg",
    objectPosition: "top"
  },
  {
    id: 2,
    text: "The event exceeded my expectations, filled with genuine support. The team’s assistance helped me craft a talk that could spark change for students. Delivering on logistics highlighted its relevance and potential career pathways. Thank you, TEDx GNI, for the memorable experience and recognition.",
    author: "Apeksha Gupta",
    designation: "Speaker at TEDxGNI",
    image: "/Apeksha_gupta1.webp"
  },
  {
    id: 3,
    text: "The experience at TEDxGNI truly exceeded my expectations. From the very beginning, the team was deeply involved in shaping the talk with clarity and purpose. The entire journey felt intentional, and standing in front of such an engaged audience made it even more meaningful. I’m grateful to have been part of a platform that genuinely values ideas and impact.",
    author: "Crisna Chaithanya",
    designation: "Speaker at TEDxGNI",
    image: "/crisnachaitanya2023speaker.jpg.jpeg"
  },
  {
    id: 4,
    text: "It was an absolute pleasure to be part of TEDxGNI. The experience, from preparation to the final talk, was thoughtfully curated and seamless. The team’s attention to detail and commitment created a space where ideas could truly connect with people. Engaging with such a vibrant audience made it all the more memorable.",
    author: "Ishitha Saluja",
    designation: "Speaker at TEDxGNI",
    image: "/ishitha.jpeg"
  },
  {
    id: 5,
    text: "Speaking at TEDxGNI was both an honour and a rewarding experience. The team’s dedication and passion were evident at every stage, making the journey smooth and enriching. It’s inspiring to be part of a platform that brings together meaningful ideas and conversations. I truly value the experience and the connections it fostered.",
    author: "Supriyo Chakraborty",
    designation: "Speaker at TEDxGNI",
    image: "/supriyochakraborty.jpg.jpeg"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Safety fallback for hot reloads when array size shrinks
  const safeIndex = currentIndex >= testimonialsData.length ? 0 : currentIndex;
  const currentTest = testimonialsData[safeIndex];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonialsData.length - 1;
      if (nextIndex >= testimonialsData.length) nextIndex = 0;
      return nextIndex;
    });
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="wrapper">
        <div className="test-header">
          <h2 className="test-title">
            What People Say About <span className="red-accent">TEDx</span>GNI
          </h2>
          <motion.div 
            className="test-divider"
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          />
        </div>

        <div className="test-card-container">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={safeIndex}
              className="test-card"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 }
              }}
            >
              <div className="test-content-layout">
                
                {/* Avatar Left */}
                <div className="test-avatar-col">
                  <div className="test-avatar-glow">
                    <img 
                      src={currentTest.image} 
                      alt={currentTest.author} 
                      className="test-avatar-img"
                      style={{ objectPosition: currentTest.objectPosition || 'center' }}
                    />
                  </div>
                </div>

                {/* Content Right */}
                <div className="test-text-col">
                  {/* Huge SVG Quote */}
                  <svg className="quote-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 11H6C6 8.23858 8.23858 6 11 6V4C7.13401 4 4 7.13401 4 11V19H10V11ZM20 11H16C16 8.23858 18.23858 6 21 6V4C17.134 4 14 7.13401 14 11V19H20V11Z" fill="currentColor"/>
                  </svg>
                  
                  <p className="test-quote-text">
                    {currentTest.text}
                  </p>
                  
                  <div className="test-author-info">
                    <h4 className="test-author-name">{currentTest.author}</h4>
                    <span className="test-author-title">{currentTest.designation}</span>
                  </div>
                </div>

              </div>

              {/* Navigation Footer */}
              <div className="test-nav-footer">
                <div className="test-dots">
                  {testimonialsData.map((_, idx) => (
                    <button 
                      key={idx} 
                      className={`test-dot ${idx === currentIndex ? 'active' : ''}`}
                      onClick={() => {
                        setDirection(idx > currentIndex ? 1 : -1);
                        setCurrentIndex(idx);
                      }}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="test-arrows">
                  <button className="test-arrow-btn" onClick={() => paginate(-1)}>
                    <ChevronLeft size={20} />
                  </button>
                  <button className="test-arrow-btn" onClick={() => paginate(1)}>
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
