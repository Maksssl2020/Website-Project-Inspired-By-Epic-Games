import React from "react";

function MainSliderButton({ buttonContent }) {
  const { coverImage, title } = buttonContent;

  return (
    <button className="3xl:h-[105px] 3xl:w-[250px] group flex items-center gap-2 rounded-lg border-2 border-transparent px-3 py-3 hover:border-custom-emerald hover:bg-custom-gray-300 hover:text-custom-emerald 2xl:h-[85px] 2xl:w-[180px] 2xl:text-sm">
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
