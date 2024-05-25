import React from "react";
import { Link } from "react-router-dom";
import StoreTextIcon from "./icons/StoreTextIcon.jsx";
import ContentList from "./ContentList.jsx";
import HeaderButton from "./HeaderButton.jsx";
import SearchBar from "./SearchBar.jsx";
import GlobeIcon from "./icons/GlobeIcon.jsx";
import UserIcon from "./icons/UserIcon.jsx";

function HeaderNavigationSection() {
  const [activeButtonIndex, setActiveButtonIndex] = React.useState(0);

  function handleHeaderButtonClick(index) {
    setActiveButtonIndex(index);
  }

  return (
    <>
      <a className="mr-auto py-1 pl-4">
        <Link
          to="/"
          key={"link-to-main-page"}
          onClick={() => handleHeaderButtonClick(0)}
        >
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
              onClick={() => handleHeaderButtonClick(1)}
            />,
            <HeaderButton
              buttonContent="Wishlist"
              key={"button-wishlist"}
              link="/wishlist"
              isButtonActive={activeButtonIndex === 2}
              onClick={() => handleHeaderButtonClick(2)}
            />,
            <HeaderButton
              buttonContent="Cart"
              key={"button-cart"}
              link="/cart"
              isButtonActive={activeButtonIndex === 3}
              onClick={() => handleHeaderButtonClick(3)}
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
            <Link
              to="login"
              key="link-to-login-page"
              onClick={() => handleHeaderButtonClick(4)}
            >
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
