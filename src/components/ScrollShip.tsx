import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion';

const ScrollShip = () => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 25, mass: 0.5 });

  const velocity = useVelocity(smoothProgress);
  const tilt = useTransform(velocity, [-2, 0, 2], [-25, 0, 25], { clamp: true });

  const [coarse, setCoarse] = useState(false);
  useEffect(() => {
    setCoarse(window.matchMedia('(max-width: 639px)').matches);
  }, []);

  const top = useTransform(smoothProgress, [0, 1], ['4vh', '92vh']);

  if (coarse) return null;

  return (
    <div className="fixed right-3 md:right-6 top-0 h-screen w-10 pointer-events-none z-[15] hidden sm:block">
      <div className="absolute right-1/2 translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      <motion.div
        className="absolute left-1/2"
        style={{ top, translateX: '-50%', translateY: '-50%', rotate: tilt }}
      >
        <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
          <defs>
            <radialGradient id="ship-glow" cx="50%" cy="0%" r="90%">
              <stop offset="0%" stopColor="#4dd8ff" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#4dd8ff" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="ship-hull" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f4fbff" />
              <stop offset="100%" stopColor="#b9d9e8" />
            </linearGradient>
          </defs>

          <ellipse cx="16" cy="25" rx="3.4" ry="7" fill="url(#ship-glow)" />

          <path d="M16 12 L2 24 L9 21.5 L16 24 Z" fill="#123047" stroke="#4dd8ff" strokeWidth="0.75" strokeLinejoin="round" />
          <path d="M16 12 L30 24 L23 21.5 L16 24 Z" fill="#123047" stroke="#4dd8ff" strokeWidth="0.75" strokeLinejoin="round" />

          <path
            d="M16 1.5 C19.5 6 21 13 19.5 21 C18.5 24.5 17.3 26 16 27.5 C14.7 26 13.5 24.5 12.5 21 C11 13 12.5 6 16 1.5 Z"
            fill="url(#ship-hull)"
            stroke="#4dd8ff"
            strokeWidth="1"
            strokeLinejoin="round"
          />

          <ellipse cx="16" cy="10.5" rx="2.6" ry="3.4" fill="#0a1620" stroke="#4dd8ff" strokeWidth="0.8" />
          <ellipse cx="16" cy="9.6" rx="1.3" ry="1.6" fill="#4dd8ff" opacity="0.85" />
        </svg>
      </motion.div>
    </div>
  );
};

export default ScrollShip;
