import React from "react";
import IgIcon from "../assets/images/icons/instagram_icon.svg";
import fbIcon from "../assets/images/icons/facebook_icon.svg";
import wspIcon from "../assets/images/icons/ws_icon.svg";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <footer className="flex justify-between items-center p-8">
      <span>© 2024 - All rights reserved</span>
      <div className="icons_container flex justify-between items-center px-4">
        <a href="#">
          <img src={IgIcon} className="footer_icon" alt="" />
        </a>
        <a href="#">
          <img src={fbIcon} className="footer_icon" alt="" />
        </a>
        <a href="#">
          <img src={wspIcon} className="footer_icon" alt="" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
