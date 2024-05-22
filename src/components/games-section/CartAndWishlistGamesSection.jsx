import React from "react";
import CartAndWishlistGameCard from "../cards/CartAndWishlistGameCard.jsx";

function CartAndWishlistGamesSection({ sectionTitle, gamesData, sidePanel }) {
  return (
    <>
      <h1 className="text-5xl font-medium text-custom-white">{sectionTitle}</h1>
      <div className="mt-12 flex">
        <div className="flex">
          <ul className="flex-1 space-y-5">
            {gamesData.map((game, index) => (
              <li key={index}>
                <CartAndWishlistGameCard gameData={game} />
              </li>
            ))}
          </ul>
        </div>
        <div className="ml-8 w-[300px]">{sidePanel}</div>
      </div>
    </>
  );
}

export default CartAndWishlistGamesSection;
