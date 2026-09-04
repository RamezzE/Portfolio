import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact'

const Home = () => {

  return (
    <div className="w-full">
      <Hero />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
