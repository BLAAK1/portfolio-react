import "./Navbar.css";

import homeBtnIcon from "../../assets/icons/home.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import githubIcon from "../../assets/icons/github.svg";
import menuIcon from "../../assets/icons/menu.svg";

import HomePage from "../HomePage/HomePage";

import { Link, Route, BrowserRouter as Router } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__left">
      <Router>
        <span className="homeBtn">
          <Link to="/"><img src={homeBtnIcon} alt="Home button" /></Link>
        </span>
        <Route path="/" exact component={HomePage} />
      </Router>
        <div className="navList">
          <ul>
            <li className="experienceBtn">
              <h2>DOŚWIADCZENIE</h2>
            </li>
            <li className="projectsBtn">
              <h2>PROJEKTY</h2>
            </li>
            <li className="contactBtn">
              <h2>KONTAKT</h2>
            </li>
          </ul>
    </div>
      </div>
      <div className="socialList__right">
      <div className="socialList">
            <ul>
              <li>
                <a href="https://www.facebook.com/oskar.zegar.71/" target="_blank">
                  <img src={facebookIcon} alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/oskar-zegar-745362239/" target="_blank">
                  <img src={linkedinIcon} alt="LinkedIn" />
                </a>
              </li>
              <li>
                <a href="https://github.com/BLAAK1" target="_blank">
                 <img src={githubIcon} alt="GitHub" />
                </a>
              </li>
            </ul>
          </div>
          <span className="menuBtn">
            <img src={menuIcon} alt="Menu" />
          </span>
      </div>
    </div>
  );
}
