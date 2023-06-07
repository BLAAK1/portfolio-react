import Navbar from "../Navbar/Navbar";
import Aboutme from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="app">
      <Navbar />
      <div className="mainContent">
        <Aboutme />
        <div className="mainContent__right">
          <div className="mainContent__content">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
