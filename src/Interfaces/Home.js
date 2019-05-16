import React, {Component} from 'react';
// import mainStations from "./MainStations";
/*import {Link} from 'react-router-dom';*/


class Home extends Component{
   /* state={
        stations: mainStations,
    }*/

    render(){
        return(
            <div>

                <div id="demo" className="carousel slide" data-ride="carousel" align="center">
                    <ul className="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" className="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                    </ul>

                    {/*Slid-show*/}
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={require("./elephant.jpg")}alt="train" style={{width:"1100px",height:"450px"}} />
                        </div>
                        <div className="carousel-item">
                            <img src={require("./train.jpg")} alt="elephant" style={{width:"1100px", height:"450px"}}/>
                        </div>
                        <div className="carousel-item">
                            <img src={require("./temple.jpg")} alt="temple" style={{width:"1100px", height:"450px"}}/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#demo" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                </div>

                <div className="container-fluid">
                    <h1>EasyBooking</h1>
                    <h4>-Train Ticket Booking-</h4>
                    <p align="center">Reserve train tickets with convenience and ease anytime you want.
                        Reservations can be made for selected trains of Srilanka railway. </p>

                    <hr/>

                        {/*Destinations*/}
                        <div className="container-fluid" align="center">
                            <div className="card text-white bg-info mb-3" style={{width:"1000px" , align:"center"}}>
                                <div className="card-header" align="center">Available Destinations</div>
                                <div className="card-text">
                                    <div className="row justify-content-md-center">
                                        <div className="col-md-auto">
                                            <ul className="bullets">
                                                <li>Colombo-Kandy</li>
                                                <li>Colombo-Badulla</li>
                                                <li>Colombo-Jaffna</li>
                                                <li>Colombo-Batti</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-auto">
                                            <ul className="bullets">
                                                <li>Colombo-Trinco</li>
                                                <li>Colombo-Matara</li>
                                                <li>Rajadhani- Kandy ,Badulla and Matara</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Main Stations*/}
                        <div className="container-fluid" align="center">
                            <div className="card text-white bg-success mb-3" style={{width:"1000px", align:"center"}}>
                                <div className="card-header" align="center">Main Stations</div>
                                <div className="card-text">
                                    <div className="row justify-content-md-center">
                                        <div className="col-md-auto">
                                            <ul className="bullets">
                                                <li>Aluthgama</li>
                                                <li>Galle</li>
                                                <li>Kanthale</li>
                                                <li>Galoya</li>
                                                <li>Kilinochchi</li>
                                                <li>Thabalagamuwa</li>
                                                <li>Anuradhapura</li>
                                                <li>Gampaha</li>
                                                <li>Kurunegala</li>
                                                <li>Trincomalee</li>
                                                <li>Badulla</li>
                                                <li>Haputale</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-auto">
                                            <ul className="bullets">
                                                <li>Matara</li>
                                                <li>Valichchena</li>
                                                <li>Bandarawela</li>
                                                <li>Hatton</li>
                                                <li>Nanuoya</li>
                                                <li>Vauniya</li>
                                                <li>Batticalo</li>
                                                <li>Hikkaduwa</li>
                                                <li>Pallai</li>
                                                <li>China bay</li>
                                                <li>Hingurakgoda</li>
                                                <li>Nawalapitiya</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-auto">
                                            <ul className="bullets">
                                                <li>Welikanada</li>
                                                <li>Colombo Fort</li>
                                                <li>Jaffna</li>
                                                <li>Peradeniya</li>
                                                <li>Wellawatte</li>
                                                <li>Diyathalawa</li>
                                                <li>Kalutara</li>
                                                <li>Polgahawela</li>
                                                <li>Ella</li>
                                                <li>Kandy</li>
                                                <li>Polonnaruwa</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>



            </div>
        );
    }
}

export default Home;


