import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import "../../components/sidebar/Sidebar.css"
import "./Dashboard.css"
import welcomePat from "../../image/about-img.svg"
import ReportDocument from './report-document/ReportDocument'
import Graph from './graph/Graph'
function Dashboard() {
    return (
        <div className='container'> <Sidebar />
            <section className="home-section">

                <div className="home-content">

                    <div className="dashboard-cont">
                        <div className="pat-act">
                            <div>
                                <div className="welocme-cont">
                                    <div className="pat-intro">
                                        <h1> Welcome  Patient Name !</h1>
                                        <p className="pat-desc">Lets Check your health with us. Care with your health from now
                                            to get more live better.
                                        </p>
                                        <button className="login-btn" >Connect to Doctor</button>
                                    </div>
                                    <div>
                                        <img alt="welcome" className="welcome-img"
                                            src={welcomePat} />
                                    </div>


                                </div>
                            </div>
                            <div className="activity-cont">
                                <div className="activity">
                                    <h1>My Apctivity</h1>
                                    <div>
                                        <p>Login in 15-jan 2pm</p>
                                        <p>Login in 15-jan 2pm</p>
                                        <p>Login in 15-jan 2pm</p>
                                        <p>Login in 15-jan 2pm</p>
                                        <p>Login in 15-jan 2pm</p>
                                        <p>Login in 15-jan 2pm</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="cart-cont">
                            <div className="cart">
                                <div>
                                    <h3>Blood Pressure</h3>
                                    <p>110/70</p>
                                </div>
                                <div className="dash-icon">
                                    <i className="fas fa-tint"></i>
                                </div>
                            </div>
                            <div className="cart">
                                <div>
                                    <h3>Heart Rate</h3>
                                    <p>85 bmp</p>
                                </div>
                                <div className="dash-icon">
                                    <i className="fas fa-heartbeat"></i>
                                </div>
                            </div>
                            <div className="cart">
                                <div>
                                    <h3>Total Reports</h3>
                                    <p>3</p>
                                </div>
                                <div className="dash-icon">
                                    <i className="fas fa-paste"></i>
                                </div>
                            </div>
                            <div className="cart">
                                <div>
                                    <h3>Total Appointments</h3>
                                    <p>3</p>
                                </div>
                                <div className="dash-icon">
                                    <i className="fas fa-notes-medical"></i>
                                </div>
                            </div>


                        </div>
                        <div className='gra-pdf'>
                            <Graph />
                            <ReportDocument />
                        </div>

                    </div>
                    

                  





                </div>
            </section>
        </div>
    )
}

export default Dashboard