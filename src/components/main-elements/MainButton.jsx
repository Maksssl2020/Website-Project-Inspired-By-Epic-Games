import React from "react";
import { Link } from "react-router-dom";

function MainButton({ buttonContent, additionalStyling, link = "" }) {
  let buttonStyle = "rounded-lg px-2 py-1 hover:border-custom-emerald";

  if (Array.isArray(additionalStyling)) {
    additionalStyling.forEach((style) => (buttonStyle += ` ${style}`));
  }

  return (
    <button className={buttonStyle}>
      <Link to={link}>{buttonContent}</Link>
    </button>
  );
}

export default MainButton;
