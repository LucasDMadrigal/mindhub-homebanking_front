import React from "react";
import AccountCardElement from "../components/AccountCardElement";
import "../styles/Account.css";
import Carousel from "../components/Carousel";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Account = () => {
  let { accountId } = useParams();
  const { accounts } = useSelector((store) => store.auth.user);
  let account = accounts.find((acc) => acc.id === Number(accountId));

  const formatoDeFecha = (isoDate) => {
    const date = new Date(isoDate);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear() % 100;

    const formattedDay = String(day).padStart(2, "0");
    const formattedMonth = String(month).padStart(2, "0");
    const formattedYear = String(year).padStart(2, "0");

    const formattedDate = `${formattedDay}/${formattedMonth}/${formattedYear}`;

    return formattedDate;
  };

  return (
    <>
      <h1>Cuenta Número: {account.number}</h1>
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
