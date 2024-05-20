import React from "react";
import ShopLogo from "../assets/white-shop-logo.png";
import MainButton from "../components/main-elements/MainButton.jsx";
import ImageButton from "../components/sign-in-buttons/ImageButton.jsx";
import { signInButtonsData } from "../website-data/SignInButtonsData.js";

function SignIn() {
  return (
    <div className="my-10 flex justify-center">
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
              ]}
            />
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
                  <ImageButton
                    image={data.image}
                    imageTitle={data.imageTitle}
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
