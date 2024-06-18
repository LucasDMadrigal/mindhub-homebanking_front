import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "../styles/Loan.css";
const Loans = () => {
  const [loans, setLoans] = useState([]);
  const { token } = useSelector((store) => store.auth);

  useEffect(() => {
    try {
      axios
        .get("http://localhost:8080/api/loans/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log("🚀 ~ Loans ~ response:", res.data);
          setLoans(res.data);
        });
    } catch (err) {
      console.log("🚀 ~ useEffect ~ err:", err);
    }
  }, []);

  let opciones = {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
};

// Crear un objeto Intl.NumberFormat para la localización española
let formateador = new Intl.NumberFormat('es-ES', opciones);

// Formatear el número
// let numeroFormateado = formateador.format(numero);

  return (
    <div>
      {" "}
        <h1>Active Loans</h1>
      <div className="loan-card--container">
        <ul>
          {loans.map((loan) => (
            <li className="card--loan" key={loan.id}>
              <h2>{loan.name}</h2>
              <p>Obtene tu credito de hasta </p>
              {/* <h3>${loan.maxAmount}</h3> */}
              <h3>${formateador.format(loan.maxAmount)}</h3>
              <p>
                Cuotas:{" "}
                {Array.from(loan.payments)
                  .sort((a, b) => a - b)
                  .join(", ")}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <NavLink to="/new-loan">
        <button className="get_new_acc">Solicitar un nuevo credito</button>
      </NavLink>
    </div>
  );
};

export default Loans;
