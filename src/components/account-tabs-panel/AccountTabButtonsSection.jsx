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

function AccountTabButtonsSection() {
  return (
    <div className="grid h-full grid-rows-12">
      <AccountTabButton tabData={"ACCOUNT SETTINGS"} tabIcon={<UserIcon />} />
      <AccountTabButton tabData={"EMAIL PREFERENCES"} tabIcon={<IconBell />} />
      <AccountTabButton
        tabData={"PAYMENT MANAGEMENT"}
        tabIcon={<DollarIcon />}
      />
      <AccountTabButton tabData={"TRANSACTIONS"} tabIcon={<ClockIcon />} />
      <AccountTabButton tabData={"SUBSCRIPTIONS"} tabIcon={<TicketIcon />} />
      <AccountTabButton tabData={"SECURITY"} tabIcon={<LockIcon />} />
      <AccountTabButton
        tabData={"IN-GAME CURRENCY"}
        tabIcon={<BanknotesIcon />}
      />
      <AccountTabButton
        tabData={"PARENTAL CONTROLS"}
        tabIcon={<ShieldIcon />}
      />
      <AccountTabButton tabData={"EULA HISTORY"} tabIcon={<DocumentIcon />} />
      <AccountTabButton
        tabData={"APPS AND ACCOUNTS"}
        tabIcon={<SquaresIcon />}
      />
      <AccountTabButton tabData={"MARKETPLACE"} tabIcon={<StorefrontIcon />} />
      <AccountTabButton tabData={"REDEEM CODE"} tabIcon={<StarIcon />} />
    </div>
  );
}

export default AccountTabButtonsSection;
