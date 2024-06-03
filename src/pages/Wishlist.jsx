import React from "react";
import FiltersPanel from "../components/filters-panel/FiltersPanel.jsx";
import CartAndWishlistGamesSection from "../components/sections/cart-and-wishlist/CartAndWishlistGamesSection.jsx";
import { wishlistGamesData } from "../website-data/WishlistGamesData.js";
import { CartAndWishlistGamesProvider } from "../components/sections/cart-and-wishlist/CartAndWishlistGamesProvider.jsx";
import { filtersData } from "../website-data/FiltersData.js";

function Wishlist() {
  const chosenFiltersForWishlist = ["EVENTS", "GENRE", "FEATURES", "PLATFORM"];

  return (
    <CartAndWishlistGamesProvider>
      <div className="mx-2 my-10 flex w-auto flex-col items-center 2xs:mx-20">
        <CartAndWishlistGamesSection
          sectionTitle="Wishlist"
          gamesData={wishlistGamesData}
          sidePanel={
            <FiltersPanel
              filtersData={filtersData.filter((item) =>
                chosenFiltersForWishlist.includes(item.filterTitle),
              )}
            />
          }
        />
        {/*  */}
      </div>
    </CartAndWishlistGamesProvider>
  );
}

export default Wishlist;
