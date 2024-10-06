import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalProvider';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CanvasBackground from './components/CanvasBackground';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound';


const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <>
          <div className="fixed inset-0 bg-gradient-to-br from-black via-[#001] to-black z-0"></div>
          <NavBar />
          <div className="relative w-full flex flex-col min-h-screen justify-between items-center overflow-hidden">
            <CanvasBackground />
            
            <div className="relative z-10 w-full flex-grow flex flex-col justify-center items-center">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="*"
                  element={<NotFound />}/>
              </Routes>
            </div>
  
            <Footer />
          </div>
        </>
      </Router>
    </GlobalProvider>
  );
  
};

export default App;
