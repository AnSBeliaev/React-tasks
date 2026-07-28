// import { useState, useEffect, useRef } from 'react';
// import './styles.css';
import { useHover } from "./useHover";

export const HoverTest = () => {
  const [buttonRef, isButtonHovered] = useHover();
  const [cardRef, isCardHovered] = useHover();
  const [imageRef, isImageHovered] = useHover();

  return (
    <div className="app">
      <h1>useHover Hook</h1>

      <div className="info-box">
        <p>
          Hover over elements below to see the hook in action.
          Each element independently tracks its hover state.
        </p>
      </div>

      <div className="demo-section">
        <h3>Demo 1: Button</h3>
        <button
          ref={buttonRef}
          className={`demo-button ${isButtonHovered ? 'hovered' : ''}`}
        >
          {isButtonHovered ? 'You are hovering!' : 'Hover over me'}
        </button>
        <p className="status">
          Status: <span className={`badge ${isButtonHovered ? 'active' : 'inactive'}`}>
            {isButtonHovered ? 'Hovered' : 'Not Hovered'}
          </span>
        </p>
      </div>

      <div className="demo-section">
        <h3>Demo 2: Card</h3>
        <div
          ref={cardRef}
          className={`demo-card ${isCardHovered ? 'hovered' : ''}`}
        >
          <h4>Interactive Card</h4>
          <p>Hover over this card to see the effect</p>
        </div>
        <p className="status">
          Status: <span className={`badge ${isCardHovered ? 'active' : 'inactive'}`}>
            {isCardHovered ? 'Hovered' : 'Not Hovered'}
          </span>
        </p>
      </div>

      <div className="demo-section">
        <h3>Demo 3: Image</h3>
        <div
          ref={imageRef}
          className={`demo-image ${isImageHovered ? 'hovered' : ''}`}
        >
          🖼️ Image Placeholder
        </div>
        <p className="status">
          Status: <span className={`badge ${isImageHovered ? 'active' : 'inactive'}`}>
            {isImageHovered ? 'Hovered' : 'Not Hovered'}
          </span>
        </p>
      </div>
    </div>
  );
}