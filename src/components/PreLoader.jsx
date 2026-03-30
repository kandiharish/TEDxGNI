import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PreLoader.css';

const LETTERS = [
  { char: 'T', isX: false, isTed: true },
  { char: 'E', isX: false, isTed: true },
  { char: 'D', isX: false, isTed: true },
  { char: 'x', isX: true, isTed: false },
  { char: 'G', isX: false, isTed: false },
  { char: 'N', isX: false, isTed: false },
  { char: 'I', isX: false, isTed: false },
];

const PreLoader = ({ onComplete }) => {
  const [litIndex, setLitIndex] = useState(-1);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const LETTER_DELAY = 280;
    const timers = [];

    // Sequentially light each letter
    LETTERS.forEach((_, i) => {
      timers.push(setTimeout(() => setLitIndex(i), 400 + i * LETTER_DELAY));
    });

    // After all letters are lit, hold briefly then smoothly fade out
    const holdTime = 400 + LETTERS.length * LETTER_DELAY + 600;
    timers.push(setTimeout(() => setIsDone(true), holdTime));
    timers.push(setTimeout(() => onComplete(), holdTime + 1200));

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  // Calculate spotlight beam position
  const beamProgress = litIndex >= 0
    ? ((litIndex + 0.5) / LETTERS.length) * 100
    : -10;

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Spotlight beam that sweeps across */}
          {litIndex >= 0 && litIndex < LETTERS.length && (
            <motion.div
              className="spotlight-beam"
              initial={{ left: '0%', opacity: 0 }}
              animate={{
                left: `${beamProgress}%`,
                opacity: 1,
              }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            />
          )}

          {/* Letter row: T E D x G N I */}
          <div className="preloader-letters">
            {LETTERS.map((letter, i) => (
              <motion.span
                key={i}
                className={`preloader-letter ${letter.isX ? 'is-x' : ''} ${letter.isTed ? 'is-ted' : ''} ${i <= litIndex ? 'lit' : ''}`}
                initial={{ opacity: 0.15 }}
                animate={i <= litIndex ? {
                  opacity: 1,
                  scale: [1, 1.08, 1],
                } : {
                  opacity: 0.15,
                }}
                transition={{
                  duration: 0.3,
                  ease: 'easeOut',
                }}
              >
                {letter.char}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreLoader;

