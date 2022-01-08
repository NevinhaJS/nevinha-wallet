import React from 'react'

function Estimation({ fee, amount }) {
  return (
    <>
      <p className="primary">
        <span className="light">Estimated fee: </span>
        {fee} ETH
      </p>

      <p className="primary">
        <span className="light">Total: </span>
        {Math.abs(fee) + Math.abs(amount)} ETH
      </p>
    </>
  )
}

export default Estimation
