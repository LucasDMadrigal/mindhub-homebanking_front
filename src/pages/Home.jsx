import React from "react";
import AccountCardElement from "../components/AccountCardElement";
import "../styles/Home.css";
import Carousel from "../components/Carousel";
const Home = () => {
  return (
    <>
      <h1>Welcome, Melba!</h1>
      <div className="card--container">
        <AccountCardElement />
        <AccountCardElement />
      </div>
      <div className="my-20 carousel--container">
        <Carousel />
      </div>
    </>
  );
};

export default Home;
