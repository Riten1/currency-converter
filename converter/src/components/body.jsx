import React, { useState } from 'react'
import Input from './Input'
import useCurrency from '../hooks/useCurrency'

const Body = () => {
  
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('npr')
  const [to, setTo] = useState('usd')
  const [resultAmount, setResultAmount] = useState(0);

  const currencyDetails = useCurrency(from)
  const options = Object.keys(currencyDetails)

const swap = () => {
  setFrom(to)
  setTo(from)
  setResultAmount(amount)
  setAmount(resultAmount)
}

  const result = () => {
    setResultAmount(amount * currencyDetails[to])
  }

  return (
    <>
    <div>
      <Input title='From' amount={amount} currencyList = {options} onAmountChange ={(amount) => setAmount(amount)} onChangeSelected={(currency) => setFrom(currency)} selectedCurency ={from}></Input>
    </div>
    <div>
    <Input label='To' amount={amount} currencyList = {options} onAmountChange ={(amount) => setAmount(amount)} onChangeSelected={(currency) => setTo(currency)} selectedCurency ={to}></Input>

    </div>
    <button onClick={result}>Convert{from.toUpperCase()} to {to.toUpperCase()}</button>
    </>
  )
}

export default Body