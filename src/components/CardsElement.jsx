import React from "react";
import BlackCard from "../assets/images/imgs/black_card.png";
import GoldCard from "../assets/images/imgs/gold_card.png";
import PlatinumCard from "../assets/images/imgs/silver_card.png";

const CardsElement = ({ card, user }) => {
  console.log("🚀 ~ CardsElement ~ user:", user);
  console.log("🚀 ~ CardsElement ~ card:", card);

  const Card = () => {
    switch (card.color) {
      case "GOLD":
        return GoldCard;
      case "TITANIUM":
        return PlatinumCard;
      case "BLACK":
        return BlackCard;
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${Card()})` }}
      className="card--element"
    >
      <h6>{card.type} CARD</h6>
      <div className="datos-de-tarjeta">
        <p className="card-number">{card.number}</p>
        <div className="secound-data">
          <p>
            {user.firstName} {user.lastName}
          </p>
          <p>VALID {card.thruDate}</p>
        </div>
      </div>
    </div>
  );
};

export default CardsElement;
