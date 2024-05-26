import React, { useContext } from "react";
import PegiInfoButton from "../main-elements/PegiInfoButton.jsx";
import GamePrice from "../main-elements/GamePrice.jsx";
import MainButton from "../main-elements/MainButton.jsx";

function CartAndWishlistGameCard({ gameData, sectionTitle, onAdd, onRemove }) {
  const { image, edition, title, baseGamePrice, discount, pegiInfo } = gameData;

  function calcSaleEndDate() {
    const now = new Date(Date.now());
    const day = now.getDay() + 7;
    const month = now.getMonth();
    const year = now.getFullYear();

    return `${day} / ${month} / ${year} at 08:00 PM`;
  }

  let buttonContent =
    sectionTitle === "Cart" ? "MOVE TO WISHLIST" : "ADD TO CART";

  return (
    <div className="flex h-[355px] w-[1100px] justify-between rounded-lg border-2 border-custom-emerald p-8">
      <div className="flex">
        <div className="h-[175px] w-[130px]">
          <div className="absolute h-[175px] w-[130px] rounded-lg border-2 border-transparent bg-transparent hover:cursor-pointer hover:border-custom-emerald hover:bg-custom-gray-100 hover:bg-opacity-20"></div>
          <img
            className="inset-0 h-full w-full self-center rounded-lg object-cover"
            src={image}
            alt={title}
          />
        </div>
        <div className="ml-4">
          <p className="text-sm text-custom-gray-100">{edition}</p>
          <p className="mb-6 text-2xl text-custom-white">{title}</p>
          <PegiInfoButton pegiInfo={pegiInfo} />
        </div>
      </div>
      <div className="flex flex-col text-custom-white">
        <div className="mb-auto ml-auto flex flex-col items-end">
          <GamePrice baseGamePrice={baseGamePrice} discount={discount} />
          {discount !== 0.0 ? (
            <p className="mt-2 text-sm">{`Sale ends ${calcSaleEndDate()}`}</p>
          ) : undefined}
        </div>
        <div className="space-x-4">
          <MainButton
            buttonContent={"Remove"}
            additionalStyling={[
              "text-custom-gray-100",
              "underline",
              "hover:no-underline",
            ]}
            onClickAction={onRemove}
          />
          <MainButton
            buttonContent={buttonContent}
            additionalStyling={[
              "border-2",
              "py-4",
              "hover:bg-custom-gray-100",
              "hover:bg-opacity-20",
              "w-[200px]",
            ]}
            onClickAction={onAdd}
          />
        </div>
      </div>
    </div>
  );
}

export default CartAndWishlistGameCard;
