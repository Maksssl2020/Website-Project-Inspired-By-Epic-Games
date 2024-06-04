import React, { useEffect, useRef, useState } from "react";
import UserIcon from "./icons/UserIcon.jsx";
import ChevronDown from "../filters-panel/icons/ChevronDown.jsx";
import AccountTabButtonsSection from "./AccountTabButtonsSection.jsx";

function AccountAccordion() {
  const [isActive, setIsActive] = useState(false);
  const [maxHeight, setMaxHeight] = useState("0px");
  const contentRef = useRef(null);

  function handleActivation() {
    setIsActive(!isActive);
  }

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isActive ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isActive]);

  return (
    <div className="mb-4 h-full transition-all duration-300 ease-in-out">
      <div className="flex h-[85px] w-full items-center justify-center border-b border-custom-emerald ">
        <button
          className="flex h-[50px] w-[300px] items-center justify-center gap-2 rounded-lg border-2 border-transparent text-xl text-custom-white hover:border-custom-emerald hover:bg-custom-gray-100 hover:bg-opacity-15"
          onClick={handleActivation}
        >
          <UserIcon />
          Account Settings
          <ChevronDown isActive={isActive} />
        </button>
      </div>
      <div
        ref={contentRef}
        style={{ maxHeight }}
        className={`${isActive ? "border-custom-emerald" : "overflow-hidden border-transparent"} border-b duration-300 ease-in-out`}
      >
        <AccountTabButtonsSection />
        <p className="h-1 w-full"></p>
      </div>
    </div>
  );
}

export default AccountAccordion;
