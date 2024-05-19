import React from "react";
import AccountCardElement from "../components/AccountCardElement";
import "../styles/Account.css";
import Carousel from "../components/Carousel";

const Account = () => {
  return (
    <>
      <h1>Cuenta Número: VIN-00001</h1>
      <div className="data-container">
        <AccountCardElement />
        <div className="table--container">
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
              <tr>
                <td>CREDIT</td>
                <td>$25,000.0</td>
                <td>24/04/23</td>
                <td className="description-column">Test credit</td>
              </tr>
              <tr>
                <td>DEBIT</td>
                <td>$5,000.0</td>
                <td>24/04/23</td>
                <td className="description-column">Test debit</td>
              </tr>
              <tr>
                <td>CREDIT</td>
                <td>$200.0</td>
                <td>24/04/23</td>
                <td className="description-column">Coffe. VIN-0859985</td>
              </tr>
            </tbody>
          </table>
        </div>
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
