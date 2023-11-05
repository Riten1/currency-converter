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
    <div className="w-100 h-screen flex justify-center items-center">
    <div className="inline-block ">
      <div className="text-blue-600 font-bold font-quickSand text-3xl">
        Currency <span className="block mt-1">Converter<span className="text-emerald-400">.</span></span>
      </div>
      <div className="mt-10 inline-block">
      <div >
        <Input
          label="From"
          amount={amount}
          currencyList={options}
          onAmountChange={(amount) => setAmount(amount)}
          onChangeSelected={(currency) => setFrom(currency)}
          selectedCurency={from}
        ></Input>
      </div>
      <div className="flex justify-center items-center mt-3 mb-3">
      <button className='bg-emerald-400 text-white w-full cursor-pointer rounded-md font-quickSand pt-1 pb-1 font-bold' onClick={swap}>Swap</button>
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
     <div className="flex justify-center items-center mt-3 mb-3">
      <button className='bg-emerald-400 text-white w-full cursor-pointer rounded-md font-quickSand pt-1 pb-1 font-bold' onClick={result}>
        Convert {from.toUpperCase()} to {to.toUpperCase()}
      </button>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Body;
