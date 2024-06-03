import Header from "../components/header/Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

function AppLayout() {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}

export default AppLayout;
