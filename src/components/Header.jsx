import React from "react";
import '../styles/Header.css'
import LogoutIcon from '../assets/images/logos/logout.svg'

const Header = () => {

  const clickLogout = () => {
    console.log("Logout clicked");
  }

  return <header className="main-header">
    <div className="icon--container"></div>
    <nav className="">
      <a href="#">Accounts</a><a href="#">Cards</a><a href="#">Loans</a><a href="#">transactions</a>
    </nav>
    <button onClick={clickLogout} className="logout-button">
      <img src={LogoutIcon} alt="icono logout" />
    </button>
  </header>;
};

export default Header;
