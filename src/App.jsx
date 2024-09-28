import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Project from './pages/Project/Project';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <Router>
      <div className="w-full h-full flex flex-col justify-center items-center bg-bgColor">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
