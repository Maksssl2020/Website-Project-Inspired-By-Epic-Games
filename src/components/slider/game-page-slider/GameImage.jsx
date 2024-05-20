import React from "react";

function GameImage({ image, title }) {
  return (
    <div>
      <img
        className="inset-0 self-center rounded-lg object-cover"
        src={image}
        alt={title}
      />
    </div>
  );
}

export default GameImage;
