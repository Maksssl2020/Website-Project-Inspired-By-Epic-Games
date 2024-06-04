import React from "react";
import ShopLogo from "../../../assets/white-shop-logo.png";
import MainButton from "../../main-elements/MainButton.jsx";
import ImageButtons from "../../sign-in-buttons/ImageButtons.jsx";

function SignInSection() {
  return (
    <div className="rounded-lg border-2 border-custom-emerald max-sm:h-[600px] max-sm:w-[350px] sm:h-[700px] sm:w-[450px]">
      <div className="mt-10 flex w-full justify-center">
        <img className="w-[50px]" src={ShopLogo} alt="shop-logo-img" />
      </div>
      <p className="mt-14 flex w-full justify-center font-bold text-custom-white sm:text-2xl">
        Sign In or Sign Up
      </p>
      <div className="mt-6 flex w-full justify-center">
        <div className="flex flex-col max-sm:w-[300px] sm:w-[350px]">
          <input
            type={"text"}
            placeholder={"E-mail address"}
            className="h-[60px] rounded-md border-2 border-custom-emerald bg-transparent p-4 text-custom-white placeholder:bg-transparent placeholder:text-custom-white"
          />
          <MainButton
            buttonContent={"CONTINUE"}
            additionalStyling="text-custom-white bg-custom-emerald mt-10 h-[60px] font-bold w-full"
            link="/account"
          />
          <ImageButtons />
        </div>
      </div>
    </div>
  );
}

export default SignInSection;
