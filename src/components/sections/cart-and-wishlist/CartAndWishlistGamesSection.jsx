import React from "react";
import CartAndWishlistGameCard from "../../cards/cart-wishlist-game-card/CartAndWishlistGameCard.jsx";
import { useCartAndWishlistOptions } from "./CartAndWishlistGamesProvider.jsx";
import SadIcon from "../icons/SadIcon.jsx";

function CartAndWishlistGamesSection({ sectionTitle, gamesData, sidePanel }) {
  const { gamesList, removeGameFromList, updateGameList, isLoading } =
    useCartAndWishlistOptions();

  React.useEffect(() => {
    updateGameList(gamesData);
  }, [gamesData, updateGameList]);

  if (isLoading) {
    return (
      <div className="flex h-[500px] w-full flex-col items-center justify-center space-y-6">
        <h1 className="text-5xl text-custom-white">Loading....</h1>
      </div>
    );
  }

  let sectionContent =
    gamesList.length > 0 ? (
      <ul className="flex-1 space-y-5">
        {gamesList.map((game, index) => (
          <li key={index}>
            <CartAndWishlistGameCard
              gameData={game}
              onRemove={() => removeGameFromList(index)}
            />
          </li>
        ))}
      </ul>
    ) : (
      <div className="flex h-[500px] w-full flex-col items-center justify-center space-y-6">
        <SadIcon />
        <h1 className="text-5xl text-custom-white">
          {`You haven't added anything to your ${sectionTitle.toLowerCase()} yet!`}
        </h1>
        <p className="text-2xl text-custom-gray-100">
          Go to the shop and add games
        </p>
      </div>
    );

  const sidePanelsResponsiveStyling =
    sectionTitle === "Wishlist"
      ? "max-xl:hidden"
      : "max-xl:w-full max-xl:ml-0 max-xl:mt-8";

  return (
    <div className="w-auto">
      <h1 className="text-2xl font-medium text-custom-white sm:text-3xl lg:text-5xl">{`My ${sectionTitle}`}</h1>
      <div className="mt-12 flex max-xl:flex-col">
        <div className="flex">{sectionContent}</div>
        <div
          className={`ml-8 xl:w-[250px] 2xl:w-[300px] ${sidePanelsResponsiveStyling} ${gamesList.length === 0 && "hidden"}`}
        >
          {React.cloneElement(sidePanel, { gamesData: gamesList })}
        </div>
      </div>
    </div>
  );
}

export default CartAndWishlistGamesSection;
