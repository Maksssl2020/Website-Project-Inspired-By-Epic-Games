import React from "react";
import { signInButtonsData } from "../../website-data/SignInButtonsData.js";
import ImageButton from "./ImageButton.jsx";

function ImageButtons() {
  return (
    <>
      <div className="mt-10 flex items-center justify-center">
        <div className="h-[2px] w-[60px] border-t-2 border-custom-emerald"></div>
        <p className="mx-2 text-sm text-custom-gray-100">
          or continue using your account
        </p>
        <div className="h-[2px] w-[50px] border-t-2 border-custom-emerald"></div>
      </div>
      <div className="mt-10 grid grid-cols-4 grid-rows-2 self-center">
        {signInButtonsData.map((data, index) => (
          <span key={index} className="mx-2">
            <ImageButton image={data.image} imageTitle={data.imageTitle} />
          </span>
        ))}
      </div>
    </>
  );
}

export default ImageButtons;
