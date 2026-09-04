import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CanvasBackground from './components/CanvasBackground';
import SpaceCursor from './components/SpaceCursor';
import ScrollShip from './components/ScrollShip';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <SpaceCursor />
      <NavBar />
      <div className="relative w-full flex flex-col min-h-screen justify-between items-center overflow-hidden">
        <CanvasBackground />
        <ScrollShip />

        <div className="relative z-10 w-full flex-grow flex flex-col justify-center items-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
