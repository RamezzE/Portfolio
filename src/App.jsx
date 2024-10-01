import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalProvider';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import CanvasBackground from './components/CanvasBackground';
import Home from './pages/Home/Home';


const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <>
          <div className="fixed inset-0 bg-gradient-to-br from-black via-[#001] to-black z-0"></div>
          <NavBar />
          <div className="relative w-full flex flex-col justify-center items-center overflow-hidden">
            <CanvasBackground />
            <div className="relative z-10 w-full flex flex-col justify-center items-center">
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </div>
          </div>
        </>
      </Router>
    </GlobalProvider>
  );
};

export default App;
