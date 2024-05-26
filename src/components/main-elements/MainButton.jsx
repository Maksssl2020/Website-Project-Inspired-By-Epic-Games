import React from "react";
import { Link } from "react-router-dom";

function MainButton({
  buttonContent,
  additionalStyling,
  link = "",
  state = undefined,
  onClickAction = null,
}) {
  let buttonStyle = "rounded-lg px-2 py-1 hover:border-custom-emerald";

  if (Array.isArray(additionalStyling)) {
    additionalStyling.forEach((style) => (buttonStyle += ` ${style}`));
  }

  return (
    <Link to={link} state={state}>
      <button className={buttonStyle} onClick={onClickAction}>
        {buttonContent}
      </button>
    </Link>
  );
}

export default MainButton;
