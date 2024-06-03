import React from "react";
import MainButton from "../main-elements/MainButton.jsx";
import AddToWishlistButton from "../main-elements/AddToWishlistButton.jsx";

function SidePanelButtons() {
  return (
    <div className="flex flex-col gap-4">
      <MainButton
        buttonContent="BUY NOW"
        additionalStyling="w-full h-[50px] bg-custom-emerald"
      />
      <MainButton
        buttonContent="ADD TO CART"
        additionalStyling="w-full h-[50px] hover:bg-custom-gray-100 hover:bg-opacity-15 border-2"
      />
      <AddToWishlistButton
        additionalStyling={
          "h-[40px] hover:bg-custom-gray-100 hover:bg-opacity-15"
        }
      />
    </div>
  );
}

export default SidePanelButtons;
