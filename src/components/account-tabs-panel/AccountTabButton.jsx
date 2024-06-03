import React from "react";
import UserIcon from "./icons/UserIcon.jsx";

function AccountTabButton({ tabData, tabIcon }) {
  return (
    <button className="flex h-[40px] w-full items-center rounded-lg py-8 pl-6 font-bold text-custom-white transition-colors duration-300 focus-within:bg-custom-gray-300 focus-within:text-custom-emerald lg:text-xs 2xl:text-sm">
      <span className="mr-4">{tabIcon}</span>
      {tabData}
    </button>
  );
}

export default AccountTabButton;
