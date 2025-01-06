// src/components/TransactionHistory.js
import React from "react";

function TransactionHistory() {
  const transactions = [
    { id: 1, type: "Credit", amount: "$500" },
    { id: 2, type: "Debit", amount: "$200" },
    { id: 3, type: "Credit", amount: "$300" },
  ];

  return (
    <div>
      <h2>Transaction History</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.type}: {transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionHistory;
