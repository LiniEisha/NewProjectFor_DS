import React, {Component} from 'react';
import ReactDOM from "react-dom";
/*import Booking from "./Interfaces/bookingForm";*/
import {USERNAME, NOOFTICKET, GOTO, GOFROM} from "./bookingForm";
import mainStations from "./MainStations";
import CreditCard from "./CreditCradPayments";

class PaymentMethods extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paymentOption: null,
            selectCreditCard: "",
            isCreditCard : false,
            selectMobilePhone: "",
            isMobilePhone: false,
            selectedOption: "",
        }

      /*  this.OnSelectType = this.OnSelectType.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);*/
    }
/*
    OnSelectType = (event) => {
        this.setState({selectType: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();

        alert("You chose the ${this.state.selectType}");
    }
*/
     OnSelectCreditCard = (event) => {
        // this.setState({selectCreditCard: event.target.value});
         this.setState({isCreditCard: true});
     }

    OnSelectMobliePhone = (event) => {
        // this.setState({selectMobilePhone: event.target.value});
        this.setState({isMobilePhone: true});
    }
/*
   OnSelectPaymentType = (event) => {
           if (e.target.checked && event.target.value === "no") { // if value of "No" option is selected
               this.props.history.push("newRoute"); // navigate to another route
               //window.location.href = "https://www.google.com"; - if you want to navigate to another page
           }
           this.setState({ selectedOption: event.target.value });
       }*/



    submitSelectedType = (event) =>{
        event.preventDefault();
        if(this.state.isCreditCard)
        this.props.history.push("/creditCard");
        else if(this.state.isMobilePhone)
            this.props.history.push("/mobilePhone")
        else
            alert("please select a payment method")
        /*if(this.state.isCreditCard === true){
            //go to component credit card
            console.log(this.state.selectCreditCard)
        }

        if(this.state.isMobilePhone === true){
            //go to component mobile phone payment
            console.log(this.state.selectMobilePhone)
        }*/

    }

    render(){
        return (


            <div>
                {/* <h1>Booking Details</h1>
                <p> Details: {this.props.userName} </p>
                DisplayDetails(nextProps){
                    nextProps.isUserName;
            }*/}

                {/* <h3>Name : {sessionStorage.getItem(USERNAME)}</h3>
                <h3>No of tickets : {sessionStorage.getItem(NOOFTICKET)}</h3>
                <h3>From : {sessionStorage.getItem(GOFROM)}</h3>
                <h3>To : {sessionStorage.getItem(GOTO)}</h3>*/}

                <div className="container-fluid" align="center">
                    <div className="card text-white bg-warning mb-3" style={{width: "500px", align: "center"}}>
                        <div className="card-header" align="center">Booking Details</div>
                        <div className="card-text">
                            <div className="row justify-content-md-center">
                                <div className="col-md-auto">
                                    <ul className="bullets">
                                        <li>Name : {sessionStorage.getItem(USERNAME)}</li>
                                        <li>No of tickets : {sessionStorage.getItem(NOOFTICKET)}</li>
                                        <li>From : {sessionStorage.getItem(GOFROM)}</li>
                                        <li>To : {sessionStorage.getItem(GOTO)}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <hr/>
                <hr/>

                <div className="container" style={{align: "center"}}>
                    <h1>Payment Type</h1>

                    <div className="container-fluid" align="center">

                        <div className="card text-white bg-success mb-3" style={{width: "500px", align: "center"}}>
                            <div className="card-header" align="center">Select Payment Type</div>
                            <div className="card-text">
                                        <form className="was-validated" onSubmit={this.handleSubmit}>
                                            <input type="radio" name="paymentType" value="creditCard" onChange={this.OnSelectCreditCard.bind()}/> Credit Card  <br/>
                                            <input type="radio" name="paymentType" value="mobliephone" onChange={this.OnSelectMobliePhone.bind()}/> Mobile Phone

                                            <div className="form-group">
                                                <button type="button" className="btn btn-success btn-md" onClick={this.submitSelectedType.bind()}>Confirm</button>
                                            </div>
                                        </form>
                            </div>
                        </div>
                    </div>

                </div>






            </div>
        );
    }
}

export default PaymentMethods;