import { Link } from "react-router-dom";
import "/src/index.css";
import HeaderButton from "./HeaderButton.jsx";
import ShopLogo from "/src/assets/white-shop-logo.png";
import StoreTextIcon from "./icons/StoreTextIcon.jsx";
import UserIcon from "./icons/UserIcon.jsx";
import MenuIcon from "./icons/MenuIcon.jsx";
import SearchBar from "./SearchBar.jsx";
import GlobeIcon from "./icons/GlobeIcon.jsx";
import ContentList from "./ContentList.jsx";

function Header() {
  return (
    <header className="sticky left-0 top-0 z-10 w-full bg-[#18181c] px-1 py-4 font-medium transition-all">
      <nav className="flex items-center justify-between">
        <a className="border-r-2 border-custom-white px-4 py-1">
          <img src={ShopLogo} alt="shop-logo" className="w-10" />
        </a>

        <ContentList
          components={[
            [
              <Link to="/" key={"link-to-main-page"}>
                <StoreTextIcon />
              </Link>,
              "py-1 pl-4",
            ],
            <HeaderButton
              buttonContent="Browse"
              key="button-browse"
              link="/browse"
            />,
            <HeaderButton buttonContent="Support" key={"button-support"} />,
            <HeaderButton
              buttonContent="Distribute"
              key={"button-distribute"}
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
            <UserIcon key={"user-icon"} />,
          ]}
          additionalStyling={["mr-4"]}
        />

        <a className="hidden max-lg:block">
          <MenuIcon />
        </a>
      </nav>
    </header>
  );
}

export default Header;
