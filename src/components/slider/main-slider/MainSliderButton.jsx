import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

function MainSliderButton({ buttonContent }) {
  const [gamePage, setGamePage] = useState(false);
  const { coverImage, title } = buttonContent;

  if (gamePage) {
    return <Navigate to="/game" />;
  }

  return (
    <button
      onClick={() => setGamePage(true)}
      className="group flex items-center gap-2 rounded-lg border-2 border-transparent px-3 py-3 hover:border-custom-emerald hover:bg-custom-gray-300 hover:text-custom-emerald 2xl:h-[85px] 2xl:w-[180px] 2xl:text-sm 3xl:h-[105px] 3xl:w-[250px]"
    >
      <img
        className="inset-0 h-full rounded-lg transition-transform ease-in-out group-hover:scale-110"
        src={coverImage}
        alt={title}
      />
      <span>{title}</span>
    </button>
  );
}

export default MainSliderButton;
