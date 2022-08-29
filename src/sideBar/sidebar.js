import * as React from "react";
import "./sideBar.css";
import dashboardIcon from "../images/dashboard.png";
import calendarIcon from "../images/calendar.png";
import availableIcon from "../images/available.png";
import localIcon from "../images/local.png";
import pharmaIcon from "../images/pharma.png";
import logoutIcon from "../images/logout.png";
import customerIcon from "../images/people.png";
import bookingsIcon from "../images/bookings.png";
import logo from "../images/sideBarLogo.png";
import user from "../images/sieBarUser.png";

import {
    BrowserRouter as Router,
    Link,
    Route,
    useParams,
    Routes,
    Outlet
} from "react-router-dom";

function Dashboard() {
    return (
        <React.Fragment>
            <h1>Dashboard</h1>
            <p>
                Welcome to our Dashboard View.
            </p>
        </React.Fragment>
    );
}

function Calendar() {
    return (
        <React.Fragment>
            <h1>Calendar</h1>
            <p>
                Welcome to our calendar View.
            </p>
        </React.Fragment>
    );
}

function SideBar() {

    let hamburger = document.querySelector(".hamburger");
    //hamburger.addEventListener("click", function () {
    //   document.querySelector("body").classList.toggle("active");
    // })

    return (
        <Router>
        <div className="wrapper">
            <div className="section">
                <div className="top_navbar">
                    <div className="hamburger">
                        <a href="#">
                            <i className="fas fa-bars"></i>
                        </a>
                    </div>
                </div>
                <div className="container">
                    <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/calendar" element={<Calendar />}>
                                {/* <Route path=":topicId" element={<Topic />}>
                                <Route path=":resourceId" element={<Resource />} />
                            </Route>*/}
                        </Route>
                    </Routes>
                        {/*<p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>*/}
                </div>
            </div>
            <div className="sidebar">
                <div className="profile">
                    <img src={logo} alt="logo" style={{ width: '7rem', height: '2rem', marginRight: '6rem' }} />
                    {/* <h3>Anamika Roy</h3>
                        <p>Designer</p> */}
                </div>
                <ul>
                    <li>
                        <a href="/" className="active">
                            <span className="icon"><img src={dashboardIcon} style={{ width: '24px', height: '24px', marginBottom: '-8px' }} alt="Dashboard" /></span>
                            <span className="item">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="/calendar">
                            <span className="icon"><img src={calendarIcon} style={{ width: '24px', height: '24px', marginBottom: '-8px' }} alt="Calendar" /></span>
                            <span className="item">Calendar</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon"><img src={pharmaIcon} style={{ width: '24px', height: '24px', marginBottom: '-8px' }} alt="Pharma" /></span>
                            <span className="item">Pharmacists</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon"><img src={customerIcon} style={{ width: '24px', height: '24px', marginBottom: '-8px' }} alt="Customers" /></span>
                            <span className="item">Customers</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon"><img src={bookingsIcon} style={{ width: '24px', height: '24px', marginBottom: '-8px' }} alt="Bookings" /></span>
                            <span className="item">Bookings</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon"><img src={availableIcon} style={{ width: '24px', height: '24px', marginBottom: '-8px' }} alt="Available" /></span>
                            <span className="item">Availability</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon"><img src={localIcon} style={{ width: '24px', height: '24px', marginBottom: '-8px' }} alt="Local" /></span>
                            <span className="item">Local to Local</span>
                        </a>
                    </li>
                </ul>

                <ul>
                    <li className="liMargin">
                        <a href="#">
                            <span className="icon"><img src={user} style={{ width: '24px', height: '24px', marginBottom: '-6px' }} alt="User" /></span>
                            <span className="item" style={{ fontSize: "13px" }}>PEAK PHARMACY</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon"><img src={logoutIcon} style={{ width: '24px', height: '24px', marginBottom: '-8px' }} alt="Logout" /></span>
                            <span className="item">Logout</span>
                        </a>
                    </li>
                </ul>

            </div>
            </div>
        </Router>
    )
}

export default SideBar;