import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import "./CallAmbulance.css"

function CallAmbulance() {
  return (
    <div className='container'>
     <Sidebar />
     <section class="home-section">
    
        <div class="home-content">
          <div class="report">
            <h1>Call Ambulance</h1>
            <div class="report-box">
             
            <form action="" id="form">
                <div class="main-cont">
                  <div>
                    <div class="call-details">
                      <span>Full Name:</span>
                      <input type="text" placeholder="Enter your full Name" required />
                    </div>
                    <div  class="call-details">
                      <span>Address:</span>
                      <input type="text" placeholder="Enter your Address" required />
                    </div>
                    <div class="call-details">
                      <span>Contact Number:</span>
                      <input type="number" placeholder="Enter your Phone number" required />
                    </div>
                  </div>
                  <div>
                    <div class="call-details">
                      <span>Select Your City:</span>
                      <select class="" >
                        <option selected>Open this select menu</option>
                        <option value="1">Karachi</option>
                        <option value="2">Islamabad</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div class="call-details">
                      <span>Select Your Area:</span>
                      <select  >
                        <option selected>Open this select menu</option>
                        <option value="1">Nazimabad</option>
                        <option value="2">Liquatabad</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                      <div class="call-details">
                        <span>Description:</span>
                        <input type="text" placeholder="Enter Description" />
                      </div>

                  </div>

                </div>
                
                

             

                
               
                <div class="emergency-number">
                   <button class="login-btn" id="myBtn" type="submit" onclick="popupOpen()">Send Request</button>
                  <p>Emergency Call Number: <em> +927647358938</em></p>

                </div>
                
                
  
           </form>
  
            </div>
  
          </div>
          <div class="alert-box " id="popup">
            <p>Your request has been send.</p>
            <button class="login-btn" >Ok</button>
            

          </div>
  
         



         
     
            




         
        </div>
      </section>
            
    </div>
  )
}

export default CallAmbulance