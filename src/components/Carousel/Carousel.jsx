import { useState } from 'react';
import { SLIDES } from "./mocks";
import './styles.css';

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => prev === 0 ? SLIDES.length - 1 : prev - 1)
  };

  const goToNext = () => {
    setCurrentIndex((prev) => prev < SLIDES.length - 1 ? prev + 1 : 0)
  };

  const goToSlide = (index) => {
    setCurrentIndex(index)
  };

  return (
    <div className="app">
      <h1>Carousel Component</h1>

      <div className="carousel">
        <button className="carousel-button prev" onClick={goToPrevious}>
          ←
        </button>

        <div className="carousel-content">
          <div 
            className="slide"
            style={{ backgroundColor: SLIDES[currentIndex].color }}
          >
            <h2>{SLIDES[currentIndex].title}</h2>
            <p>{SLIDES[currentIndex].description}</p>
          </div>
        </div>

        <button className="carousel-button next" onClick={goToNext}>
          →
        </button>
      </div>

      <div className="carousel-indicators">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      <div className="carousel-info">
        Slide {currentIndex + 1} of {SLIDES.length}
      </div>
    </div>
  );
}
