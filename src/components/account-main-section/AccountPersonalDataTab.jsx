import React from "react";
import AccountInputField from "./AccountInputField.jsx";

function AccountPersonalDataTab() {
  const fieldsStyling = "max-md:w-full md:w-[300px] xl:w-[300px] lg:w-[250px]";

  return (
    <>
      <h3 className="mt-8 text-xl font-bold">Personal data</h3>
      <p className="mt-3 text-custom-gray-100">
        Manage your name and contact information
      </p>
      <div className="mt-8 flex w-full max-md:flex-col max-md:space-y-5 md:space-x-6">
        <AccountInputField
          dataInfo={"Name"}
          initialValue={"F***k"}
          additionalStyling={fieldsStyling}
        />
        <AccountInputField
          dataInfo={"Surname"}
          initialValue={"C***y"}
          additionalStyling={fieldsStyling}
        />
      </div>
    </>
  );
}

export default AccountPersonalDataTab;
