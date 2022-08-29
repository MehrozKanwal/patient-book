import React from 'react'
import "./Login.css"
import homeImg from "../../image/home-img.svg"
import logo from "../../image/patientbook_logoo.png"
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const handleSubmit = () => {
    navigate("/dashboard")
  }
  return (
    <div>
      <section className="login-section">
    <div className="side-image">
      <img src={homeImg} alt="" />
    </div>
    
    <div className="login-panel">
      <div className="login-panel-heading">
        <img src={logo} alt="" />
        <h1>Patient Portal</h1>
        <h3>Log In your account </h3>
      </div>

  
      

      <form action="" className="login-form" onSubmit={handleSubmit}>

          <div className="inputbox">
            <span>Email</span>
            <input type="email" placeholder="Enter your Email" className="" />
          </div>

          <div className="inputbox">
            <span>Password</span>
            <input type="password" placeholder="Enter your password" className="" />
          </div>

          <div className="inputbox login-panel-heading">
            <button className="login-btn" onclick="">LogIn</button>
          </div>

          <div className="inputbox login-panel-heading">
            <span>Don't have an account? <a href="/signup">Signup</a></span>
          </div>

      </form>
   </div>

  </section>
    </div>
  )
}

export default Login