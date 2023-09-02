import React, { useEffect, useState } from "react";
const Carousel = ({ images }) => {
  const ImgSlide = Object.keys(images);
  const [current, changed] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      changed((a) => 
      {
       return  a ===ImgSlide.length-1 ? 0 : (a + 1)} );
      },3000);
    }, [current]);

  const previous = () => {
   
    changed((b) => (b===0 ? ImgSlide.length-1:b-1));
  };

  const next = () => {
    changed((c) => (c + ImgSlide.length)%ImgSlide.length);
  };

  return (
    <>
      <div className="slider-container">
        <button className="slider-button" onClick={previous}>prev</button>
        <div className="slider-images">
         { 
        // current < ImgSlide.length && current >-1 &&  
        current <ImgSlide.length && current >=0 &&
         <img src={images[current].src} />
         }
        </div>

        <button className="slider-button" onClick={next}> next </button>
      </div>
    </>
  );
};

export default Carousel;
