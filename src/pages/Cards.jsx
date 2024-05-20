import React from "react";
import "../styles/Cards.css";
import BlackCard from "../assets/images/imgs/black_card.png";
import GoldCard from "../assets/images/imgs/gold_card.png";
import PlatinumCard from "../assets/images/imgs/platinum_card.png";
import { NavLink } from "react-router-dom";
import CardsElement from "../components/CardsElement";
const Cards = () => {
  return (
    <>
      <h1>Your cards</h1>
      <div className="main-cards--container">
        <h2>Credit</h2>
        <div className="cards--container">
          <CardsElement card={"GOLD"} />
          <CardsElement card={"TITANIUM"} />
          <CardsElement card={"BLACK"} />
        </div>
        <h2>Debit</h2>
        <div className="cards--container">
          <CardsElement card={"GOLD"} />
          <CardsElement card={"TITANIUM"} />
          <CardsElement card={"BLACK"} />
        </div>
      </div>
      <div className="my-20 get_new--container">
        <NavLink to="/new-card">
          <button className="get_new_acc">Solicitar una tarjeta nueva</button>
        </NavLink>
      </div>
    </>
  );
};

export default Cards;
