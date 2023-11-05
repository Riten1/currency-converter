import React from "react";

const Input = ({
  label,
  amount,
  onAmountChange,
  selectedCurency,
  onChangeSelected,
  currencyList = [],
}) => {
  return (
    <div>
      <div>
        <label className="font-quickSand block font-bold">{label}</label>
        <input
          type="number"
          placeholder="amount"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          className="bg-gray-100 h-8"
        ></input>
        
        
        <select
          className="border-2 border-solid border-gray-300 rounded-e-md h-8 "
          value={selectedCurency}
          onChange={(e) => onChangeSelected && onChangeSelected(e.target.value)}
        >
          {currencyList.map((curr) => (
            <option key={curr} value={curr} >
              {curr}
            </option>
          ))}
        </select>
      
      </div>
      
    </div>
  );
};

export default Input;
