import { useEffect, useRef, useCallback } from 'react';

const CanvasBackground = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationFrameId = useRef(null);

  // Memoize the generateParticles function
  const generateParticles = useCallback((count, width, height) => {
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
  }, []); // Empty dependency array means the function won't change unless remounted

  // Memoize the resizeCanvas function
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    canvas.width = window.innerWidth;
    canvas.height = document.body.scrollHeight;

    const particleCount = canvas.width < 768 ? 100 : 200;
    particlesRef.current = generateParticles(particleCount, canvas.width, canvas.height);
  }, [generateParticles]); // `generateParticles` is a dependency here

  // Memoize the animate function
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
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
  }, []); // No dependencies mean this function doesn't rely on external values and can stay stable.

  useEffect(() => {
    // Initial setup
    resizeCanvas();
    animate();

    // Add event listener for window resize
    window.addEventListener('resize', resizeCanvas);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [resizeCanvas, animate]); // Add `resizeCanvas` and `animate` as dependencies

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
};

export default CanvasBackground;
