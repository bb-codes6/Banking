// src/App.js
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import TransactionHistory from "./components/TransactionHistory";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Navbar />
      {!isLoggedIn ? (
        <Login onLogin={setIsLoggedIn} />
      ) : (
        <>
          <Dashboard />
          <TransactionHistory />
        </>
      )}
    </div>
  );
}

export default App;
