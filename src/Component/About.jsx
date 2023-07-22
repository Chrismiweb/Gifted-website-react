import React from 'react';
import './About.css'
import img from '../images/about.png'

function About(){
    return(
        <div className='about'>
            <div className='aboutText'> 
                <h1>About Gifted Brainz</h1>
                <p> this is a platform where Africans can 
                    learn and challenge others in active
                     Quiz competition and stand a chance 
                     to win cash prizes up to #200,000 or 
                     its Equizalent in USDT. It's an initiative 
                     that seeks to promote intellectual growth, 
                     and also seek to educate and elighten 
                     Africans with information, knowledge 
                     and skill in areas such as Afica History, 
                     Sport, Web Development, Blockchain, 
                     Cryptocurrency, 
                    Quantum mechanics, programming etc...</p>
            </div>

            <div className='aboutImg'>
                <img src={img} alt="" />
            </div>
        </div>
    )
}

export default About