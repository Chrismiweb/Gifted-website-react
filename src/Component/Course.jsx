import React, { useState } from 'react'
import './Course.css';

function Course() {
    const[hide,show] = useState(false)

    const click=()=>{
        show(!hide);
    }

    
  return (
    <div className='course'>
        <div className='AvailCourse'>
            <h1>Availabe Course</h1>
        </div>

        <div className='courseBody'>
                <div className='Gen-Body'>
                    <div className='head'>
                        <h1>UI/UX Design</h1>
                        <button onClick={click}>+</button>
                    </div>

                    <div className={hide? 'hello': 'hi'}>
                            <p> you’ll be taught by our 
                                experience and qualified 
                                teachers, and get update
                                through our website, 
                                telegram page and 
                                newsletters.</p>
                    </div>
                </div>

                <div className='Gen-Body'>
                    <div className='head'>
                        <h1>Graphics Design</h1>
                        <button >+</button>
                    </div>
                </div>

                <div className='Gen-Body'>
                    <div className='head'>
                        <h1>Backend Web Development</h1>
                        <button >+</button>
                    </div>
                </div>
                <div className='Gen-Body'>
                    <div className='head'>
                        <h1>african health and herb methodology</h1>
                        
                        <button >+</button>
                    </div>
                </div>
                <div className='Gen-Body'>
                    <div className='head'>
                        <h1>Front-End Web Development</h1>
                        <button >+</button>
                    </div>
                </div>
                <div className='Gen-Body'>
                    <div className='head'>
                        <h1>True Africa History</h1>
                        <button >+</button>
                    </div>
                </div>
                <div className='Gen-Body'>
                    <div className='head'>
                        <h1>Page Management</h1>
                        <button >+</button>
                    </div>
                </div>
                <div className='Gen-Body'>
                    <div className='head'>
                        <h1>Quantum Mechanics</h1>
                        <button >+</button>
                    </div>
                </div>
                <div className='Gen-Body'>
                    <div className='head'>
                        <h1>Skin Care Production</h1>
                        <button >+</button>
                    </div>
                </div>
                <div className='Gen-Body'>
                    <div className='head'>
                        <h1>DeFi & NFTs</h1>
                        <button >+</button>
                    </div>
                </div>
                <div className='Gen-Body'>
                    <div className='head'>
                        <h1>Advance Cryptocurrency</h1>
                        <button >+</button>
                    </div>
                </div>
            


            



            
        </div>

    </div>
  )
}


export default Course