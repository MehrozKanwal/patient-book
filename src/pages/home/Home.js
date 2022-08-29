import React, { useEffect } from 'react'
import "./Home.css"
import welcomeHome from "../../image/about-img.svg"
import Service from './Service'
import Fcility from './facility/Fcility'
import { useNavigate } from 'react-router-dom'

function Home() {
  const naviagate = useNavigate();
  const handleClick = () => {
    
    naviagate("/signup")
  }
 
  return (
    <div>
      <div className='welome-box'>
        <div className='welcomeHome-img'>
          <img src={welcomeHome} alt="welcome"/>
        </div>
        <div className='welome-descrp'>
          <h1>
            Welcome to <span>PatientBook</span>
          </h1>
          <h3>Stay Safe, Stay Healthy</h3>
          <h4>We Care You</h4>
          <button className='login-btn' onClick={handleClick}>Signup for Services</button>
        </div>
      </div>
      <div>
      <Service />
      <Fcility />

      </div>
    </div>

   
  )
}

export default Home