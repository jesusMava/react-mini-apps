import React from "react";
import StarRating from "./StarRating";

const Color = ({ title, color, rating }) => {
  return (
    <section>
      <h1>{title}</h1>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating selectedStars={rating} />
    </section>
  );
};

export default Color;
