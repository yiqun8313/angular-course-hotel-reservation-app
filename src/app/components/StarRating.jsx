import { useState } from "react";
import "./StarRating.css";

function StarRating({ totalStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div>
      {[1, 2, 3, 4, 5].map((num) => (
        <span
          key={num}
          onClick={() => setRating(num)}
          onMouseEnter={() => setHover(num)}
          onMouseLeave={() => setHover(0)}
          style={{
            fontSize: 40,
            cursor: "pointer",
            color: num <= (hover || rating) ? "gold" : "#ccc",
          }}
        >
          ★
        </span>
      ))}

      <p>Rating: {rating}</p>
    </div>
  );
}

export default StarRating;
