import React from "react";
import ShopLogo from "../../assets/white-shop-logo.png";
import MainButton from "../main-elements/MainButton.jsx";
import ImageButtons from "../sign-in-buttons/ImageButtons.jsx";
import { Link } from "react-router-dom";

function SignInSection() {
  return (
    <div className="h-[700px] w-[450px] rounded-lg border-2 border-custom-emerald">
      <div className="mt-10 flex w-full justify-center">
        <img className="w-[50px]" src={ShopLogo} alt="shop-logo-img" />
      </div>
      <p className="mt-14 flex w-full justify-center text-2xl font-bold text-custom-white">
        Sign In or Sign Up
      </p>
      <div className="mt-6 flex w-full justify-center">
        <div className="flex w-[350px] flex-col">
          <input
            type={"text"}
            placeholder={"E-mail address"}
            className="h-[60px] rounded-md border-2 border-custom-emerald bg-transparent p-4 text-custom-white placeholder:bg-transparent placeholder:text-custom-white"
          />
          <MainButton
            buttonContent={"CONTINUE"}
            additionalStyling={[
              "text-custom-white",
              "bg-custom-emerald",
              "mt-10",
              "h-[60px]",
              "font-bold",
              "w-full",
            ]}
            link="/account"
          />
          <ImageButtons />
        </div>
      </div>
    </div>
  );
}

export default SignInSection;
