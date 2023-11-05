import React, { useState } from "react";
import Input from "./Input";
import useCurrency from "../hooks/useCurrency";

const Body = () => {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("npr");
  const [resultAmount, setResultAmount] = useState(0);

  const currencyDetails = useCurrency(from);
  const options = Object.keys(currencyDetails);

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  const result = () => {
    setResultAmount(amount * currencyDetails[to]);
  };


  return (
    <>
      <div>
        <Input
          label="From"
          amount={amount}
          currencyList={options}
          onAmountChange={(amount) => setAmount(amount)}
          onChangeSelected={(currency) => setFrom(currency)}
          selectedCurency={from}
        ></Input>
      </div>
      <div>
        <Input
          label="To"
          amount={resultAmount.toFixed(2)}
          currencyList={options}
          onChangeSelected={(currency) => setTo(currency)}
          selectedCurency={to}
        ></Input>
      </div>
      <button onClick={swap}>Swap</button>
      <button onClick={result}>
        Convert {from.toUpperCase()} to {to.toUpperCase()}
      </button>

    
    </>
  );
};

export default Body;
