import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';

import Booking from "./Interfaces/bookingForm"


import Home from "./Interfaces/Home";
import PaymentMethods from "./Interfaces/PaymentMethods";
import AboutUs from "./Interfaces/AboutUs";
import CreditCard from "./Interfaces/CreditCradPayments";
import MobilePhone from "./Interfaces/MobilePhonePayments";


function App() {
    return (
        <div className="App">
            <Router>


                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    {/*logo*/}
                    <a className="navbar-brand" href="Home.js">
                        <img src={require("./Interfaces/finalLogo.jpg")} alt="logo" style={{width: "150px"}}/>
                    </a>

                    {/*links*/}
                    <ul className="navbar-nav">
                        {/*<li className="nav-item">
                            <a className="nav-link" href="#">Train Shedules</a>
                            <a className="nav-link" href="#">Train Shedules</a>
                        </li>
*/}
                        <li className="nav-item">
                            <Link to='/booking'>Booking</Link>
                        </li>

                        <li> ----- </li>

                        <li className="nav-item">
                            <Link to='/aboutUs'>About Us</Link>
                        </li>

                        {/*<li className="nav-item">*/}
                            {/*/!*<a className="nav-link" href="#">Contact Us</a>*!/*/}
                            {/*<a className="nav-link" href="#">Train Shedules</a>*/}
                        {/*</li>*/}
                    </ul>
                </nav>

                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/booking" component={Booking}/>
                    <Route path="/paymentDetils" component={PaymentMethods}/>
                    <Route path="/aboutUs" component={AboutUs}/>
                    <Route path="/creditCard" component={CreditCard}/>
                    <Route path="/mobilePhone" component={MobilePhone}/>
                </Switch>

            </Router>

        </div>
    );
}

export default App;
