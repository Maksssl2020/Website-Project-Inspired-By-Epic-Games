import React from "react";
import MenuIcon from "./icons/MenuIcon.jsx";
import CancelIcon from "../payment-page-summary-panel/icons/CancelIcon.jsx";
import StoreTextIcon from "./icons/StoreTextIcon.jsx";
import ContentList from "./ContentList.jsx";
import GlobeIcon from "./icons/GlobeIcon.jsx";
import { Link } from "react-router-dom";
import UserIcon from "./icons/UserIcon.jsx";
import MainButton from "../main-elements/MainButton.jsx";

function HeaderAccordion() {
  const [accordionOpen, setAccordionOpen] = React.useState(false);

  const handleAccordionClick = () => {
    setAccordionOpen(!accordionOpen);

    if (!accordionOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div>
      <button className="h-[35px] w-[35px]" onClick={handleAccordionClick}>
        <MenuIcon />
      </button>

      {accordionOpen && (
        <div className="fixed inset-0 flex w-full flex-col bg-[#101010] px-2 py-4 text-custom-white">
          <div className="flex w-full items-center py-1">
            <button onClick={handleAccordionClick}>
              <Link to={"/"}>
                <StoreTextIcon />
              </Link>
            </button>
            <ContentList
              components={[
                <GlobeIcon key="glob-icon" />,
                <Link to="login" key="link-to-login-page">
                  <UserIcon
                    key={"user-icon"}
                    onClickAction={handleAccordionClick}
                  />
                </Link>,
              ]}
              additionalStyling={[
                "text-custom-white",
                "ml-auto",
                "mr-4",
                "gap-0",
                "space-x-2",
              ]}
            />
            <button
              className="h-[35px] w-[35px]"
              onClick={handleAccordionClick}
            >
              <CancelIcon />
            </button>
          </div>
          <div className="mt-4 flex flex-col space-y-4">
            <MainButton
              buttonContent="Browse"
              additionalStyling={[
                "bg-custom-gray-300",
                "w-full",
                "h-[50px]",
                "items-start",
              ]}
              link={"/browse"}
              onClickAction={handleAccordionClick}
            />
            <MainButton
              buttonContent="Wishlist"
              additionalStyling={[
                "bg-custom-gray-300",
                "w-full",
                "h-[50px]",
                "items-start",
              ]}
              link={"/wishlist"}
              onClickAction={handleAccordionClick}
            />
            <MainButton
              buttonContent="Cart"
              additionalStyling={[
                "bg-custom-gray-300",
                "w-full",
                "h-[50px]",
                "items-start",
              ]}
              link={"/cart"}
              onClickAction={handleAccordionClick}
            />
            <MainButton
              buttonContent="News"
              additionalStyling={[
                "bg-custom-gray-300",
                "w-full",
                "h-[50px]",
                "items-start",
              ]}
              link={"/news"}
              onClickAction={handleAccordionClick}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default HeaderAccordion;
