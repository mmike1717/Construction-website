import React, { useState, useEffect } from 'react';


const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [fade, setFade] = useState(false);

  // Function to move to the next image
  const nextImage = () => {
    setNextIndex((currentIndex + 1) % images.length);
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(false);
    }, 500); // Adjust the duration to match the CSS transition time
  };

  // Function to move to the previous image
  const prevImage = () => {
    setNextIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setFade(false);
    }, 500); // Adjust the duration to match the CSS transition time
  };

  // Automatically move to the next image every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <button className="prev" onClick={prevImage}>&#10094;</button>
      <img
        className={`image ${fade ? 'fade' : ''}`}
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
      />
      <button className="next" onClick={nextImage}>&#10095;</button>
    </div>
  );
};

export default Carousel;
