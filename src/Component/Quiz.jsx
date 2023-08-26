import React from 'react'
import './Quiz.css'
import cup from '../images/cup.png';
import logo from '../images/logo.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import frame from '../images/Frame.png';
import telegram from '../images/telegram.png';
import { Link } from 'react-router-dom';


function Quiz(){
    
    return(
        <div className='quiz'>
            <div className='quiz-border'>
                <div className='quiz-text'>
                    <h1>Take Quiz And Earn  Points</h1>
                    <p>Win And Earn Points To 
                        Purchase Course And 
                        Acquire More Skills 
                        From The Experts.</p>
                    <Link to={'/SignUp'}>
                    <button>Play Now</button>

                    </Link>
                </div>

                <div className='cupImg'>
                    <img src={cup} alt="" />
                </div>
            </div>

            <div className='social'>
                <img src={logo} alt="" />
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={frame} alt="" />
                <img src={telegram} alt="" />

            </div>
        </div>
    )
}

export default Quiz