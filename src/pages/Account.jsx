import React from "react";
import AccountSettingsSection from "../components/account-main-section/AccountSettingsSection.jsx";
import AccountTabButtonsSection from "../components/account-tabs-panel/AccountTabButtonsSection.jsx";
import AccountAccordion from "../components/account-main-section/AccountAccordion.jsx";

function Account() {
  return (
    <div className="mt-10 flex w-full justify-center">
      <div className="flex w-auto max-lg:flex-col max-lg:items-center lg:space-x-5">
        <div className="rounded-lg border-2 border-custom-emerald max-lg:hidden lg:w-[225px] xl:w-[250px] 2xl:w-[300px]">
          <AccountTabButtonsSection />
        </div>
        <div className="w-full max-sm:text-xs lg:hidden">
          <AccountAccordion />
        </div>
        <div className="flex lg:w-[625px] xl:w-[870px] 2xl:w-[970px]">
          <AccountSettingsSection />
        </div>
      </div>
    </div>
  );
}

export default Account;
