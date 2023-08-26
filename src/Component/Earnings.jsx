import React from 'react'

function Earnings(Earnings) {
  return (

    <div className={Earnings.box}>
        <h1>{Earnings.heading}</h1>
        <p>{Earnings.amount}</p>
    </div>
  )

}

export default Earnings