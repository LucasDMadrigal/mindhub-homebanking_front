import React from "react";
import '../styles/Cards.css'
import BlackCard from '../assets/images/imgs/black_card.png'
import GoldCard from '../assets/images/imgs/gold_card.png'
import PlatinumCard from '../assets/images/imgs/platinum_card.png'
const Cards = () => {
  return (
    <>
      <h1>Your cards</h1>
      <div className="main-cards--container">
        <h2>Credit</h2>
        <div className="cards--container">
          <img src={BlackCard} alt="" />
          <img src={GoldCard} alt="" />
          <img src={PlatinumCard} alt="" />
        </div>
        <h2>Debit</h2>
        <div className="cards--container">
          <img src={BlackCard} alt="" />
          <img src={GoldCard} alt="" />
          <img src={PlatinumCard} alt="" />
        </div>
      </div>
    </>
  );
};

export default Cards;
