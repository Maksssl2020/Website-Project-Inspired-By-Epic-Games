import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function MainSliderButton({ buttonContent }) {
  const [gamePage, setGamePage] = useState(false);
  const { coverImage, title } = buttonContent;

  if (gamePage) {
    return <Navigate to="/game" />;
  }

  return (
    <button
      onClick={() => setGamePage(true)}
      className="group flex items-center gap-2 rounded-lg border-2 border-transparent px-3 py-3 hover:border-custom-emerald hover:bg-custom-gray-300 hover:text-custom-emerald md:h-[50px] md:w-[160px] lg:h-[70px] lg:w-[160px] xl:h-[85px] xl:w-[180px] 2xl:h-[105px] 2xl:w-[250px]"
    >
      <img
        className="inset-0 h-full rounded-lg transition-transform ease-in-out group-hover:scale-110"
        src={coverImage}
        alt={title}
      />
      <span className="xl:text-sm">{title}</span>
    </button>
  );
}

export default MainSliderButton;
