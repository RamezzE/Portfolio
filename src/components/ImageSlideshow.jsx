/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';


const ImageSlideshow = ({ data = null, containerStyles = ""}) => {

  if (!data)
    return null;
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = data.images;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={`relative flex items-center justify-center overflow-hidden ${containerStyles}`}>      <img
        src={images[currentIndex]}
        alt={data.name}
        className="rounded-md w-full h-full object-contain"
      />
    </div>
  );
};

export default ImageSlideshow;
