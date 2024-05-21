import React from "react";
import AccountSettingsSection from "../components/account-main-section/AccountSettingsSection.jsx";
import AccountTabButtonsSection from "../components/account-tabs-panel/AccountTabButtonsSection.jsx";

function Account() {
  return (
    <div className="mt-10 flex w-full justify-center">
      <div className="flex w-[1270px] space-x-5">
        <div className="w-[300px] rounded-lg border-2 border-custom-emerald">
          <AccountTabButtonsSection />
        </div>
        <div className="flex w-[970px] flex-col">
          <AccountSettingsSection />
        </div>
      </div>
    </div>
  );
}

export default Account;
