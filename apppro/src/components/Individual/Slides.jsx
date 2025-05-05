import React from "react";
import "../../Styles/Slides/slide1.css";

import img1 from "../../Assets/Slides/slid1.png";
export function ImageSlider() {
  return (
    <div className="slider-container">
      <div className="slider-track">
        <img src={img1} alt="1" className="slide" />
      </div>
    </div>
  );
}

