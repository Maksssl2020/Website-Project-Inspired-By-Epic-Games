import React, { useContext } from "react";
import CartAndWishlistGameCard from "../cards/CartAndWishlistGameCard.jsx";
import { useCartAndWishlistOptions } from "./CartAndWishlistGamesProvider.jsx";
import { Link } from "react-router-dom";
import SadIcon from "./icons/SadIcon.jsx";

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
        <Link to="/">
          <p className="text-2xl text-custom-gray-100 underline">
            Shop for Games
          </p>
        </Link>
      </div>
    );

  return (
    <div className="w-auto">
      <h1 className="text-5xl font-medium text-custom-white">{`My ${sectionTitle}`}</h1>
      <div className="mt-12 flex">
        <div className="flex">{sectionContent}</div>
        <div className={`ml-8 w-[300px] ${gamesList.length === 0 && "hidden"}`}>
          {sidePanel}
        </div>
      </div>
    </div>
  );
}

export default CartAndWishlistGamesSection;
