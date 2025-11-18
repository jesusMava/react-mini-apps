import React, { useContext } from "react";
// import { ColorContext } from "./index"; // No longer needed since we have a separate provider file
import { useColors } from "./hooks/useColors";
import Color from "./Color";

export default function ColorList() {
  // The useContext hook requires the context instance to obtain
  // values from it
  // const { colors } = useContext(ColorContext); // No longer needed since we have a custom hook
  const { colors } = useColors();
  if (!colors.length) return <div>No Colors Listed.</div>;

  return (
    <div className="color-list">
      {colors.map((color) => (
        <Color
            key={color.id}
            {...color} 
         />
      ))}
    </div>
  );
}
