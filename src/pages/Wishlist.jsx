import React from "react";
import FiltersPanel from "../components/filters-panel/FiltersPanel.jsx";
import CartAndWishlistGamesSection from "../components/games-section/CartAndWishlistGamesSection.jsx";
import { wishlistGamesData } from "../website-data/WishlistGamesData.js";
import { CartAndWishlistGamesProvider } from "../components/games-section/CartAndWishlistGamesProvider.jsx";

function Wishlist() {
  return (
    <CartAndWishlistGamesProvider>
      <div className="mx-20 my-10 flex flex-col items-center">
        <CartAndWishlistGamesSection
          sectionTitle={"Wishlist"}
          gamesData={wishlistGamesData}
          sidePanel={
            <FiltersPanel
              filtersData={["EVENTS", "GENRE", "FEATURES", "PLATFORM"]}
            />
          }
        />
      </div>
    </CartAndWishlistGamesProvider>
  );
}

export default Wishlist;
