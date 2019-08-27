import React from "react";
import "./App.css";
import CreditCard from "./CreditCard.js";
import Background from "./img/bkg.jpg";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${Background})` }}>
      <CreditCard />
    </div>
  );
}
export default App;
