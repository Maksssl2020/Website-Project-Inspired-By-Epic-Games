import React from "react";
import { Link } from "react-router-dom";

function HeaderButton({
  buttonContent,
  additionalStyling = undefined,
  link = "/",
  isButtonActive,
  onClick,
}) {
  let buttonStyle = `rounded-lg border-2 transition-colors duration-300 px-2 py-1 hover:border-custom-emerald hover:bg-custom-gray-300 hover:text-custom-emerald ${isButtonActive ? "border-custom-emerald bg-custom-gray-300 text-custom-emerald" : "border-transparent"}`;

  if (Array.isArray(additionalStyling)) {
    additionalStyling.forEach((style) => (buttonStyle += ` ${style}`));
  }

  return (
    <Link to={link}>
      <button onClick={onClick} className={buttonStyle}>
        {buttonContent}
      </button>
    </Link>
  );
}

export default HeaderButton;
