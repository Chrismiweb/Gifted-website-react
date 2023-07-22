import React from 'react';
import './Feature.css'
import img1 from '../images/card.png';
import img2 from '../images/spin.png';
import img3 from '../images/cancel.png';


function Feature() {
    const ben=[
        {
            image: img1,
            heading:"fast withdrawals",
            content:"we pay within 10-24hrs to your specific bank account.",
        },
        {
            image: img2,
            heading:"Spin And Win ",
            content:"win amazing price by simply spinning the wheel.",
        },
        {
            image: img3,
            heading:"referrals is not compulsory",
        },
    ]
  return (
    <div className='feature'>
        <h1>Feature & Benefits</h1>


        <div className='feature-map'>
            {ben.map((bn)=>(
                <div className='feature-border'>
                    <div className='featureImg'>
                        <img src={bn.image} alt="" />
                    </div>
                    <h1>{bn.heading}</h1>
                    <p>{bn.content}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Feature