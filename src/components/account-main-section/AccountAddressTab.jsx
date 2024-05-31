import React from "react";
import AccountInputField from "./AccountInputField.jsx";

function AccountAddressTab() {
  const largeFieldsStyling =
    "md:w-[300px]  xl:w-[300px] max-md:w-full lg:w-[250px]";
  const smallFieldsStyling =
    "xl:w-[140px]  lg:w-[115px] max-md:w-full md:w-[140px]";

  return (
    <>
      <h3 className="mt-8 text-xl font-bold">Address</h3>
      <div className="mt-8 flex w-full max-md:flex-col max-md:space-y-5 md:space-x-6">
        <AccountInputField
          dataInfo={"Address (line 1)"}
          additionalStyling={largeFieldsStyling}
        />
        <AccountInputField
          dataInfo={"Address (line 2)"}
          additionalStyling={largeFieldsStyling}
        />
      </div>
      <div className="flex max-md:mt-5 max-md:flex-col md:mt-8 md:space-x-6">
        <AccountInputField
          dataInfo={"City"}
          additionalStyling={largeFieldsStyling}
        />
        <div className="flex max-lg:space-y-5 max-md:mt-5 max-md:flex-col md:gap-5">
          <AccountInputField
            dataInfo={"Region"}
            additionalStyling={smallFieldsStyling}
          />
          <AccountInputField
            dataInfo={"Zip code"}
            additionalStyling={smallFieldsStyling}
          />
        </div>
      </div>
    </>
  );
}

export default AccountAddressTab;
