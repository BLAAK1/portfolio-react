import Navbar from "../Navbar/Navbar";
import Aboutme from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";
import {Link, Outlet } from "react-router-dom";
import menuIcon from "../../assets/icons/menu.svg";

import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

import "./Layout.css";

export default function Layout() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="app">
      
      <Navbar><Button onClick={() => setVisible(true)}><img src={menuIcon} alt="Menu" /></Button></Navbar>
      <div className="mainContent">
        <div className="sidebar">
        <Sidebar visible={visible} position="left" onHide={() => setVisible(false)}>
                <div class="hiddenMenu hidden">
                  <div class="hiddenMenuList">
                    <ul>
                      <li class="hiddenExperience hiddenEl" onClick={() => setVisible(false)}>
                        <Link to="experience">
                          <h2>DOŚWIADCZENIE</h2>
                        </Link>
                      </li>
                      <li class="hiddenProjects hiddenEl" onClick={() => setVisible(false)}>
                        <Link to="projects">
                          <h2>PROJEKTY</h2>
                        </Link>
                      </li>
                      <li class="hiddenContact hiddenEl" onClick={() => setVisible(false)}>
                         <Link to="contact">
                          <h2>KONTAKT</h2>
                    </Link>
                      </li>
                    </ul>
                </div>
           </div>
            </Sidebar>
        </div>
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

            