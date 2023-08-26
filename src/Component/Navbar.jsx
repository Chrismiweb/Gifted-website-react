import React, { useState } from 'react';
import './Navbar.css';
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';



function Navbar() {
      const[hide,show] = useState(false);
      const toggle = ()=>{
        show(!hide);
      }
  return (
    <div className='navbar'>
      <nav>
         <div className='logoImg'>
            <img src={logo} alt="" />
         </div>
        <div className='page'>
            <a href="">Course</a>
            <a href="">Career</a>
            <a href="">About Us</a>
            <Link to={'/sign'}><button>Sign In</button></Link>
        </div>
        <button className='menuBar' onClick={toggle}>=</button>   
      </nav>

          <div className={hide? "menu1" : 'menu2'}>
              <Link to={'/Course'}>Course</Link>
              <a href="">Career</a>
              <a href="">About Us</a>
              <Link to={'/sign'}><button>Sign In</button></Link>
              
        </div> 
    </div>

   
       
    

    
  )
}

export default Navbar