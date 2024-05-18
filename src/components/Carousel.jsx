import React from "react";
import "../styles/Carousel.css";
import ArrowLeft from "../assets/images/icons/arrow_left.svg";
import ArrowRight from "../assets/images/icons/arrow_right.svg";
const Carousel = () => {
  return (
    <div className="carousel flex justify-between items-center px-4">
      <img src={ArrowLeft} className="arrow_left" alt="mover izquierda" />
      <img src={ArrowRight} className="arrow_right" alt="mover derecha" />
    </div>
  );
};

export default Carousel;
