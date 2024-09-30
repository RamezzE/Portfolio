import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Contact from './sections/Contact'
import ProjectPopUp from '../../components/ProjectPopUp';



const Home = () => {

  return (
    <div className="w-full">
      <ProjectPopUp />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
