import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "../styles/Transaction.css";

const Transactions = () => {
  const [formData, setFormData] = useState({
    sourceAccount: "",
    destinationAccount: "",
    amount: "",
    description: "",
  });

  const { user } = useSelector((store) => store.auth);
  const { token } = useSelector((store) => store.auth);
  const accounts = user.accounts;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/transactions/current/create",
        formData,
        config
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <div className="input-field">
        <label>Source Account</label>
        <select
          name="sourceAccount"
          value={formData.sourceAccount}
          onChange={handleChange}
          required
        >
          <option value="" selected disabled>
            Selecciones cuenta de origen
          </option>
          {accounts.map((account) => (
            <option value={account.number}>{account.number}</option>
          ))}
        </select>
      </div>
      <div className="input-field">
        <label>Destination Account</label>
        <input
          type="text"
          name="destinationAccount"
          value={formData.destinationAccount}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-field">
        <label>Amount</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-field">
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Transactions;
