import React from "react";

function AccountTabButton({ tabData, tabIcon, isActive }) {
  return (
    <button
      className={`flex h-[40px] w-full items-center rounded-lg py-8 pl-6 font-bold transition-colors duration-300 lg:text-xs 2xl:text-sm ${isActive ? "bg-custom-gray-300 text-custom-emerald" : "text-custom-white"}`}
    >
      <span className="mr-4">{tabIcon}</span>
      {tabData}
    </button>
  );
}

export default AccountTabButton;
