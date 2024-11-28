import React, { useState } from "react";
import "./banner.css";

const Banner = () => {

  const images = [
    "/assets/frente-loja.jpg",
    "/assets/loja-interna.jpg",
    "/assets/roupas-arara.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel-container">
      <button className="carousel-btn left" onClick={handlePrev}>
        &lt;
      </button>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carousel-image"
      />
      <button className="carousel-btn right" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default Banner;
