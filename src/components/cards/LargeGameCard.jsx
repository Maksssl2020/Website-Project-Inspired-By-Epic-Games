import React from "react";
import PlusInCircleIcon from "../main-elements/icons/PlusInCircleIcon.jsx";
import AddToWishlistButton from "../main-elements/AddToWishlistButton.jsx";

function LargeGameCard({ gameData }) {
  const { wallpaperImage, logoImage, title, description, buttonContent } =
    gameData;

  return (
    <div className="flex rounded-lg font-medium text-custom-white 3xl:h-[640px] 3xl:w-[1140px]">
      <div className="flex">
        <div>
          <div className="absolute h-[641.5px] w-[855px] bg-gradient-to-r from-[#0B0B0B] opacity-45"></div>
          <img
            className="inset-0 self-center rounded-lg"
            src={wallpaperImage}
            alt={title}
          />
        </div>
        <div className="absolute ml-16 flex h-[300px] w-[450px] translate-y-52 flex-col content-end justify-between 3xl:translate-y-72">
          <div className="h-[125px] w-[300px]">
            <img
              className="inset-0 h-full w-auto object-contain"
              src={logoImage}
              alt={title}
            />
          </div>
          <div className="w-[300px]">{description}</div>
          <div className="flex gap-4">
            <button className="w-[150px] rounded-md bg-custom-emerald text-custom-white">
              {buttonContent}
            </button>
            <AddToWishlistButton
              additionalStyling={[
                "h-[50px]",
                "w-[175px]",
                "hover:bg-custom-gray-100",
                "hover:bg-opacity-40",
                "hover:bg-custom-gray-100",
                "hover:bg-opacity-40",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LargeGameCard;
