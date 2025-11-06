import React from "react";
import "./Navbar.css";
import menuIcon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search.png";
import uploadIcon from "../../assets/upload.png";
import moreIcon from "../../assets/more.png";
import notificationIcon from "../../assets/notification.png";
import profileIcon from "../../assets/jack.png";

const Navbar = ({ setShowSideBar }) => {
  return (
    <nav className=" flex-div">
      <div className="flex-div nav-left">
        <img
          className="menu-icon"
          onClick={() =>
            setShowSideBar((prev) => {
              return prev ? false : true;
            })
          }
          src={menuIcon}
          alt=""
        />
        <img className="logo" src={logo} alt="" />
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search..." />
          <img src={searchIcon} alt="" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={uploadIcon} alt="" />
        <img src={moreIcon} alt="" />
        <img src={notificationIcon} alt="" />
        <img className="user-icon" src={profileIcon} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
