import React from "react";
import PlusInCircleIcon from "./icons/PlusInCircleIcon.jsx";

function AddToWishlistButton({ additionalStyling }) {
  let style =
    "flex items-center justify-center gap-1 rounded-lg border-2 text-sm uppercase hover:border-custom-emerald";

  if (Array.isArray(additionalStyling)) {
    additionalStyling.forEach((data) => (style += ` ${data}`));
  }

  return (
    <button className={style}>
      <PlusInCircleIcon />
      <span>Add to wishlist</span>
    </button>
  );
}

export default AddToWishlistButton;
