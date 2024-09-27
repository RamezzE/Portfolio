import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold underline">Welcome to the Home Page!</h1>
    </div>
  );
};

export default Home;
