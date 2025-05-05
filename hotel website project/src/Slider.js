import React from 'react';
import { useState, useEffect } from 'react';
import image1 from './image/image1.PNG';
import image2 from './image/photo-1618773928121-c32242e63f39.avif';
import image3 from './image/premium_photo-1661929519129-7a76946c1d38.avif';
import image4 from './image/premium_photo-1661964301291-75df9dd37f23.avif';
import image5 from './image/premium_photo-1676321688630-9558e7d2be10.avif'; 
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";


const images = [image1, image2, image3, image4, image5]

const Slider = () => {
    const [currentImage, setCurrentImage] = useState(0); // Current image index
  const [progress, setProgress] = useState(0); // Progress bar value (0-100%)

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 5); // Increment progress by 5% per second
      } else {
        handleNext(); // Automatically move to the next image
      }
    }, 1000); // Timer interval: 1 second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [progress]);

  const handleNext = () => {
    setProgress(0); // Reset progress
    setCurrentImage((currentImage + 1) % images.length); // Move to the next image
  };

  const handlePrevious = () => {
    setProgress(0); // Reset progress
    setCurrentImage((currentImage - 1 + images.length) % images.length); // Move to the previous image
  };

  return (
    <div id='slider-image-container'>
      
      {/* Display the current image */}
      <div id='slider-body'>
         <button
          onClick={handlePrevious}
          className='slider-btn-left'
        >
          <FaAngleLeft style={{ color:"#AAAAAA", fontSize:"24px", fontWeight:"400"}} />
        </button>

         <div id='slider-img-div'>
        <img
        src={images[currentImage]}
        alt={`Slide ${currentImage + 1}`}
        id='slider-img'
      />
        </div>
        <button
          onClick={handleNext}
          className='slider-btn-right'
        >
          <FaAngleRight style={{ color:"#AAAAAA",fontSize:"24px", fontWeight:"400"}}/>
        </button>

        
     </div>

      {/* Progress bars */}
      <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", paddingLeft:"15px", paddingRight:"15px"}}>
        {images.map((_, index) => (
          <div
            key={index}
            style={{
              flex: "0 1 15%",
              height: "5px",
              background: "#e0e0e0",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Progress indicator for the current bar */}
            {index === currentImage && (
              <div
                style={{
                  height: "100%",
                  background: "#133E87",
                  width: `${progress}%`,
                  transition: "width 1s linear",
                }}
              ></div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}

export default Slider