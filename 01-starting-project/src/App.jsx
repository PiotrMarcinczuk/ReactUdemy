import User from "./User";
import Result from "./Result";
import logo from "./assets/investment-calculator-logo.png";
import React, { useState } from "react";

function App() {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);

  const obj = {
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  };
  return (
    <>
      <div id="header">
        <img src={logo} alt="Investment Calculator" />
        <h1>Investment Calculator</h1>
      </div>
      <User
        setInitialInvestment={setInitialInvestment}
        setAnnualInvestment={setAnnualInvestment}
        setExpectedReturn={setExpectedReturn}
        setDuration={setDuration}
      />
      <Result obj={obj} />
    </>
  );
}

export default App;
