import React from "react";
import CartAndWishlistGamesSection from "../components/games-section/CartAndWishlistGamesSection.jsx";
import { wishlistGamesData } from "../website-data/WishlistGamesData.js";
import CartGamesSummaryPanel from "../components/cart-page-side-panel/CartGamesSummaryPanel.jsx";
import { cartGamesData } from "../website-data/CartGamesData.js";

function Cart() {
  return (
    <div className="mx-20 my-10">
      <CartAndWishlistGamesSection
        sectionTitle={"My Cart"}
        gamesData={cartGamesData}
        sidePanel={<CartGamesSummaryPanel gamesData={cartGamesData} />}
      />
    </div>
  );
}

export default Cart;
