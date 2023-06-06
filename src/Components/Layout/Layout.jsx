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
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
}
