import React from "react";
import AccountInformationTab from "./AccountInformationTab.jsx";
import AccountPersonalDataTab from "./AccountPersonalDataTab.jsx";
import AccountAddressTab from "./AccountAddressTab.jsx";

function AccountSettingsSection() {
  return (
    <div className="flex h-full w-full flex-col items-center rounded-lg bg-custom-gray-300 text-custom-white max-lg:bg-custom-black">
      <div className="my-8">
        <h1 className="text-3xl">Account Settings</h1>
        <p className="mt-3 text-custom-gray-100">
          Manage your account information
        </p>
        <AccountInformationTab />
        <AccountPersonalDataTab />
        <AccountAddressTab />
      </div>
    </div>
  );
}

export default AccountSettingsSection;
