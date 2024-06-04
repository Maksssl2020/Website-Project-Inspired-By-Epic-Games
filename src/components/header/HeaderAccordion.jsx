import React, { useEffect, useRef, useState } from "react";
import MenuIcon from "./icons/MenuIcon.jsx";
import CancelIcon from "../payment-page-summary-panel/icons/CancelIcon.jsx";
import StoreTextIcon from "./icons/StoreTextIcon.jsx";
import { Link } from "react-router-dom";
import UserIcon from "./icons/UserIcon.jsx";
import MainButton from "../main-elements/MainButton.jsx";
import GlobIconAccordionSmallScreens from "./GlobIconAccordionSmallScreens.jsx";

function HeaderAccordion() {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState("0px");
  const contentRef = useRef(null);

  const handleAccordionClick = () => {
    setAccordionOpen(!accordionOpen);

    if (!accordionOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(accordionOpen ? `100%` : "0%");
    }
  }, [accordionOpen]);

  const buttonsData = [
    {
      buttonContent: "Browse",
      buttonLink: "/browse",
    },
    {
      buttonContent: "Wishlist",
      buttonLink: "/wishlist",
    },
    {
      buttonContent: "Cart",
      buttonLink: "/cart",
    },
    {
      buttonContent: "News",
      buttonLink: "/news",
    },
  ];

  return (
    <div className="transition-all duration-300 ease-in-out">
      <button className="h-[35px] w-[35px]" onClick={handleAccordionClick}>
        <MenuIcon />
      </button>

      <div
        ref={contentRef}
        style={{ maxHeight }}
        className={`fixed inset-0 flex w-full flex-col overflow-hidden bg-[#101010] px-2 py-4 text-custom-white duration-300 ${accordionOpen ? "translate-y-0" : "-translate-y-10"}`}
      >
        <div className="flex w-full items-center py-1">
          <button onClick={handleAccordionClick}>
            <Link to={"/"}>
              <StoreTextIcon />
            </Link>
          </button>
          <div className="ml-auto flex items-center gap-2">
            <GlobIconAccordionSmallScreens />
            <Link to="login" key="link-to-login-page">
              <UserIcon
                key={"user-icon"}
                onClickAction={handleAccordionClick}
              />
            </Link>
            <button
              className="ml-2 h-[35px] w-[35px]"
              onClick={handleAccordionClick}
            >
              <CancelIcon />
            </button>
          </div>
        </div>
        <div className="mx-4 mt-4 flex flex-col space-y-4">
          {buttonsData.map((data, index) => (
            <MainButton
              buttonContent={data.buttonContent}
              additionalStyling="bg-custom-gray-300 w-full h-[50px] flex items-center"
              link={data.buttonLink}
              onClickAction={handleAccordionClick}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeaderAccordion;
