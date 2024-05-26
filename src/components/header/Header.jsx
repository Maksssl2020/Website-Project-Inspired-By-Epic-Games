import "/src/index.css";
import ShopLogo from "/src/assets/white-shop-logo.png";
import HeaderAccordion from "./HeaderAccordion.jsx";
import HeaderNavigationSection from "./HeaderNavigationSection.jsx";

function Header() {
  return (
    <header className="sticky left-0 top-0 z-10 w-full bg-[#18181c] px-2 py-4 font-medium transition-all">
      <nav className="flex items-center justify-between">
        <a className="border-r-2 border-custom-white px-4 py-1">
          <img src={ShopLogo} alt="shop-logo" className="w-10" />
        </a>

        <HeaderNavigationSection />

        <a className="hidden max-lg:block">
          <HeaderAccordion />
        </a>
      </nav>
    </header>
  );
}

export default Header;
