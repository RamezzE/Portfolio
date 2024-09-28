import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Home from './pages/Home/Home';
import Project from './pages/Project/Project';
import NavBar from './components/NavBar';

const App = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]); // Use ref to store particles outside of React state
  const animationFrameId = useRef(null); // Store the animation frame ID for cleanup

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight;

      if (canvas.width < 768) {
        if (particlesRef.current.length == 100)
          return;

        if (particlesRef.current.length > 100) {
          particlesRef.current = particlesRef.current.slice(0, 100);
        }

        particlesRef.current = generateParticles(100, canvas.width, canvas.height);

        return
      }
      else {
        if (particlesRef.current.length < 200) {
          particlesRef.current = generateParticles(200, canvas.width, canvas.height);
        }
      }
      // const particlesCount = canvas.width < 768 ? 100 : 200;
      // particlesRef.current = generateParticles(particlesCount, canvas.width, canvas.height);
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

      // Animate stars
      particlesRef.current.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around the screen
        // if (particle.x > canvas.width) particle.x = 0;
        if (particle.x > canvas.width || particle.x < 0) particle.speedX *= -1;
        // if (particle.x < 0) particle.x = canvas.width;
        // if (particle.y > canvas.height || particle.y < 0) particle.speedY *= -1;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        // Draw stars with subtle glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 200, 200, ${particle.opacity})`;
        ctx.fill();
        ctx.shadowColor = 'rgba(255, 255, 255, 0.6)';
        ctx.shadowBlur = 7; // Subtle glow effect
      });

      animationFrameId.current = requestAnimationFrame(animate); // Loop the animation
    };

    // Initial setup
    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId.current); // Cancel animation on unmount
    };
  }, []);

  return (
    <Router>
      <NavBar />

      <div className="relative w-full flex flex-col justify-center items-center overflow-hidden">
        {/* Dark Space-like Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black z-0"></div>

        {/* Canvas for starfield and comets */}
        <canvas ref={canvasRef} className="absolute inset-0 z-0" />

        {/* Content (NavBar and Routes) */}
        <div className="relative z-10 w-full flex flex-col justify-center items-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
