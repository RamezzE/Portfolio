import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface Trail {
  id: number;
  x: number;
  y: number;
}

const SpaceCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [trail, setTrail] = useState<Trail[]>([]);
  const trailId = useRef(0);
  const lastTrailTime = useRef(0);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 600, damping: 38, mass: 0.5 });
  const springY = useSpring(cursorY, { stiffness: 600, damping: 38, mass: 0.5 });

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);
  const angle = useMotionValue(-90);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    setEnabled(fine);
    if (!fine) return;

    document.body.classList.add('space-cursor-active');

    const handleMove = (e: MouseEvent) => {
      const dx = e.clientX - rawX.get();
      const dy = e.clientY - rawY.get();
      const dist = Math.hypot(dx, dy);

      if (dist > 1.5) {
        angle.set((Math.atan2(dy, dx) * 180) / Math.PI + 90);
      }

      rawX.set(e.clientX);
      rawY.set(e.clientY);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setVisible(true);

      const now = performance.now();
      if (dist > 8 && now - lastTrailTime.current > 55) {
        lastTrailTime.current = now;
        trailId.current += 1;
        const id = trailId.current;
        setTrail((prev) => [...prev.slice(-7), { id, x: e.clientX, y: e.clientY }]);
        setTimeout(() => {
          setTrail((prev) => prev.filter((t) => t.id !== id));
        }, 420);
      }
    };

    const handleDown = () => setClicked(true);
    const handleUp = () => setClicked(false);
    const handleLeave = () => setVisible(false);

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);
    document.documentElement.addEventListener('mouseleave', handleLeave);

    return () => {
      document.body.classList.remove('space-cursor-active');
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
      document.documentElement.removeEventListener('mouseleave', handleLeave);
    };
  }, [cursorX, cursorY, rawX, rawY, angle]);

  if (!enabled) return null;

  return (
    <>
      <div className="pointer-events-none fixed top-0 left-0 z-[9998]">
        {trail.map((t, i) => (
          <span
            key={t.id}
            className="absolute rounded-full bg-secondary"
            style={{
              left: t.x,
              top: t.y,
              width: 4,
              height: 4,
              transform: 'translate(-50%, -50%)',
              opacity: ((i + 1) / trail.length) * 0.35,
              filter: 'blur(1px)',
            }}
          />
        ))}
      </div>

      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: visible ? 1 : 0,
          rotate: angle,
        }}
        animate={{ scale: clicked ? 0.82 : 1 }}
        transition={{ duration: 0.15 }}
      >
        <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
          <defs>
            <radialGradient id="cursor-thruster" cx="50%" cy="0%" r="90%">
              <stop offset="0%" stopColor="#4dd8ff" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#4dd8ff" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="cursor-hull" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f4fbff" />
              <stop offset="100%" stopColor="#b9d9e8" />
            </linearGradient>
          </defs>

          {/* engine glow */}
          <ellipse cx="16" cy="25" rx="3.4" ry="7" fill="url(#cursor-thruster)" />

          {/* wings */}
          <path d="M16 12 L2 24 L9 21.5 L16 24 Z" fill="#123047" stroke="#4dd8ff" strokeWidth="0.75" strokeLinejoin="round" />
          <path d="M16 12 L30 24 L23 21.5 L16 24 Z" fill="#123047" stroke="#4dd8ff" strokeWidth="0.75" strokeLinejoin="round" />

          {/* fuselage */}
          <path
            d="M16 1.5 C19.5 6 21 13 19.5 21 C18.5 24.5 17.3 26 16 27.5 C14.7 26 13.5 24.5 12.5 21 C11 13 12.5 6 16 1.5 Z"
            fill="url(#cursor-hull)"
            stroke="#4dd8ff"
            strokeWidth="1"
            strokeLinejoin="round"
          />

          {/* cockpit */}
          <ellipse cx="16" cy="10.5" rx="2.6" ry="3.4" fill="#0a1620" stroke="#4dd8ff" strokeWidth="0.8" />
          <ellipse cx="16" cy="9.6" rx="1.3" ry="1.6" fill="#4dd8ff" opacity="0.85" />
        </svg>
      </motion.div>
    </>
  );
};

export default SpaceCursor;
