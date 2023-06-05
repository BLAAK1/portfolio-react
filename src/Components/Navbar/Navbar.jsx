import "./Navbar.css";
import homeBtnIcon from "../../assets/icons/home.svg";
import SocialList from "./SocialList/SocialList";

import NavBarList from "./NavList/NavList";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <span className="homeBtn">
          <img src={homeBtnIcon} alt="Home button" />
        </span>
        <NavBarList />
      </div>
      <div className="socialList--right">
        <div className="socialList">
          <ul>
            <SocialList />
          </ul>
        </div>
      </div>
    </div>
  );
}
