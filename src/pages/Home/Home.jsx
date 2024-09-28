import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Contact from './sections/Contact'

const Home = () => {

  return (
    <div className="w-full">
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
