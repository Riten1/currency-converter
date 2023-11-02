import React from 'react'

const Input = ({title, amount, onAmountChange, selectedCurency, onChangeSelected, currencyList = [], amountDisable = false,
  currencyDisable = false,}) => {
  return (
    <div>
      <div>
        <label >{title}</label>
        <input type='number' placeholder='amount' value={amount} onChange={ (e) => onAmountChange && onAmountChange(Number(e.target.value)) } disabled={amountDisable}></input>
      </div>
      <div>
        <p>Currency Type</p>
        <select value={selectedCurency} onChange={(e) => onChangeSelected && onChangeSelected(e.target.value)}  disabled={currencyDisable}>
          {currencyList.map((curr) => (<option key={curr} value={curr}>{curr}</option>))}
        </select>
      </div>

    </div>
  )
}

export default Input