import React from "react";
import "../styles/Header.css";
import LogoutIcon from "../assets/images/logos/logout.svg";
import GreenBanckLogo from "../assets/images/logos/green_banck_logo_text_1.png"
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/authActions";

const Header = () => {

  const dispatch = useDispatch()
  const { loggedIn } = useSelector((store) => store.auth);

  const clickLogout = () => {
    dispatch(logout())
  };

  return (
    <header className="main-header">
      <NavLink to="/">
        <div className="icon--container">
          <img src={GreenBanckLogo} alt="" />
        </div>
      </NavLink>
      <nav className={!loggedIn ? "hidden" :""}>
        {/* <NavLink
          to="/account"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Accounts
        </NavLink> */}
        <NavLink
          to="/cards"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Cards
        </NavLink>
        <NavLink
          to="/loans"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Loans
        </NavLink>
        <NavLink
          to="/transactions"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          transactions
        </NavLink>
      </nav>
      <button onClick={clickLogout} className="logout-button">
        <img src={LogoutIcon} alt="icono logout" />
      </button>
    </header>
  );
};

export default Header;
