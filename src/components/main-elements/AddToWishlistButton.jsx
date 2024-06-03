import React, { useState } from "react";
import PlusInCircleIcon from "./icons/PlusInCircleIcon.jsx";
import CheckCircleIcon from "../payment-page-payment-methods/icons/CheckCircleIcon.jsx";

function AddToWishlistButton({ additionalStyling }) {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleAddToWishlist() {
    setIsAnimating(true);

    setTimeout(() => {
      setIsInWishlist(!isInWishlist);
      setIsAnimating(false);
    }, 500);
  }

  let style =
    "flex items-center justify-center gap-1 rounded-lg border-2 text-sm uppercase transition-colors duration-300 hover:border-custom-emerald".concat(
      " ",
      additionalStyling,
    );

  return (
    <button className={style} onClick={handleAddToWishlist}>
      <div className="relative">
        <span
          className={`absolute inset-0 self-center ${isAnimating ? "animate-spin stroke-custom-white" : "stroke-none"}`}
        >
          <PlusInCircleIcon />
        </span>
        <span className={isAnimating ? "stroke-none" : "stroke-custom-white"}>
          {isInWishlist ? <CheckCircleIcon /> : <PlusInCircleIcon />}
        </span>
      </div>
      <span>{isInWishlist ? "In wishlist" : "Add to wishlist"}</span>
    </button>
  );
}

export default AddToWishlistButton;
