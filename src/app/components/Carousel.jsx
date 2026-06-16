import { useState } from "react";
import "./Carousel.css";

function Carousel({ images }) {
  const [index, setIndex] = useState(0);

  function showPrevious() {
    setIndex((current) => (current - 1 + images.length) % images.length);
  }

  function showNext() {
    setIndex((current) => (current + 1) % images.length);
  }

  if (images.length === 0) return null;

  return (
    <div className="carousel">
      <button type="button" onClick={showPrevious}>
        Prev
      </button>

      <img src={images[index]} alt={`Slide ${index + 1}`} />
      {/* /这是核心 */}

      <button type="button" onClick={showNext}>
        Next
      </button>
    </div>
  );
}

export default Carousel;
