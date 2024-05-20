import React from "react";

function ImageButton({ image, imageTitle }) {
  return (
    <button className="h-[65px] w-[65px]">
      <div className="absolute h-[65px] w-[65px] bg-transparent hover:bg-custom-gray-100 hover:opacity-20"></div>
      <img className="rounded-lg" src={image} alt={imageTitle} />
    </button>
  );
}

export default ImageButton;
