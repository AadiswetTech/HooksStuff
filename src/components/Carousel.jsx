import React, { useEffect, useState } from "react";
const Carousel = ({ images }) => {
  const ImgSlide = Object.keys(images);
  const [current, changed] = useState(0);
//   useEffect(() => {
//     setTimeout(() => {
//       changed((a) => {
// console.log(a,'p')
//    // set

//        return  a > ImgSlide.length-2  ? 0 : (a + 1)} );

//     },5000);
//     console.log(current, 'c');
//   }, [current]);

  const previous = () => {
    // changed((b) => (b - 1 + ImgSlide.length) % ImgSlide.length);
    // changed(current-1);
    changed((b)=>b-1
    
    )
  };
  const next = () => {
    // changed((c) => (c + 1) % ImgSlide.length);
    changed((c) => (c + 1));
  };

  return (
    <>
      <div className="slider-container">
        <button className="slider-button" onClick={previous}>
          prev
        </button>
        <div className="slider-images">
          {/* {ImgSlide.map((name, index) => ( */}
         { current < ImgSlide.length && current >-1 &&  <img
            // key={current}
            src={images[current].src}
            //className={`slider-image ${index===current ? 'active' :''}`}
          />}
          {/* ))} */}
        </div>
        <button className="slider-button" onClick={next}>
          next
        </button>
      </div>
    </>
  );
};

export default Carousel;
