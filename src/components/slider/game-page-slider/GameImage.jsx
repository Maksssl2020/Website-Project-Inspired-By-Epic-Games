import React from "react";

function GameImage({ image, title }) {
  return (
    <div className="h-[585px] w-[1050px]">
      <img
        className="inset-0 self-center rounded-lg object-cover"
        src={image}
        alt={title}
      />
    </div>
  );
}

export default GameImage;
