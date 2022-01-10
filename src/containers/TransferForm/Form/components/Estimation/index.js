import React from 'react'

function Estimation({ fee, amount, isMainNet, symbol }) {
  return (
    <>
      <p className="primary">
        <span className="light">Estimated fee: </span>
        {fee} {symbol}
      </p>

      <p className="primary">
        <span className="light">Total: </span>
        {isMainNet ? `${Math.abs(fee) + Math.abs(amount)}` : `${amount}`}{' '}
        {symbol}
      </p>
    </>
  )
}

export default Estimation
