import React from "react";
import AccountInputField from "./AccountInputField.jsx";

function AccountInformationTab() {
  return (
    <>
      <h3 className="mt-8 text-xl font-bold">Account Information</h3>
      <div className="mt-8 flex flex-col space-y-5">
        <div className="flex w-full space-x-6">
          <AccountInputField dataInfo={"Username"} initialValue={"Frank2020"} />
          <AccountInputField
            dataInfo={"E-mail address"}
            initialValue={"f***y@gmail.com"}
          />
        </div>
        <div className="w-full">
          <AccountInputField dataInfo={"Language"} initialValue={"English"} />
        </div>
      </div>
    </>
  );
}

export default AccountInformationTab;
