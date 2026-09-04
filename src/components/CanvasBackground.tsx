import { useEffect, useRef, useCallback } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  baseOpacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
  layer: 0 | 1 | 2;
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

const LAYER_SPEED = [0.02, 0.06, 0.14];
const LAYER_SIZE = [0.6, 1.1, 1.9];

const CanvasBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const shootingRef = useRef<ShootingStar[]>([]);
  const scrollRef = useRef(0);
  const timeRef = useRef(0);
  const animationFrameId = useRef<number | null>(null);
  const dimsRef = useRef({ w: 0, h: 0 });

  const generateStars = useCallback((width: number, height: number) => {
    const isMobile = width < 768;
    const counts = isMobile ? [30, 40, 20] : [60, 80, 40];
    const stars: Star[] = [];

    counts.forEach((count, layer) => {
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height * 2.5,
          size: (Math.random() * 0.8 + 0.6) * LAYER_SIZE[layer],
          baseOpacity: Math.random() * 0.5 + 0.35,
          twinkleSpeed: Math.random() * 0.02 + 0.006,
          twinklePhase: Math.random() * Math.PI * 2,
          layer: layer as 0 | 1 | 2,
        });
      }
    });

    return stars;
  }, []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    dimsRef.current = { w: canvas.width, h: canvas.height };

    starsRef.current = generateStars(canvas.width, canvas.height);
  }, [generateStars]);

  const spawnShootingStar = useCallback(() => {
    const { w } = dimsRef.current;
    const startX = Math.random() * w * 0.6 + w * 0.2;
    shootingRef.current.push({
      x: startX,
      y: -20,
      vx: -3.2 - Math.random() * 2.4,
      vy: 4.5 + Math.random() * 2.5,
      life: 0,
      maxLife: 55 + Math.random() * 20,
    });
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { w, h } = dimsRef.current;
    timeRef.current += 1;

    ctx.clearRect(0, 0, w, h);

    starsRef.current.forEach((star) => {
      const parallaxY = (star.y - scrollRef.current * LAYER_SPEED[star.layer]) % (h * 2.5);
      const wrappedY = parallaxY < 0 ? parallaxY + h * 2.5 : parallaxY;
      if (wrappedY > h) return;

      star.twinklePhase += star.twinkleSpeed;
      const opacity = star.baseOpacity * (0.6 + 0.4 * Math.sin(star.twinklePhase));

      ctx.beginPath();
      ctx.arc(star.x, wrappedY, star.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(220, 235, 255, ${opacity})`;
      ctx.fill();

      if (star.layer === 2 && opacity > 0.8) {
        ctx.beginPath();
        ctx.arc(star.x, wrappedY, star.size * 2.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(120, 200, 255, ${opacity * 0.12})`;
        ctx.fill();
      }
    });

    if (Math.random() < 0.006 && shootingRef.current.length < 2) {
      spawnShootingStar();
    }

    shootingRef.current = shootingRef.current.filter((s) => s.life < s.maxLife);
    shootingRef.current.forEach((s) => {
      s.x += s.vx;
      s.y += s.vy;
      s.life += 1;

      const fade = 1 - s.life / s.maxLife;
      const grad = ctx.createLinearGradient(s.x, s.y, s.x - s.vx * 8, s.y - s.vy * 8);
      grad.addColorStop(0, `rgba(255, 255, 255, ${fade})`);
      grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(s.x - s.vx * 8, s.y - s.vy * 8);
      ctx.stroke();
    });

    animationFrameId.current = requestAnimationFrame(animate);
  }, [spawnShootingStar]);

  useEffect(() => {
    resizeCanvas();
    animationFrameId.current = requestAnimationFrame(animate);

    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [resizeCanvas, animate]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-[#03040a] via-[#05070f] to-[#070914]" />

      <div className="absolute -top-[20%] -left-[15%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full bg-[radial-gradient(circle,rgba(77,216,255,0.16),transparent_65%)] animate-drift blur-3xl" />
      <div className="absolute top-[35%] -right-[20%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-[radial-gradient(circle,rgba(255,176,32,0.09),transparent_60%)] animate-drift blur-3xl" style={{ animationDelay: '-14s', animationDuration: '55s' }} />
      <div className="absolute bottom-[5%] left-[10%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full bg-[radial-gradient(circle,rgba(120,90,255,0.1),transparent_60%)] animate-drift blur-3xl" style={{ animationDelay: '-28s', animationDuration: '48s' }} />

      <div className="absolute top-[8%] right-[6%] sm:right-[10%] hidden sm:block">
        <div className="relative w-28 h-28 md:w-40 md:h-40 rounded-full opacity-70"
          style={{
            background: 'radial-gradient(circle at 35% 30%, #3a4a6b, #10131f 70%)',
            boxShadow: '0 0 60px 10px rgba(77,216,255,0.08), inset -14px -10px 30px rgba(0,0,0,0.6)',
          }}
        />
      </div>

      <div className="absolute inset-0 hud-grid-bg opacity-40" />

      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
};

export default CanvasBackground;
