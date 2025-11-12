import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect = (f) => f }) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);

const createArray = (length) => [...Array(length)];

export default function StarRating({
  totalStars = 5,
  style = {}, 
  selectedStars = 0,
  onRate = f => f,
   ...props
   }) {
  // const [selectedStars, setSelectedStars] = useState(3);

  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star key={i} selected={selectedStars > i} onSelect={() => onRate(i + 1)}/>
      ))}
      <p>
        {selectedStars} of {totalStars} stars
        </p>
    </>
    // <div style={{padding: "5px", ...style}} {...props}>
    //   {createArray(totalStars).map((n,i) => (
    //     <Star
    //     key={i}
    //     selected={selectedStars > i }
    //     onSelect={() => setSelectedStars(i +1)}
    //     />
    //   ))}
    //   <p>{selectedStars} of {totalStars} stars</p>
    // </div>
  );
}
