import React from "react";
import FiltersPanel from "../components/filters-panel/FiltersPanel.jsx";
import CartAndWishlistGamesSection from "../components/games-section/CartAndWishlistGamesSection.jsx";
import { wishlistGamesData } from "../website-data/WishlistGamesData.js";

function Wishlist() {
  return (
    <div className="mx-20 my-10">
      <CartAndWishlistGamesSection
        sectionTitle={"Wishlist"}
        gamesData={wishlistGamesData}
        sidePanel={<FiltersPanel />}
      />
    </div>
  );
}

export default Wishlist;
