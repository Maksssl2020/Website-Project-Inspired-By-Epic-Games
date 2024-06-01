import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import StoreTextIcon from "./icons/StoreTextIcon.jsx";
import ContentList from "./ContentList.jsx";
import HeaderButton from "./HeaderButton.jsx";
import SearchBar from "./SearchBar.jsx";
import GlobeIcon from "./icons/GlobeIcon.jsx";
import UserIcon from "./icons/UserIcon.jsx";
import Badge from "../main-elements/Badge.jsx";

function HeaderNavigationSection() {
  const [activeButtonIndex, setActiveButtonIndex] = React.useState(0);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActiveButtonIndex(0);
        break;
      case "/browse":
        setActiveButtonIndex(1);
        break;
      case "/wishlist":
        setActiveButtonIndex(2);
        break;
      case "/cart":
        setActiveButtonIndex(3);
        break;
      case "/news":
        setActiveButtonIndex(4);
        break;
      default:
        setActiveButtonIndex(-1);
    }
  }, [location.pathname]);

  return (
    <>
      <a className="mr-auto py-1 pl-4">
        <Link to="/" key={"link-to-main-page"}>
          <StoreTextIcon isActive={activeButtonIndex === 0} />
        </Link>
      </a>

      <div className="ml-4 flex w-full justify-between max-lg:hidden">
        <ContentList
          components={[
            <HeaderButton
              buttonContent="Browse"
              key="button-browse"
              link="/browse"
              isButtonActive={activeButtonIndex === 1}
            />,
            <Badge numberOfItems="3">
              <HeaderButton
                buttonContent="Wishlist"
                key={"button-wishlist"}
                link="/wishlist"
                isButtonActive={activeButtonIndex === 2}
              />
            </Badge>,
            <Badge numberOfItems="4">
              <HeaderButton
                buttonContent="Cart"
                key={"button-cart"}
                link="/cart"
                isButtonActive={activeButtonIndex === 3}
              />
            </Badge>,
            <HeaderButton
              buttonContent="News"
              key={"button-news"}
              link="/news"
              isButtonActive={activeButtonIndex === 4}
            />,
          ]}
          additionalStyling={["mr-2", "flex-1"]}
        />
        <ContentList
          components={[
            [
              <SearchBar
                iconColor="#aaaaae"
                inputText="Search Store"
                containerStyling={["bg-custom-gray-200", "rounded-full", "p-2"]}
                key={"search-bar"}
              />,
              "mr-4",
            ],
            <GlobeIcon key={"globe-icon"} />,
            <Link to="login" key="link-to-login-page">
              <UserIcon key={"user-icon"} />
            </Link>,
          ]}
          additionalStyling={["mr-4"]}
        />
      </div>
    </>
  );
}

export default HeaderNavigationSection;
