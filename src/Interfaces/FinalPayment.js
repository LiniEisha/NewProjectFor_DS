import React, {Component} from "react";
import axios from 'axios';
import {NAME, EMAIL, CREDITCARD, CVC, EXP, TOTPRICE, C, MC} from "./CreditCradPayments";
import {GOTO, GOFROM, NOOFTICKET} from "./bookingForm";
import {M, MEMAIL, MOBILENUMBER, PIN, CM} from "./MobilePhonePayments";

class FinalPayment extends Component {
    constructor(props) {
        super();
        this.state = {
            name: sessionStorage.getItem(NAME),
            email: sessionStorage.getItem(EMAIL),
            mobileEmail: sessionStorage.getItem(MEMAIL),
            creditm: sessionStorage.getItem(CM),
            mobilec: sessionStorage.getItem(MC),
            credit: sessionStorage.getItem(C),
            mobile: sessionStorage.getItem(M),
            mobileNumber: sessionStorage.getItem(MOBILENUMBER),
            cardNumber: sessionStorage.getItem(CREDITCARD),
            cVC: sessionStorage.getItem(CVC),
            expireDate: sessionStorage.getItem(EXP),
            totPrice: sessionStorage.getItem(TOTPRICE),
            to: sessionStorage.getItem(GOTO),
            from: sessionStorage.getItem(GOFROM),
            tickets: sessionStorage.getItem(NOOFTICKET),
            percentage: "50",
            total: 0,
            amount: 0,
            discount: 0,
            isGovernment: "none",
            proceed: "none",
            creditDiv: "none",
            mobileDiv: "none",
            nameDiv : "none",
            nic: "",

        }
    }

    governmentEmployee = (e) => {
        this.setState({isGovernment: "block", proceed: "none"});
    }

    nonGovernmentEmployee = (e) => {
        this.setState({isGovernment: "none", proceed: "block"});
        if (this.state.mobileNumber === null) {
            this.setState({creditDiv: "block"})
            this.setState({nameDiv: "block"})
            this.setState({mobileDiv: "none"})
        } else if (this.state.cardNumber === null) {
            this.setState({mobileDiv: "block"})
            this.setState({creditDiv: "none"})
            this.setState({nameDiv: "none"})
        }
    }
    verifyNic = (event) => {
        this.setState({nic: event.target.value});
    }
    clickVerifyNic = (event) => {
        let nicSeq = /[0-9][v]/i;
        if (this.state.nic.match(nicSeq)) {
            const postData = {
                "nIC": this.state.nic,
                "amount": Number(this.state.totPrice),
                "discountPercentage": 20
            };

            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                }
            };
            axios.post('http://localhost:8080/DSEasyBooking/webapi/myresourceCustomer/allCustomers/customerdiscount', postData, axiosConfig)
            //this.setState({stations: response.data})
                .then(response => {
                    this.setState({total: response.data.total});
                    this.setState({amount: response.data.amount});
                    this.setState({discount: response.data.discount});
                    this.setState({proceed: "block"});
                    if (this.state.mobileNumber === null) {
                        this.setState({creditDiv: "block"})
                        this.setState({mobileDiv: "none"})
                        this.setState({nameDiv: "block"})

                        console.log("credit true")
                    } else if (this.state.cardNumber === null) {
                        this.setState({mobileDiv: "block"})
                        this.setState({creditDiv: "none"})
                            this.setState({nameDiv: "none"})
                        console.log("mobil true")
                    }
                    console.log(this.state.cardNumber + " " + this.state.mobileNumber)
                })
        }
    }


    render() {
        return (
            <div>
                <div className="container" style={{overflow: "auto"}}>
                    <h1>Booking Details</h1>

                    <hr/>
                    <hr/>

                    <div className="card container-fluid">
                        <h4 className="card-header">Are You a Government Employee??</h4>
                        <div className="card-body">
                            <h5 className="card-text">To all the Government Employees we provide a 20% discount. </h5>
                            <form className="was-validated">
                                <div className="row">
                                    <div className="col-sm-5">
                                        <div className="custom-control custom-radio">
                                            <input type="radio" onClick={this.governmentEmployee.bind(this)}
                                                   className="custom-control-input" id="customControlValidation2"
                                                   name="radio-stacked" required/>
                                            <label className="custom-control-label" htmlFor="customControlValidation2">
                                                Government Employee
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-sm-5">
                                        <div className="custom-control custom-radio mb-3">
                                            <input type="radio" onClick={this.nonGovernmentEmployee.bind(this)}
                                                   className="custom-control-input" id="customControlValidation3"
                                                   name="radio-stacked" required/>
                                            <label className="custom-control-label" htmlFor="customControlValidation3">
                                                Not a Government Employee
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>


                    <hr/>

                    <div style={{textAlign: "left", display: this.state.isGovernment}}>
                        <h6>Total amount : {this.state.totPrice} LKR</h6>
                        <h6>Enter NIC : <input onChange={this.verifyNic.bind()} type="text"/>&nbsp;
                            <button onClick={this.clickVerifyNic.bind()} className="btn btn-success btn-sm">Verify
                            </button>
                        </h6>
                    </div>

                    <div style={{display: this.state.proceed}}>
                        <h1 className="card-header">Report</h1>
                        <hr/>
                        <h6>Email : {this.state.email}</h6>
                        <h6>To : {this.state.to}</h6>
                        <h6>from : {this.state.from}</h6>
                        <h6>No of tickets : {this.state.tickets}</h6>
                        <h6>Amount :RS. {this.state.totPrice}/=</h6>
<hr/>
                        <h6 style={{display: this.state.creditDiv}}>Card Number : {this.state.cardNumber}</h6>
                        <h6 style={{display: this.state.nameDiv}}>Name : {this.state.name}</h6>

                        <h6 style={{display: this.state.mobileDiv}}>Mobile Number : {this.state.mobileNumber}</h6>

                        <h6>Discount :RS. {this.state.discount}/=</h6>
                        <h6>Total :RS. {this.state.total}/=</h6>

                        <button className="btn btn-success">Proceed</button>
                    </div>
                </div>
            </div>
        )
            ;
    }
}

export default FinalPayment;