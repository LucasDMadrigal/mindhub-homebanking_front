import React from "react";
import BlackCard from "../assets/images/imgs/black_card.png";
import GoldCard from "../assets/images/imgs/gold_card.png";
import PlatinumCard from "../assets/images/imgs/platinum_card.png";

const CardsElement = ({ card }) => {
//   console.log("🚀 ~ CardsElement ~ card:", card);

  const Card = () => {
    switch (card) {
      case "GOLD":
        console.log("🚀 ~ Card ~ GoldCard:", GoldCard);
        return GoldCard;
      case "TITANIUM":
        console.log("🚀 ~ Card ~ PlatinumCard:", PlatinumCard);
        return PlatinumCard;
      case "BLACK":
        console.log("🚀 ~ Card ~ BlackCard:", BlackCard);
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
