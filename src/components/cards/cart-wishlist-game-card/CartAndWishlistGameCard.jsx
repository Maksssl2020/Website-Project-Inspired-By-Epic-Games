import React from "react";
import PegiInfoButton from "../../main-elements/PegiInfoButton.jsx";
import MainButton from "../../main-elements/MainButton.jsx";
import ExtendedGamePriceInfoLabel from "./ExtendedGamePriceInfoLabel.jsx";

function CartAndWishlistGameCard({ gameData, sectionTitle, onAdd, onRemove }) {
  const { image, edition, title, pegiInfo } = gameData;

  let buttonContent =
    sectionTitle === "Cart" ? "MOVE TO WISHLIST" : "ADD TO CART";

  return (
    <div className="flex justify-between rounded-lg border-2 border-custom-emerald p-8 max-lg:flex-col max-3xs:w-full 3xs:w-[430px] xs:w-[500px] sm:w-[600px] md:w-[700px] lg:h-[385px] lg:w-[900px] 2xl:w-[1100px]">
      <div className="flex max-lg:flex-col">
        <div className="relative  max-lg:mb-4 max-md:h-[115px] max-md:w-[85px] md:h-[135px] md:w-[100px] lg:h-[150px] lg:w-[115px] xl:h-[175px] xl:w-[130px]">
          <div className="absolute inset-0 rounded-lg border-2 border-transparent bg-transparent transition-colors duration-300 hover:cursor-pointer hover:border-custom-emerald hover:bg-custom-gray-100 hover:bg-opacity-20"></div>
          <img
            className="inset-0 h-full w-full self-center rounded-lg object-cover"
            src={image}
            alt={title}
          />
        </div>
        <div className="lg:ml-4">
          <p className="text-custom-gray-100 3xs:text-xs">{edition}</p>
          <p className="mb-6 text-custom-white lg:text-xl xl:text-2xl">
            {title}
          </p>
          <p className="mb-6 text-custom-white lg:hidden">
            <ExtendedGamePriceInfoLabel priceData={gameData} />
          </p>
          <p className="max-xl:text-sm ">
            <PegiInfoButton pegiInfo={pegiInfo} />
          </p>
        </div>
      </div>
      <div className="flex flex-col text-custom-white">
        <span className="mb-auto flex items-end max-lg:hidden">
          <ExtendedGamePriceInfoLabel priceData={gameData} />
        </span>
        <div className="max-lg:mt-4 max-lg:flex max-lg:flex-col lg:space-x-4">
          <MainButton
            buttonContent={"Remove"}
            additionalStyling="text-custom-gray-100 underline hover:no-underline max-lg:text-sm max-lg:mb-2"
            onClickAction={onRemove}
          />
          <MainButton
            buttonContent={buttonContent}
            additionalStyling="border-2 py-4 hover:bg-custom-gray-100 hover:bg-opacity-20 lg:w-[200px] max-lg:w-full max-lg:text-sm"
            onClickAction={onAdd}
          />
        </div>
      </div>
    </div>
  );
}

export default CartAndWishlistGameCard;
