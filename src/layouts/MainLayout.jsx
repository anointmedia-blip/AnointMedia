import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />

      <Navbar />

      <main className="flex-1 pt-[70px] sm:pt-[112px] lg:pt-[132px]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout