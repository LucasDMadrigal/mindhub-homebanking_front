import React from "react";
import { NavLink } from "react-router-dom";

import AccountCardElement from "../components/AccountCardElement";
import "../styles/Home.css";
import Carousel from "../components/Carousel";
const Home = () => {
  return (
    <>
      <h1>Welcome, Melba!</h1>
      <div className="card--container">
        <NavLink to="/account">
          <AccountCardElement />
        </NavLink>
        <NavLink to="/account">
          <AccountCardElement />
        </NavLink>
      </div>
      <div className="my-20 carousel--container">
        <Carousel />
      </div>
    </>
  );
};

export default Home;
