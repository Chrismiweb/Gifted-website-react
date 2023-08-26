import React from 'react'

function Planprops(Planprops) {
  return (
    <div className={Planprops.myplan}>
        <h2>{Planprops.plan}</h2>
        <h3>{Planprops.price}</h3>
        <p>{Planprops.feature1}</p>
        <p>{Planprops.feature2}</p>
        <p>{Planprops.feature3}</p>
        <p>{Planprops.feature4}</p>
        <p>{Planprops.feature5}</p>
        
    </div>
  )
}

export default Planprops