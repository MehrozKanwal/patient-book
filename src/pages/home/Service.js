import React from 'react'
import "./Service.css"
import servicesImg from "../../image/book-img.svg"

function Service() {
    return (
        <div className='service-container'>
            <h1>Our Services</h1>
            <div className='service-box'>
                <div className='service'>
                    <div className='services'>
                        <div className=''>
                            <i className="fas fa-stethoscope icon"></i>
                        </div>
                        <div>
                            <h3>Checkups Availability</h3>
                            <p> Doctors Availabe 24/7</p>

                        </div>
                    </div>
                    <div className='services'>
                        <div className=''>
                            <i className="fas fa-ambulance icon"></i>
                        </div>
                        <div>
                            <h3>24/7 Ambulance Services</h3>
                            <p> Doctors Availabe 24/7</p>

                        </div>
                    </div>
                    <div className='services'>
                        <div className=''>
                            <i className="fas fa-notes-medical icon"></i>
                        </div>
                        <div className='serv-desc'>
                            <h3>Book online Appointments</h3>
                            <p>Book Appointment with Doctors Availbility</p>

                        </div>
                    </div>
                    <div className='services'>
                        <div className=''>
                            <i className="fas  fa-history icon"></i>
                        </div>
                        <div>
                            <h3>Track your Report History</h3>
                            <p>See your report on your Dashboard </p>

                        </div>
                    </div>


                </div>
                <div className='service-img'>
                    <img src={servicesImg} />
                </div>


            </div>


        </div>

    )
}

export default Service