import React from 'react';
import './Participate.css';

function Participate() {
    const step = [
        {
            heading: "1. register",
            content: "Sign Up To Become A Member Of Gifted Brainz.",
        },
        {
            heading: "2. take A Challenge",
            content: "Sparticicpate in a challenge. answer 15 question to earn (sQP).ign Up To Become A Member Of Gifted Brainz.",
        }, 
        {
            heading: "3. choose your plan",
            content: "subscribe directly on the site with weekly plan or monthly plan. ",
        }, 
        {
            heading: "4. refer and earn",
            content: "invite your friend. let them about this platform and you’ll earn 40% affiliate commision.",
        },
    ]
  return (
    <div className='participate'>
            <h1>How To Participate</h1>

        <div className='part-map'>
            {step.map((stp)=>(
                <div className='part-border'>
                    <h1>{stp.heading}</h1>
                    <p>{stp.content}</p>
                </div>
            ))}
        </div>


    </div>
  )
}

export default Participate