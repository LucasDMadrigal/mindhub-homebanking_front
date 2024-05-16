import React from "react";
import "../styles/Card.css";
const CardElement = () => {
  return (
    <div className="main-card">
      <h5> Número de Cuenta: VIN-00001</h5>
      <div className="monto--container">
        <h6>Monto:</h6>
        <span>$250.000,00</span>
      </div>
      <div className="creation_date--container">
        <p> Fecha de creación:</p>
        <span>25/05/23</span>
      </div>
    </div>
  );
};

export default CardElement;
