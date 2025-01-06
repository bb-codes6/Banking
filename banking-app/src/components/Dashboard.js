// src/components/Dashboard.js
import React from "react";

function Dashboard() {
  const accountDetails = {
    name: "John Doe",
    balance: "$5,000",
  };

  return (
    <div>
      <h2>Welcome, {accountDetails.name}</h2>
      <p>Current Balance: {accountDetails.balance}</p>
    </div>
  );
}

export default Dashboard;
