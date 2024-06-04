import React from "react";
import AccountInputField from "./AccountInputField.jsx";
import { TextField } from "@mui/material";

function AccountInformationTab() {
  const informationTabFieldsData = [
    {
      dataInfo: "Username",
      initialValue: "Frank2020",
    },
    {
      dataInfo: "E-mail address",
      initialValue: "f***y@gmail.com",
    },
  ];

  const fieldsStyling = "max-md:w-full md:w-[300px] xl:w-[300px] lg:w-[250px]";

  return (
    <>
      <h3 className="mt-8 text-xl font-bold">Account Information</h3>
      <div className="mt-8 flex flex-col space-y-5">
        <div className="flex w-full max-md:flex-col max-md:space-y-5 md:space-x-6">
          {informationTabFieldsData.map((data, index) => (
            <AccountInputField
              dataInfo={data.dataInfo}
              initialValue={data.initialValue}
              additionalStyling={fieldsStyling}
              key={index}
            />
          ))}
        </div>
        <div>
          <AccountInputField
            dataInfo={"Language"}
            initialValue={"English"}
            additionalStyling={fieldsStyling}
          />
        </div>
      </div>
    </>
  );
}

export default AccountInformationTab;
