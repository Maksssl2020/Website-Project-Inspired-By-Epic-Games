import React from "react";
import CartAndWishlistGamesSection from "../components/games-section/CartAndWishlistGamesSection.jsx";
import CartGamesSummaryPanel from "../components/cart-page-side-panel/CartGamesSummaryPanel.jsx";
import { cartGamesData } from "../website-data/CartGamesData.js";
import { CartAndWishlistGamesProvider } from "../components/games-section/CartAndWishlistGamesProvider.jsx";

function Cart() {
  return (
    <CartAndWishlistGamesProvider>
      <div className="mx-20 my-10 flex flex-col items-center">
        <CartAndWishlistGamesSection
          sectionTitle={"Cart"}
          gamesData={cartGamesData}
          sidePanel={<CartGamesSummaryPanel gamesData={cartGamesData} />}
        />
      </div>
    </CartAndWishlistGamesProvider>
  );
}

export default Cart;
