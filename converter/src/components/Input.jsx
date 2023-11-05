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
        <label>{label}</label>
        <input
          type="number"
          placeholder="amount"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        ></input>
      </div>
      <div>
        <p>Currency Type</p>
        <select
          value={selectedCurency}
          onChange={(e) => onChangeSelected && onChangeSelected(e.target.value)}
        >
          {currencyList.map((curr) => (
            <option key={curr} value={curr}>
              {curr}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Input;
