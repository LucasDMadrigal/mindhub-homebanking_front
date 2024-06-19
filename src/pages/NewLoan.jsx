import React, { useEffect, useState } from "react";
import LoanImage from "../assets/images/imgs/loan_form_image.png";
import axios from "axios";
import { useSelector } from "react-redux";
const NewLoan = () => {
  const [loanSelected, setLoanSelected] = useState("");
  console.log("🚀 ~ NewLoan ~ loanSelected:", loanSelected)
  const [objloanSelected, setObjLoanSelected] = useState([]);
  const [originAccount, setOriginAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [payment, setPayment] = useState("");
  const { user } = useSelector((store) => store.auth);
  // console.log("🚀 ~ NewLoan ~ user:", user)

  const { token } = useSelector((store) => store.auth);
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    axios
      .get("https://mindhub-homebanking.onrender.com/api/loans/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setLoans(response.data));
  }, []);

  const handleChangeLoan = (e) => {
    console.log("🚀 ~ handleChangeLoan ~ e:", e.target.value);

    const opcionSelected = loans.find((l) => l.name === e.target.value);
    console.log("🚀 ~ handleChangeLoan ~ loans:", loans)
    console.log("🚀 ~ handleChangeLoan ~ opcionSelected:", opcionSelected)
    setLoanSelected(opcionSelected);
  };

  const handleChange = () => {};
  const handleChangePayments = (e) => {
    setPayment(e.target.value)
  };

  const handleChangeAccount = (e) => {
    setOriginAccount(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      id: loanSelected.id, // Puedes ajustar este valor según tu lógica
      amount: parseFloat(loanSelected.maxAmount),
      payments: parseInt(payment),
      accountNumber: originAccount,
      description: `${loanSelected.name} loan`,
    };

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .post("https://mindhub-homebanking.onrender.com/api/loans/current", data, config)
      .then((response) => {
        console.log("Loan applied successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error applying loan:", error);
      });
  };

  const resetForm = () => {
    setLoanSelected('');
    setOriginAccount('');
    setPaymentsSelected('');
    setAmount('');
  };

  return (
    <div>
      <div className="form_container">
        <form action="">
          <h6>Seleccione el tipo de credito:</h6>
          <select onChange={handleChangeLoan} name="" id="">
            <option value="" disabled selected>
              selecciones una opcion
            </option>
            {loans.map((loan) => (
              <option value={loan.name}>{loan.name}</option>
            ))}
          </select>
          <h6>Cuenta de destino:</h6>
          <select onChange={handleChangeAccount} name="" id="">
            <option value="" disabled selected>
              selecciones una cuanta destino
            </option>
            {user.accounts.map((account) => (
              <option value={account.number}>{account.number}</option>
            ))}
          </select>

          <h6>Cuotas</h6>
          {loanSelected === "" ? (
            <select name="" id="">
              <option value="" selected disabled>
                seleccion un tipo de credito
              </option>
            </select>
          ) : (
            <select onChange={handleChangePayments} name="" id="">
              <option value="" selected disabled>
                seleccione cantidad de cuotas
              </option>
              {loanSelected.payments.map( payment => (
                <option value={payment}>
                {payment}
              </option>
              ))}
            </select>
          )}
          <h6>Monto</h6>
          <input type="number" name="amount" id="amount" placeholder=""/>
          <div className="button_form--container">
            <button onClick={handleSubmit}>Apply</button>
            <button onClick={resetForm}>Cancelttt</button>
          </div>
        </form>
        <div className="image--container">
          <img src={LoanImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NewLoan;
