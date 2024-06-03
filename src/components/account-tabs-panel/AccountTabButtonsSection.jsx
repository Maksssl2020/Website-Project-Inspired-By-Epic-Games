import React from "react";
import AccountTabButton from "./AccountTabButton.jsx";
import UserIcon from "./icons/UserIcon.jsx";
import IconBell from "./icons/IconBell.jsx";
import DollarIcon from "./icons/DollarIcon.jsx";
import ClockIcon from "./icons/ClockIcon.jsx";
import TicketIcon from "./icons/TicketIcon.jsx";
import LockIcon from "./icons/LockIcon.jsx";
import BanknotesIcon from "./icons/BanknotesIcon.jsx";
import ShieldIcon from "./icons/ShieldIcon.jsx";
import DocumentIcon from "./icons/DocumentIcon.jsx";
import SquaresIcon from "./icons/SquaresIcon.jsx";
import StorefrontIcon from "./icons/StorefrontIcon.jsx";
import StarIcon from "./icons/StarIcon.jsx";

const accountTabButtonsData = [
  {
    tabData: "ACCOUNT SETTINGS",
    tabIcon: <UserIcon />,
  },
  {
    tabData: "EMAIL PREFERENCES",
    tabIcon: <IconBell />,
  },
  {
    tabData: "PAYMENT MANAGEMENT",
    tabIcon: <DollarIcon />,
  },
  {
    tabData: "TRANSACTIONS",
    tabIcon: <ClockIcon />,
  },
  {
    tabData: "SUBSCRIPTIONS",
    tabIcon: <TicketIcon />,
  },
  {
    tabData: "SECURITY",
    tabIcon: <LockIcon />,
  },
  {
    tabData: "IN-GAME CURRENCY",
    tabIcon: <BanknotesIcon />,
  },
  {
    tabData: "PARENTAL CONTROLS",
    tabIcon: <ShieldIcon />,
  },
  {
    tabData: "EULA HISTORY",
    tabIcon: <DocumentIcon />,
  },
  {
    tabData: "APPS AND ACCOUNTS",
    tabIcon: <SquaresIcon />,
  },
  {
    tabData: "MARKETPLACE",
    tabIcon: <StorefrontIcon />,
  },
  {
    tabData: "REDEEM CODE",
    tabIcon: <StarIcon />,
  },
];

function AccountTabButtonsSection() {
  return (
    <div className="grid h-full w-auto grid-rows-12">
      {accountTabButtonsData.map((data, index) => (
        <AccountTabButton
          tabData={data.tabData}
          tabIcon={data.tabIcon}
          key={index}
        />
      ))}
    </div>
  );
}

export default AccountTabButtonsSection;
