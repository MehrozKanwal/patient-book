import React from 'react'
import { useNavigate } from 'react-router-dom'
import homeImg from "../../image/home-img.svg"
import logo from "../../image/patientbook_logoo.png"
import "../login/Login.css"

function Signup() {
  const navigate = useNavigate()
  const handleSubmit = () => {
    navigate("/dashboard")
  }
  return (
    <div className="login-section">
    
    <div className="side-image">
      <img src={homeImg} alt="Signup-Img" />
    </div>
    
    <div className="login-panel">
      <div className="login-panel-heading">
        <img src={logo} alt="" />
        <h1>Patient Portal</h1>
        <h3>Create Your Account </h3>
      </div>

  
      

      <form action="" className="login-form" onSubmit={handleSubmit}>
          <div className="inputbox">
            <span>Full Name</span>
            <input type="text" placeholder="Enter your Full Name" className="" />
          </div>
          <div className="inputbox">
            <span>Email</span>
            <input type="email" placeholder="Enter your Email" className="" />
          </div>

          <div className="inputbox">
            <span>Password</span>
            <input type="password" placeholder="Enter your password" className="" />
          </div>
          <div className="inputbox">
            <span>Date of Birth</span>
            <input type="date" placeholder="Enter your DOB" className="" />
          </div>
          <div className="genders">
            <span>Select Gender</span>
            <div className="gender">
              <div className="gend">
                <input type="radio" name="Gender" value="male" className="radios" /><span>Male</span>
              </div>
              <div className="gend">
                <input type="radio" name="Gender" value="female" className="radios" /><span>Female</span>
              </div>
            </div>
          </div>
          

          <div className="inputbox login-panel-heading">
            <button className="login-btn" onclick="">SignUp</button>
          </div>

          <div className="inputbox login-panel-heading">
            <span>Already have an account? <a href="/login">Login</a></span>
          </div>

      </form>
   </div>

 

    </div>
  )
}

export default Signup