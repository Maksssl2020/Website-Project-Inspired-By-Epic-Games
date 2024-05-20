import React from "react";
import PlusInCircleIcon from "../main-elements/icons/PlusInCircleIcon.jsx";
import AddToWishlistButton from "../main-elements/AddToWishlistButton.jsx";

function LargeGameCard({ gameData }) {
  const { wallpaperImage, logoImage, title, description, buttonContent } =
    gameData;

  return (
    <div className="flex rounded-lg font-medium text-custom-white ">
      <div className="flex">
        <div>
          <div className="absolute h-full w-full bg-gradient-to-r from-[#0B0B0B] opacity-45"></div>
          <img
            className="inset-0 self-center rounded-lg"
            src={wallpaperImage}
            alt={title}
          />
        </div>
        <div className="absolute flex h-[300px] w-[450px] flex-col content-end max-xl:translate-y-36 max-lg:ml-10 max-lg:space-y-5 max-sm:translate-y-32 max-sm:space-y-4 lg:ml-12 lg:space-y-5 xl:ml-16 xl:translate-y-52 xl:justify-between 2xl:translate-y-72">
          <div className="max-lg:h-[85px] max-lg:w-[250px] max-sm:h-[65px] lg:h-[100px] lg:w-[250px] xl:h-[125px] xl:w-[300px]">
            <img
              className="inset-0 h-full w-auto object-contain"
              src={logoImage}
              alt={title}
            />
          </div>
          <div className="w-[300px] max-lg:hidden lg:text-[14px] xl:text-[16px]">
            {description}
          </div>
          <div className="flex gap-4">
            <button className="rounded-md bg-custom-emerald text-custom-white max-lg:h-[40px] max-lg:w-[100px] max-lg:text-xs max-sm:h-[35px] lg:w-[125px] lg:text-sm xl:w-[150px]">
              {buttonContent}
            </button>
            <AddToWishlistButton
              additionalStyling={[
                "h-[50px]",
                "xl:w-[175px]",
                "hover:bg-custom-gray-100",
                "hover:bg-opacity-40",
                "hover:bg-custom-gray-100",
                "hover:bg-opacity-40",
                "lg:text-xs",
                "lg:w-[150px]",
                "max-lg:text-[10px]",
                "max-lg:h-[40px]",
                "max-sm:h-[35px]",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LargeGameCard;
