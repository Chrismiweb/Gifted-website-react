import React from 'react';
import './Navbar.css';
import logo from '../images/logo.png'



function Navbar() {
  return (
    <nav>
         <div className='logoImg'>
            <img src={logo} alt="" />
        </div>
        <div className='page'>
            <a href="">Course</a>
            <a href="">Career</a>
            <a href="">About Us</a>
            <a href=""><button>Sign In</button></a>
        </div>
        
    </nav>
       


    
  )
}

export default Navbar