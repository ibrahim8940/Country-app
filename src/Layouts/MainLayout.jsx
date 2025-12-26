import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />

      {/* Main content */}
      <main style={{ minHeight: "80vh", padding: "20px" }}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;
