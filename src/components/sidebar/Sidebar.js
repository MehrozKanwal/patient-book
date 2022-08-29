import React from 'react'
import './Sidebar.css'

function Sidebar() {
    const handleToggle = () =>{
        let sidebar = document.querySelector(".sidebar");
        let sidebarBtn = document.querySelector(".toggle");
        console.log(sidebar);
        sidebar.classList.toggle("close");
    }
    const handleArrow = (e) => {
      let arrowParent = e.target.parentElement.parentElement;
      console.log(arrowParent)
      //selecting main parent of arrow
      arrowParent.classList.toggle("showMenu");
    }
    
  return (
  <div className="container">
    <div className="sidebar close ">

    <div className="menu-bar">
        <div className="toggle-side">
            <i className='bx bx-chevron-right toggle' onClick={handleToggle}></i>
        </div>
        <div className="menu">
   
    <ul className="nav-links">
        
        <li className="search-box">
            <i className='bx bx-search icon'></i>
            <input type="text" placeholder="Search..." />
        </li>


      <li>
        <a href="/dashboard">
          <i className='bx bxs-dashboard'></i>
          <span className="link_name">Dashboard</span>
        </a>
        <ul className="sub-menu blank">
          <li><a className="link_name" href="#">Dashboard</a></li>
        </ul>
      </li>
      <li>
        <a href="/">
          <i className='bx bxs-user-circle'></i>
          <span className="link_name">My Profile</span>
        </a>
        <ul className="sub-menu blank">
          <li><a className="link_name" href="#">My Profile</a></li>
        </ul>
      </li>
      <li>
        <div className="iocn-link">
          <a href="/callAmbulance">
            <i className="fas fa-ambulance"></i>
            <span className="link_name">Emergency</span>
          </a>
          <i className='bx bxs-chevron-down arrow' onClick={handleArrow} ></i>
        </div>
        <ul className="sub-menu">
          <li><a className="link_name" href="#">Emergency</a></li>
          <li><a href="#">UI Face</a></li>
          <li><a href="#">Pigments</a></li>
          <li><a href="#">Box Icons</a></li>
        </ul>
      </li>
      <li>
        <div className="iocn-link">
          <a href="/appointment">
            <i className="fas fa-notes-medical"></i>
            <span className="link_name">Appointments</span>
          </a>
          <i className='bx bxs-chevron-down arrow' onClick={handleArrow} ></i>
        </div>
        <ul className="sub-menu">
          <li><a className="link_name" href="/appointment">Appointments</a></li>
          <li><a href="#">UI Face</a></li>
          <li><a href="#">Pigments</a></li>
          <li><a href="#">Box Icons</a></li>
        </ul>
      </li>
      <li>
        <div className="iocn-link">
          <a href="#">
            <i className="fas fa-pills"></i>
            <span className="link_name">Customer Support</span>
          </a>
          <i className='bx bxs-chevron-down arrow' onClick={handleArrow} ></i>
        </div>
        <ul className="sub-menu">
          <li><a className="link_name" href="#">Customer Support</a></li>
          <li><a href="#">UI Face</a></li>
          <li><a href="#">Pigments</a></li>
          <li><a href="#">Box Icons</a></li>
        </ul>
      </li>
      
      <li>
        <div className="iocn-link">
          <a href="#">
            <i className="fas fa-user-md"></i>
            <span className="link_name">Available Doctors</span>
          </a>
          <i className='bx bxs-chevron-down arrow' onClick={handleArrow} ></i>
        </div>
        <ul className="sub-menu">
          <li><a className="link_name" href="#">Available Doctors</a></li>
          <li><a href="#">HTML & CSS</a></li>
          <li><a href="#">JavaScript</a></li>
          <li><a href="#">PHP & MySQL</a></li>
        </ul>
      </li>
      <li>
        <div className="iocn-link">
          <a href="#">
            <i className='bx bxs-timer'></i>
            <span className="link_name">Scheduling</span>
          </a>
          <i className='bx bxs-chevron-down arrow' onClick={handleArrow} ></i>
        </div>
        <ul className="sub-menu">
          <li><a className="link_name" href="#">Scheduling</a></li>
          <li><a href="#">Web Design</a></li>
          <li><a href="#">Login Form</a></li>
          <li><a href="#">Card Design</a></li>
        </ul>
      </li>
      <li>
        <a href="#">
          <i className="fas fa-comment-medical"></i>
          <span className="link_name">Feedbacks</span>
        </a>
        <ul className="sub-menu blank">
          <li><a className="link_name" href="#">Feedbacks</a></li>
        </ul>
      </li>
      <li>
        <a href="#">
          <i className="fas fa-history"></i>
          <span className="link_name">Previous History</span>
        </a>
        <ul className="sub-menu blank">
          <li><a className="link_name" href="#">Previous History</a></li>
        </ul>
      </li>
      <li>
        <div className="iocn-link">
          <a href="#">
            <i className="fas fa-users"></i>
            <span className="link_name">Patient</span>
          </a>
          <i className='bx bxs-chevron-down arrow' onClick={handleArrow} ></i>
        </div>
        <ul className="sub-menu">
          <li><a className="link_name" href="#">Patient</a></li>
          <li><a href="#">UI Face</a></li>
          <li><a href="#">Pigments</a></li>
          <li><a href="#">Box Icons</a></li>
        </ul>
      </li>
      <li>
        <div className="iocn-link">
          <a href="#">
            <i className="fas fa-users-cog"></i>
            <span className="link_name">Setups</span>
          </a>
          <i className='bx bxs-chevron-down arrow' onClick={handleArrow} ></i>
        </div>
        <ul className="sub-menu">
          <li><a className="link_name" href="#">Setups</a></li>
          <li><a href="#">Doctor Setup</a></li>
          <li><a href="#">Patient Setup</a></li>
        </ul>
      </li>
      <li>
        <div className="iocn-link">
          <a href="#">
            <i className="fas fa-paste"></i>
            <span className="link_name">Reports</span>
          </a>
          <i className='bx bxs-chevron-down arrow' onClick={handleArrow} ></i>
        </div>
        <ul className="sub-menu">
          <li><a className="link_name" href="#">Reports</a></li>
          <li><a href="#">UI Face</a></li>
          <li><a href="#">Pigments</a></li>
          <li><a href="#">Box Icons</a></li>
        </ul>
      </li>
      
      
</ul>
  </div>
</div>
</div>
    </div>
  )
}

export default Sidebar