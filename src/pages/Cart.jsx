import React from "react";
import CartAndWishlistGamesSection from "../components/sections/cart-and-wishlist/CartAndWishlistGamesSection.jsx";
import CartGamesSummaryPanel from "../components/cart-page-side-panel/CartGamesSummaryPanel.jsx";
import { cartGamesData } from "../website-data/CartGamesData.js";
import { CartAndWishlistGamesProvider } from "../components/sections/cart-and-wishlist/CartAndWishlistGamesProvider.jsx";

function Cart() {
  return (
    <CartAndWishlistGamesProvider>
      <div className="mx-2 my-10 flex flex-col items-center 2xs:mx-20">
        <CartAndWishlistGamesSection
          sectionTitle="Cart"
          gamesData={cartGamesData}
          sidePanel={<CartGamesSummaryPanel gamesData={cartGamesData} />}
        />
      </div>
    </CartAndWishlistGamesProvider>
  );
}

export default Cart;
