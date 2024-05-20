import React from "react";

const Loans = () => {
  //   Mortgage
  // Personal
  // Automotive
  const loans = [
    {
      id: 1,
      name: "Mortgage",
      maxAmount: 5000.0,
      payments: [6, 12, 24],
    },
    {
      id: 2,
      name: "Personal",
      maxAmount: 20000.0,
      payments: [12, 24, 36, 48],
    },
    {
      id: 3,
      name: "Automotive",
      maxAmount: 100000.0,
      payments: [60, 120, 180, 240],
    },
  ];

  return (
    <div>
      {" "}
      <div>
        <h1>Active Loans</h1>
        <ul>
          {loans.map((loan) => (
            <li key={loan.id}>
              <h2>{loan.name}</h2>
              <p>Max Amount: {loan.maxAmount}</p>
              <p>Payments: {Array.from(loan.payments).join(", ")}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Loans;
