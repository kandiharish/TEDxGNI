import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';
import './Hero.css';

/* ─── Diagonal arrow particles ─────────────────── */
const ArrowParticle = ({ delay, startX, startY, size, type }) => {
  // We'll create longer trails with mixed colors
  const isWhite = type === 'white';
  const colorClass = isWhite ? 'arrow-white' : 'arrow-red';
  const content = isWhite ? '⟶' : '→'; // longer arrow for white

  return (
    <motion.div
      className={`arrow-particle ${colorClass}`}
      style={{ left: startX, top: startY, fontSize: size }}
      initial={{ x: 0, y: 0, opacity: 0 }}
      animate={{
        x: ['0px', '450px'], // moving further top-right
        y: ['0px', '-350px'],
        opacity: [0, 1, 1, 0],
        rotate: ['-45deg', '-45deg'],
      }}
      transition={{
        duration: 5, // Slower
        delay,
        ease: 'easeInOut',
        times: [0, 0.2, 0.8, 1],
        repeat: Infinity,
        repeatDelay: Math.random() * 2 // Loop continuously for ambient effect
      }}
    >
      {content}
    </motion.div>
  );
};

const arrowConfig = [
  { delay: 0.0, startX: '-5%', startY: '85%', size: 30, type: 'red' },
  { delay: 1.5, startX: '5%', startY: '95%', size: 24, type: 'white' },
  { delay: 0.8, startX: '12%', startY: '75%', size: 40, type: 'red' },
  { delay: 2.3, startX: '20%', startY: '90%', size: 28, type: 'white' },
  { delay: 0.4, startX: '28%', startY: '80%', size: 35, type: 'red' },
  { delay: 3.1, startX: '35%', startY: '95%', size: 22, type: 'red' },
  { delay: 1.2, startX: '45%', startY: '85%', size: 45, type: 'white' },
  { delay: 2.7, startX: '55%', startY: '100%', size: 32, type: 'red' },
  { delay: 0.9, startX: '65%', startY: '75%', size: 26, type: 'white' },
  { delay: 1.8, startX: '75%', startY: '90%', size: 38, type: 'red' },
];

/* ─── Digital Shatter Engine ─────────────────── */
const ShatterText = ({ text, isShattering, isGlitching }) => {
  return (
    <div className="glitch-wrapper">
      {text.split('').map((char, index) => {
        // Random explosion vectors for each character
        const randomX = (Math.random() - 0.5) * 1400;
        const randomY = (Math.random() - 0.5) * 1000;
        const randomRotate = (Math.random() - 0.5) * 1080;
        const randomScale = 1 + Math.random() * 3;

        return (
          <motion.span
            key={index}
            className={`shatter-char ${isGlitching ? 'glitch-text' : ''}`}
            data-text={char}
            initial={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
            animate={isShattering ? {
              opacity: [1, 1, 0],
              x: randomX,
              y: randomY,
              rotate: randomRotate,
              scale: randomScale,
              filter: ['blur(0px)', 'blur(4px)', 'blur(12px)']
            } : {
              opacity: 1,
              x: 0, y: 0, rotate: 0, scale: 1,
              filter: 'blur(0px)'
            }}
            transition={{ 
              duration: isShattering ? 1.2 : 0, 
              ease: "easeOut",
              times: [0, 0.4, 1]
            }}
          >
            {char}
          </motion.span>
        );
      })}
    </div>
  );
};

/* ─── Aura Glow Component ───────────────────── */
const AuraGlow = () => (
  <motion.div 
    className="aura-glow"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ 
      opacity: [0.4, 0.7, 0.4],
      scale: [1, 1.1, 1],
    }}
    transition={{ 
      duration: 4, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }}
  />
);

/* ─── Main Hero ─────────────────────────────────── */
const Hero = ({ onTicketsClick }) => {
  const isFirstVisit = !sessionStorage.getItem('heroAnimationPlayed');
  const [phase, setPhase] = useState(isFirstVisit ? 0 : 4);

  // 3D Tilt Effect variables
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-400, 400], [8, -8]);
  const rotateY = useTransform(x, [-400, 400], [-8, 8]);

  useEffect(() => {
    if (!isFirstVisit) return;

    const timers = [
      setTimeout(() => setPhase(1), 1500),  // Show "Success is not fixed formula" (with glitch)
      setTimeout(() => setPhase(2), 6500),  // THE SHATTER (after 5s of reading)
      setTimeout(() => {
        setPhase(3);
        sessionStorage.setItem('heroAnimationPlayed', 'true');
      }, 7700), // Final Reveal with Aura Shine
    ];
    return () => timers.forEach(clearTimeout);
  }, [isFirstVisit]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      className="hero-section"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Stage glow backdrop */}
      <div className="stage-glow" />

      {/* Diagonal arrows — run continuously */}
      <div className="arrow-layer" aria-hidden="true">
        {arrowConfig.map((cfg, i) => (
          <ArrowParticle key={i} {...cfg} />
        ))}
      </div>

      {/* ── Centered text stage ────────────────────── */}
      <div className="hero-content wrapper" style={{ perspective: 1000 }}>
        <motion.div
          className="hero-text-container"
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <AnimatePresence mode="wait">
            {phase < 3 ? (
              <motion.div
                key="shatter-phase"
                initial={{ opacity: 0 }}
                animate={{ opacity: phase >= 1 ? 1 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                style={{ width: '100%' }}
              >
                <ShatterText 
                  text="Success is not fixed formula." 
                  isShattering={phase === 2}
                  isGlitching={phase === 1}
                />
              </motion.div>
            ) : (
              <motion.div
                key="clarity-phase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="clarity-reveal-wrapper"
              >
                <AuraGlow />
                <motion.div
                  initial={{ opacity: 0, y: 30, filter: 'blur(15px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                  className={`clarity-reveal ${phase === 3 ? 'active' : ''}`}
                >
                  Success is what you&nbsp;
                  <span className="redefine-highlight">Redefine.</span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* CTA Buttons - Show only in final phase */}
          <motion.div
            className="hero-cta-group hero-cta-spaced"
            style={{ marginTop: '4rem' }}
            initial={{ opacity: 0, y: 10 }}
            animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <button 
              onClick={onTicketsClick} 
              className="btn btn-primary btn-cta-hero"
            >
              Register Now
            </button>
            <Link
              to="/about"
              className="btn btn-outline btn-cta-hero"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
