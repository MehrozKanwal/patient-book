import React from 'react'
import './Navbar.css'
import logo from "../../image/patientbook_logoo.png"
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const naviagate = useNavigate();
  
  const handleToggleBtn = () => {
    let menu = document.querySelector('#menu-btn');
    let navbar = document.querySelector('.navbar');
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

  }
  const handleScroll = () => {
    let menu = document.querySelector('#menu-btn');
    let navbar = document.querySelector('.navbar');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
  }

  const handleClick = () => {
    
    naviagate("/signup")
  }
  
  return (
    <div>
      <header className="header">


        <img className="logo" src={logo} alt="Logo" />

        <nav className="navbar">
          <a className="navbar-list" href="/">Home</a>
          <a className="navbar-list" href="/dashboard">Dashboard</a>
          <a className="navbar-list" href="/appointment">Appointment</a>
          <button className="login-btn" onClick={handleClick}>SignIn</button>


        </nav>

        <div id="menu-btn" className="fas fa-bars" onClick={handleToggleBtn}
        onScroll={handleScroll}></div>

      </header>
    </div>
  )
}

export default Navbar