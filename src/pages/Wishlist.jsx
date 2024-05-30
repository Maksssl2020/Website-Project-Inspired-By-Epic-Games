import React from "react";
import FiltersPanel from "../components/filters-panel/FiltersPanel.jsx";
import CartAndWishlistGamesSection from "../components/sections/cart-and-wishlist/CartAndWishlistGamesSection.jsx";
import { wishlistGamesData } from "../website-data/WishlistGamesData.js";
import { CartAndWishlistGamesProvider } from "../components/sections/cart-and-wishlist/CartAndWishlistGamesProvider.jsx";

function Wishlist() {
  return (
    <CartAndWishlistGamesProvider>
      <div className="mx-2 my-10 flex w-auto flex-col items-center 2xs:mx-20">
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
