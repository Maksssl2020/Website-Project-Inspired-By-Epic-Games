import Header from "../components/header/Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer.jsx";

function AppLayout() {
  return (
    <div>
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
