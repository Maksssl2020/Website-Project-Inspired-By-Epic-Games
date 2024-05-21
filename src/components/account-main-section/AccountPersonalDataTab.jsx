import React from "react";
import AccountInputField from "./AccountInputField.jsx";

function AccountPersonalDataTab() {
  return (
    <>
      <h3 className="mt-8 text-xl font-bold">Personal data</h3>
      <p className="mt-3 text-custom-gray-100">
        Manage your name and contact information
      </p>
      <div className="mt-8 flex w-full space-x-6">
        <AccountInputField dataInfo={"Name"} initialValue={"F***k"} />
        <AccountInputField dataInfo={"Surname"} initialValue={"C***y"} />
      </div>
    </>
  );
}

export default AccountPersonalDataTab;
