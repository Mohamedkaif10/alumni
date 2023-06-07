// import React from "react"
// import Heroslider,{Slide} from 'hero-slider'
// import img1 from"../Images/Img1.jpeg"
// import img2 from"../Images/Img2.jpeg"
// import img3 from"../Images/Img3.jpeg"
// import img4 from"../Images/Img4.jpeg"
// import img5 from"../Images/Img5.jpeg"
// import { Fragment } from "react"
// const Slider=()=>{
//     return(
//         <Fragment>
//             <div className={classes.slider}>
//                 <div className={classes.slides}>
//                     <input type="radio1" name="radio-btn" id="radio1"></input>
//                    <input type="radio2" name="radio-btn" id="radio2"></input>
//                     <input type="radio3" name="radio-btn" id="radio3"></input>
//                     <input type="radio4" name="radio-btn" id="radio4"></input>
//                     <input type="radio5" name="radio-btn" id="radio5"></input>
//                     <div className={classes.slide-first}>
//                         <img src={img1}></img>
//                     </div>
//                     <div className={classes.slide}>
//                         <img src={img2}></img>
//                     </div>
//                     <div className={classes.slide}>
//                         <img src={img3}></img>
//                     </div>
//                     <div className={classes.slide}>
//                         <img src={img4}></img>
//                     </div>
//                     <div className={classes.slide}>
//                         <img src={img5}></img>
//                     </div>
//                     <div className={nav-auto}>
//                         <div className={classes.autobtn1}></div>
//                         <div className={classes.autobtn2}></div>
//                         <div className={classes.autobtn3}></div>
//                         <div className={classes.autobtn4}></div>
//                         <div className={classes.autobtn5}></div>
//                         </div>                
//                 </div>
//                 <div className={nav-manual}>
//                      <label for="radio1" className={classes.man-btn}></label>
//                      <label for="radio2" className={classes.man-btn}></label>
//                      <label for="radio3" className={classes.man-btn}></label>
//                      <label for="radio4" className={classes.man-btn}></label>
//                      <label for="radio5" className={classes.man-btn}></label>
//                 </div>
//             </div>
//         </Fragment>
//     )
// }
// export default Slider
import { useState } from "react";

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;