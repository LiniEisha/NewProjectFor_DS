import React, {Component} from 'react';
import {CREDITCARD} from "./CreditCradPayments";

export const M = "false";
export const CM = "false";
export const MOBILENUMBER = "MOBILENUMBER";
export const PIN ="PIN";
export const MEMAIL = "MEMAIL";

class MobilePhone extends Component {

    constructor(props){
        super(props);
        this.state={
            phoneNumber:"",
            isPhoneNumber: false,
            pin: "",
            isPin:false,
            mEmail: "",
            isMEmail: false,
        }
    }

    componentDidMount() {
        sessionStorage.removeItem(CREDITCARD);
    }

    OnSelectPhoneNumber = (event) => {
        this.setState({phoneNumber: event.target.value});
    }

    OnSelectPin = (event) => {
        this.setState({pin: event.target.value});
    }

    onSelectEmail = (event) => {
        this.setState({mEmail: event.target.value});
    }

    OnSubmitDetails = (event) => {
        event.preventDefault();
        const emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(this.state.phoneNumber.length === 10 && this.state.pin.length === 4 && this.state.mEmail.match(emailregex)){
            this.setState({isPhoneNumber:"none"});
            this.setState({isPin:"none"});
            this.setState({isEmail:"none"});
            sessionStorage.setItem(MEMAIL, this.state.mEmail);
            sessionStorage.setItem(MOBILENUMBER, this.state.phoneNumber);
            sessionStorage.setItem(PIN, this.state.pin);

            this.props.history.push("/finalPayment");
        }
    else {
            alert("Fill the correct details to proceed!");
        }
    }


    render() {
        return (
            <div>

                <div class="row">
                    <div class="col-75">
                        <div class="container">
                            <form className="was-validated">
                                <div class="col-50">
                                    <h1>Mobile Payment</h1>
                                </div>
                                <label for="ccnum">Phone Number: </label>
                                <input type="text" id="ccnum" name="cardnumber" placeholder="077-1234567"  onChange={this.OnSelectPhoneNumber.bind()} required/>
                                <label for="pin"> PIN: </label>
                                <input type="text" id="pin" name="pin" placeholder="1234"  onChange={this.OnSelectPin.bind()} required/>
                                <label htmlFor="cname">Email Address: </label>
                                <input type="text" id="email" name="email" placeholder="Enter Email"
                                       onChange={this.onSelectEmail.bind()} required/>


                                <input type="submit" value="Confirm" class="btn" onClick={this.OnSubmitDetails.bind()} />
                             </form>
                        </div>
                    </div>
                </div>
            </div>
    );
    }
}
export default MobilePhone;