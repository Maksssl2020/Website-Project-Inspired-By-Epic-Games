import React from "react";

function ImageButton({ image, imageTitle }) {
  return (
    <button className="h-[60px] w-[70px] overflow-hidden">
      <div className="absolute h-[60px] w-[70px] rounded-lg bg-transparent hover:bg-custom-gray-100 hover:opacity-20"></div>
      <img
        className="inset-0 h-full w-full rounded-lg object-cover"
        src={image}
        alt={imageTitle}
      />
    </button>
  );
}

export default ImageButton;
