import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import AccountCardElement from "../components/AccountCardElement";
import "../styles/Home.css";
import Carousel from "../components/Carousel";
import { useSelector } from "react-redux";
const Home = () => {
  const [client, setClient] = useState();

  const { user } = useSelector((store) => store.auth);

  useEffect(() => {
    setClient(user);
  }, [user]);

  return (
    <>
      <h1>Welcome, {client?.firstName}!</h1>
      <div className="card--container">
        {client?.accounts.map((account, index) => (
          <NavLink key={index} to={`/account/${account.id}`}>
            <AccountCardElement account={account} />
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
