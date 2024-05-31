import React from "react";
import { Link } from "react-router-dom";

function ImageButton({ image, imageTitle }) {
  return (
    <Link to="/account">
      <button className="relative overflow-hidden max-sm:h-[50px] max-sm:w-[60px] sm:h-[60px] sm:w-[70px]">
        <div className="absolute inset-0 rounded-lg bg-transparent hover:bg-custom-gray-100 hover:opacity-20"></div>
        <img
          className="inset-0 h-full w-full rounded-lg object-cover"
          src={image}
          alt={imageTitle}
        />
      </button>
    </Link>
  );
}

export default ImageButton;
