import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home'; 

const App = () => {
  return (
    <Router>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <Home />
      </div>
    </Router>
  );
};

export default App;
