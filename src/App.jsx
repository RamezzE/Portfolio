import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home/Home'; 

const App = () => {
  return (
    <Router>
      <div className="w-full h-full flex flex-col justify-center items-center p-5">
        
        <Home />
      </div>
    </Router>
  );
};

export default App;
