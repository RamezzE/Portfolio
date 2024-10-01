import { useEffect, useRef } from 'react';

const CanvasBackground = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationFrameId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight;

      const particleCount = canvas.width < 768 ? 100 : 200;
      particlesRef.current = generateParticles(particleCount, canvas.width, canvas.height);
    };

    const generateParticles = (count, width, height) => {
      const particlesArray = [];
      for (let i = 0; i < count; i++) {
        particlesArray.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() * 0.25) * (Math.random() < 0.5 ? 1 : -1),
          speedY: (Math.random() * 0.25) * (Math.random() < 0.5 ? 1 : -1),
          opacity: Math.random() * 0.5 + 0.5,
        });
      }
      return particlesArray;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x > canvas.width || particle.x < 0) particle.speedX *= -1;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 200, 200, ${particle.opacity})`;
        ctx.fill();
        ctx.shadowColor = 'rgba(255, 255, 255, 0.6)';
        ctx.shadowBlur = 7;
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    // Initial setup
    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
};

export default CanvasBackground;
