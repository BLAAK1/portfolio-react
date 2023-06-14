import Navbar from "../Navbar/Navbar";
import Aboutme from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";
import { Link, Outlet } from "react-router-dom";
import menuIcon from "../../assets/icons/menu.svg";

import React, { useState } from "react";

import "./Layout.css";

export default function Layout() {
  const [visible, setVisible] = useState("none");
  return (
    <div className="app">
      <div className="sidebar" style={{ display: visible }}>
        <div className="hiddenMenu hidden">
          <div className="hiddenMenuList">
            <ul>
              <li>
                <button onClick={() => setVisible("none")}>&#10006;</button>
              </li>
              <li
                className="hiddenExperience hiddenEl"
                onClick={() => setVisible("none")}
              >
                <Link to="experience">
                  <h2>DOŚWIADCZENIE</h2>
                </Link>
              </li>
              <li
                className="hiddenProjects hiddenEl"
                onClick={() => setVisible("none")}
              >
                <Link to="projects">
                  <h2>PROJEKTY</h2>
                </Link>
              </li>
              <li
                className="hiddenContact hiddenEl"
                onClick={() => setVisible("none")}
              >
                <Link to="contact">
                  <h2>KONTAKT</h2>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Navbar>
        <button id="menu" onClick={() => setVisible("block")}>
          <img src={menuIcon} alt="Menu" />
        </button>
      </Navbar>
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
