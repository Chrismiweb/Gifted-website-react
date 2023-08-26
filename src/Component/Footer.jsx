import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer>
        <div className='heading'>
            <h1>Join Our Newsletter</h1>
        </div>
        <div className='newsletter'>
            <input type="email" placeholder='hello@smartquiz.com'/>
            <button>JOIN NOW</button>
        </div>

        <div className='footer-menu'>
            <div className='footer-page'>
                <h1>Products</h1>
                <p>Course</p>
                <p>Quiz</p>
                <p>Refer Program</p>
                <p>Quiz</p>
            </div>

            <div className='footer-page'>
                <h1>About</h1>
                <p>What We Do</p>
                <p>Our Mission</p>
                <p>Contact Us</p>
                <p>FAQ</p>
                <p>Privacy  & Policy</p>
            </div>

            <div className='footer-page'>
                <h1>Resources</h1>
                <p>Docs</p>
                <p>careers</p>
                <p>Blog</p>
               
            </div>
        </div>
    </footer>
  )
}

export default Footer