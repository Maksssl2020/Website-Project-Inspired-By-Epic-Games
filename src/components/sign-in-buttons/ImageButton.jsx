import React from "react";
import { Link } from "react-router-dom";

function ImageButton({ image, imageTitle }) {
  return (
    <Link to="/account">
      <button className="h-[60px] w-[70px] overflow-hidden">
        <div className="absolute h-[60px] w-[70px] rounded-lg bg-transparent hover:bg-custom-gray-100 hover:opacity-20"></div>
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
