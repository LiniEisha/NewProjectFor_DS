import React, {Component} from 'react';
import axios from 'axios';

import { NOOFTICKET, GOTO, GOFROM} from "./bookingForm";

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
            to : sessionStorage.getItem(GOTO),
            from : sessionStorage.getItem(GOFROM),
            ticket : sessionStorage.getItem(NOOFTICKET),
            totPrice: 0
        }

    }


    OnSelectCreditCard = (event) => {
         this.setState({isCreditCard: true});
     }

    OnSelectMobliePhone = (event) => {
        this.setState({isMobilePhone: true});
    }

    submitSelectedType = (event) =>{
        event.preventDefault();
        if(this.state.isCreditCard)
        this.props.history.push("/creditCard");
        else if(this.state.isMobilePhone)
            this.props.history.push("/mobilePhone")
        else
            alert("please select a payment method")
    }

    componentDidMount() {
        const postData = {
            "to": this.state.to,
            "from" : this.state.from,
            "noOfTickets" : Number(this.state.ticket)
        };

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            }
        };
        axios.post('http://localhost:8080/DSEasyBooking/webapi/myresourceTrain/getprice', postData,axiosConfig)
            .then(response=> {
                this.setState({totPrice: response.data.totPrice});
            })
    }

    render(){
        return (
            <div>
                <div className="container-fluid" align="center">
                    <div className="card text-white bg-warning mb-3" style={{width: "500px", align: "center"}}>
                        <div className="card-header" align="center">Booking Details</div>
                        <h5 className="card-title"> Payment : RS. {this.state.totPrice.toFixed()} /= </h5>
                        <div className="card-text">
                            <div className="row justify-content-md-center">
                                <div className="col-md-auto">
                                    <ul className="bullets">
                                        <li>No of tickets : {sessionStorage.getItem(NOOFTICKET)}</li>
                                        <li>From : {sessionStorage.getItem(GOFROM)}</li>
                                        <li>To : {sessionStorage.getItem(GOTO)}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h5 className="text-info"> </h5>

                <hr/>
                <hr/>

                <div className="container" style={{align: "center"}}>
                    <h1>Payment Type</h1>

                    <div className="container-fluid" align="center">

                        <div className="card text-white bg-success mb-3" style={{width: "500px", align: "center"}}>
                            <div className="card-header" align="center">Select Payment Type</div>

                            <div className="card-text">
                                        <form className="was-validated">
                                            <input type="radio" name="paymentType" value="creditCard" onChange={this.OnSelectCreditCard.bind()}/> Credit Card  <br/>
                                            <input type="radio" name="paymentType" value="mobliephone" onChange={this.OnSelectMobliePhone.bind()}/> Mobile Phone

                                            <div className="form-group">
                                                <button type="button" className="btn btn-success btn-md" onClick={this.submitSelectedType.bind()}>Confirm</button>
                                            </div>
                                            {this.state.paymentOption}
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