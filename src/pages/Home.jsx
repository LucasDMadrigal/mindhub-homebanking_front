import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import AccountCardElement from "../components/AccountCardElement";
import "../styles/Home.css";
import Carousel from "../components/Carousel";
const Home = () => {
  const [client, setClient] = useState();

  const url = "http://localhost:8080/api";
  useEffect(() => {
    fetch(`${url}/clients/1`)
      .then((res) => res.json())
      .then((data) => {
        setClient(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <h1>Welcome, {client?.firstName}!</h1>
      <div className="card--container">
        {client?.accounts.map((account, index) => (
          <NavLink key={index} to="/account">
            <AccountCardElement
              number={account.number}
              balance={account.balance}
              creationDate={account.creationDate}
            />
          </NavLink>
        ))}
      </div>
      <div className="my-20 carousel--container">
        <Carousel />
      </div>
    </>
  );
};

export default Home;
