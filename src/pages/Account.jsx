import React from "react";
import AccountCardElement from "../components/AccountCardElement";
import "../styles/Account.css";
import Carousel from "../components/Carousel";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Account = () => {
  let { accountId } = useParams();
  const { accounts } = useSelector((store) => store.auth.user);
  console.log("🚀 ~ Account ~ accounts:", accounts);
  let account = accounts.find((acc) => acc.id === Number(accountId));
  console.log("🚀 ~ Account ~ account:", account.transactions);

  const formatoDeFecha = (isoDate) => {
    const date = new Date(isoDate);

    // Obtiene los componentes de la fecha
    const day = date.getDate();
    const month = date.getMonth() + 1; // Los meses son indexados desde 0, por lo que se debe sumar 1
    const year = date.getFullYear() % 100; // Obtener los dos últimos dígitos del año

    // Formatea los componentes para asegurarse de que siempre tienen dos dígitos
    const formattedDay = String(day).padStart(2, "0");
    const formattedMonth = String(month).padStart(2, "0");
    const formattedYear = String(year).padStart(2, "0");

    // Construye la cadena final
    const formattedDate = `${formattedDay}/${formattedMonth}/${formattedYear}`;

    return formattedDate; // "16/06/24"
  };

  return (
    <>
      <h1>Cuenta Número: VIN-00001</h1>
      <div className="data-container">
        <AccountCardElement account={account} />
        <div className={`table--container`}>
          {account.transactions.length > 0 ? (
            <>
              <h2>TRANSACCIONES</h2>
              <table>
                {/* <colgroup>
              <col span="1" style={{width: '15%', color:'red'}} />
              <col span="1" style={{width: '15%', color:'red'}} />
              <col span="1" style={{width: '15%', color:'red'}} />
              <col span="1" style={{width: '55%', color:'red'}} />
            </colgroup> */}
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th className="description-column">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {account.transactions.map((transaction, index) => (
                    <tr key={index}>
                      <td>{transaction.transactionType}</td>
                      <td>{transaction.amount}</td>
                      <td>{formatoDeFecha(transaction.date)}</td>
                      <td className="description-column">
                        {transaction.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : (
            <h2>NO HAY TRANSACCIONES</h2>
          )}
        </div>
      </div>
      <div className="my-20 get_new--container">
        <button className="get_new_acc">Solicitar una cuenta nueva</button>
      </div>
      <div className="my-20 carousel--container">
        <Carousel />
      </div>
    </>
  );
};

export default Account;

// Type
// Amount
// Data
// Description
// CREDIT
// $25,000.0
// 24/04/23
// Test credit
// DEBIT
// $5,000.0
// 24/04/23
// Test debit
// CREDIT
// $200.0
// 24/04/23
// Coffe. VIN-0859985
