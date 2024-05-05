import React from "react";
import { Link } from "react-router-dom";

function HeaderButton({
  buttonContent,
  additionalStyling = undefined,
  link = "/",
}) {
  let buttonStyle =
    "rounded-lg border-2 border-transparent px-2 py-1 hover:border-custom-emerald hover:bg-custom-gray-300 hover:text-custom-emerald";

  if (Array.isArray(additionalStyling)) {
    additionalStyling.forEach((style) => (buttonStyle += ` ${style}`));
  }

  return (
    <button className={buttonStyle}>
      <Link to={link}>{buttonContent}</Link>
    </button>
  );
}

export default HeaderButton;
