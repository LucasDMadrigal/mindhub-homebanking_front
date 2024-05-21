import React from "react";
import BlackCard from "../assets/images/imgs/black_card.png";
import GoldCard from "../assets/images/imgs/gold_card.png";
import PlatinumCard from "../assets/images/imgs/platinum_card.png";

const CardsElement = ({ card }) => {

  const Card = () => {
    switch (card) {
      case "GOLD":
        return GoldCard;
      case "TITANIUM":
        return PlatinumCard;
      case "BLACK":
        return BlackCard;
    }
  };

  return (
    <div className="">
      <img src={Card()} alt="" />
    </div>
  );
};

export default CardsElement;
