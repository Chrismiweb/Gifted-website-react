import React from 'react';
import './Work.css';
import img1 from '../images/stepone.png';
import img2 from '../images/about.png';
import img3 from '../images/steptwo.png';
import img4 from '../images/stepthree.png';


function Work() {
    const Steps = [
        {
            image: img1,
            content: "nigerians and other african countries can come and challenge one another.in a daily active quiz competition and stand a chance to win cash prize more than #100,000 weekly/monthly respectively or it’s equivalent in uSDT."
        },
        {
            image: img2,
            content: "you will acquire valuable skills and knowledge in blockchain, De-fi, nFTs, UI/UX Design, fashion/cosmetic and so on."
        },
        {
            image: img3,
            content: "you will participate in intellectual contest for a life changing prize. you have the chance to join our innovative and creative team."
        }, {
            image: img4,
            content: "you enjoy steady affiliate earnings. refer your friends and earn 40% affiliate commision."
        },
        
    ]



  return (
    <div className='work'>
        <div className='heading'>
            <h1>How It Works</h1>
        </div>

        <div className='map'>
            {Steps.map((stp)=>(
                <div className='workSteps'>
                    <div className='workImg'>
                        <img src={stp.image} alt="" />
                    </div>
                    <p>{stp.content}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Work