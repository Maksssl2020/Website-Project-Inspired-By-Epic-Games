import React from "react";
import AccountInputField from "./AccountInputField.jsx";

function AccountAddressTab() {
  return (
    <>
      <h3 className="mt-8 text-xl font-bold">Address</h3>
      <div className="mt-8 flex w-full space-x-6">
        <AccountInputField dataInfo={"Address (line 1)"} />
        <AccountInputField dataInfo={"Address (line 2)"} />
      </div>
      <div className="mt-8 flex space-x-6">
        <AccountInputField dataInfo={"City"} />
        <div className="flex gap-5">
          <AccountInputField widthValue={"140"} dataInfo={"Region"} />
          <AccountInputField widthValue={"140"} dataInfo={"Zip code"} />
        </div>
      </div>
    </>
  );
}

export default AccountAddressTab;
