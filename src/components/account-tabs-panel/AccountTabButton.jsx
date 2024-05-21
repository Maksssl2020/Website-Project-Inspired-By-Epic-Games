import React from "react";
import UserIcon from "./icons/UserIcon.jsx";

function AccountTabButton({ tabData, tabIcon }) {
  return (
    <button className="flex h-[40px] w-full items-center rounded-lg py-8 pl-6 text-sm font-bold text-custom-white focus-within:bg-custom-gray-300 focus-within:text-custom-emerald">
      <span className="mr-4">{tabIcon}</span>
      {tabData}
    </button>
  );
}

export default AccountTabButton;
