import React, { useEffect, useState } from "react";
import "../styles/Cards.css";
import BlackCard from "../assets/images/imgs/black_card.png";
import GoldCard from "../assets/images/imgs/gold_card.png";
import PlatinumCard from "../assets/images/imgs/platinum_card.png";
import { NavLink } from "react-router-dom";
import CardsElement from "../components/CardsElement";
const Cards = () => {
  const [cards, setCards] = useState();
  const [cardDebit, setCardDebit] = useState([]);
  const [cardCredit, setCardCredit] = useState([]);
  const url = "http://localhost:8080/api";
  useEffect(() => {
    fetch(`${url}/clients/1`)
      .then((res) => res.json())
      .then((data) => {
        setCards(data.cards);
        console.log(data);
      });
  }, []);

  useEffect(() => {
    const cardsDebit = cards?.filter((c) => c.type === "DEBIT");
    const cardsCredit = cards?.filter((c) => c.type === "CREDIT");
    setCardDebit(cardsDebit);
    setCardCredit(cardsCredit);
  }, [cards]);

  return (
    <>
      <h1>Your cards</h1>
      <div className="main-cards--container">
        <h2>Credit</h2>
        <div className="cards--container">
          {cardCredit?.map((c, i) => (
            <CardsElement key={i} card={c.color} />
          ))}
        </div>
        <h2>Debit</h2>
        <div className="cards--container">
          {cardDebit?.map((c, i) => (
            <CardsElement key={i} card={c.color} />
          ))}
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
