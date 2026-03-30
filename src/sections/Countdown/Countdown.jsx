import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import './Countdown.css';

const Countdown = () => {
  // Target date: April 29, 2026, 09:00:00 IST
  // IST is UTC+5:30
  const TARGET_DATE = new Date('2026-04-29T09:00:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = TARGET_DATE - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Calculate immediately on mount
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => {
    return num.toString().padStart(2, '0');
  };

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="countdown-section">
      <div className="countdown-glow"></div>
      
      <div className="wrapper">
        <motion.div 
          className="countdown-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Header */}
          <div className="countdown-header">
            <div className="date-badge">
              <Calendar size={14} className="date-icon" />
              <span>April 29, 2026</span>
            </div>
            <h2 className="countdown-title">Event Starts In</h2>
            <div className="countdown-divider"></div>
          </div>

          {/* Timer Cards */}
          <div className="timer-grid">
            {timeBlocks.map((block, index) => (
              <motion.div 
                key={block.label} 
                className="timer-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Clock size={20} className="timer-icon" />
                <div className="timer-value">{formatNumber(block.value)}</div>
                <div className="timer-label">{block.label}</div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Countdown;
