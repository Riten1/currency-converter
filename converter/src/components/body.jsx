import React from 'react'

const Body = ({label}) => {
  return (
    <div>
      <div>
        <label >{label}</label>
        <input type='number' placeholder='amount'></input>
      </div>
      <div>
        <p>Currency Type</p>
        <select>
          <option>usd</option>
        </select>
      </div>

    </div>
  )
}

export default Body