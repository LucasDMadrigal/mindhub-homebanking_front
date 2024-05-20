import React from "react";
import cardFormImage from "../assets/images/imgs/card_form_image.png";
import "../styles/NewCard.css";

const NewCard = () => {
  return (
    <div>
      <h1>Apply for a card</h1>
      <div className="form_container">
        <form action="">
          <h6>Select card type</h6>
          <select name="" id="">
            <option value="DEBIT">DEBIT</option>
            <option value="CREDIT">CREDIT</option>
          </select>
          <h6>Select card type</h6>
          <select name="" id="">
            <option value="BLACK">BLACK</option>
            <option value="GOLD">GOLD</option>
            <option value="PLATINUM">PLATINUM</option>
          </select>
          <div className="button_form--container">
            <button>Apply</button>
            <button>Cancel</button>
          </div>
        </form>
        <div className="image--container">
          <img src={cardFormImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NewCard;
