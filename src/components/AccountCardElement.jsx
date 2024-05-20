import React from "react";
import "../styles/Card.css";
const CardElement = ({number, balance, creationDate}) => {
  return (
    <div className="main-card">
      <h5> Número de Cuenta: VIN-{number}</h5>
      <div className="monto--container">
        <h6>Monto:</h6>
        <span>${balance}</span>
      </div>
      <div className="creation_date--container">
        <p> Fecha de creación:</p>
        <span>{creationDate}</span>
      </div>
    </div>
  );
};

export default CardElement;
