import React, {Component} from "react";
import CreditCardInput from 'react-credit-card-input';
import {M, MOBILENUMBER} from './MobilePhonePayments';


export const NAME = "NAME";
export const EMAIL = "EMAIL";
export const CREDITCARD = "CREDITCARD";
export const C = "false";
export const MC = "false";
export const CVC = "CVC"
export const EXP = "EXP";
export const TOTPRICE = "TOTPRICE";

class CreditCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cardNumber: "",
            expiry: " ",
            cvc: "",
            name: "",
            isName: false,
            email: "",
            isEmail: false,
            m: sessionStorage.getItem(M),
            price: this.props.totPrice
        }
    }

    componentDidMount() {
        sessionStorage.removeItem(MOBILENUMBER)
    }

    onSelectName = (event) => {
        this.setState({name: event.target.value});
    }

    onSelectEmail = (event) => {
        this.setState({email: event.target.value});
    }


    OnSubmit = (event) => {
        event.preventDefault();

        if (this.state.name !== "" && this.state.cardNumber !== "" && this.state.cvc !== "" && this.state.expire !== "" && this.state.email !== " ") {
            sessionStorage.setItem(NAME, this.state.name);
            sessionStorage.setItem(EMAIL, this.state.email);
            sessionStorage.setItem(CREDITCARD, this.state.cardNumber);
            sessionStorage.setItem(CVC, this.state.cvc);
            sessionStorage.setItem(EXP, this.state.expire);
            sessionStorage.setItem(TOTPRICE, this.state.price);
            this.props.history.push("/finalPayment");
        }
         else{
             alert("Fill the details to proceed!");
        }
    }

    render(){
        return (

            <div>
                <div className="row">
                    <div className="col-75">
                        <div className="container">
                        <form className="was-validated">
                            <hr/>
                            <hr/>
                            <h1>Credit Card Payments</h1>

                            <label htmlFor="cname">Card Holders Name: </label>
                            <input type="text" id="cname" name="cardname" placeholder="Enter name"
                                   onChange={this.onSelectName.bind()} required/>

                            <label htmlFor="cname">Email Address: </label>
                            <input type="text" id="email" name="email" placeholder="Enter Email"
                                   onChange={this.onSelectEmail.bind()} required/>


                            <CreditCardInput
                                cardNumberInputProps={{ value: <input type="text"/> , onChange: this.handleCardNumberChange }}
                                cardExpiryInputProps={{ value: <input type="text"/>, onChange: this.handleCardExpiryChange }}
                                cardCVCInputProps={{ value: <input type="text"/>, onChange: this.handleCardCVCChange }}
                                cardCVCInputProps={{
                                    onBlur: e => console.log('cvc blur', e),
                                    onChange: e => console.log('cvc change', e),
                                    onError: err => console.log(`cvc error: ${err}`)
                                }}
                                cardExpiryInputProps={{
                                    onBlur: e => console.log('expiry blur', e),
                                    onChange: e => console.log('expiry change', e),
                                    onError: err => console.log(`expiry error: ${err}`)
                                }}
                                cardNumberInputProps={{
                                    onBlur: e => console.log('number blur', e),
                                    onChange: e => console.log('number change', e),
                                    onError: err => console.log(`number error: ${err}`)
                                }}
                                cardCVCInputRenderer={({ handleCardCVCChange, props }) => (
                                    <input
                                        {...props}
                                        onChange={handleCardCVCChange(e => this.setState({cvc : e.target.value})
                                        )}
                                    />
                                )}
                                cardExpiryInputRenderer={({ handleCardExpiryChange, props }) => (
                                    <input
                                        {...props}
                                        onChange={handleCardExpiryChange(e => this.setState({expire : e.target.value})
                                        )}
                                    />
                                )}
                                cardNumberInputRenderer={({ handleCardNumberChange, props }) => (
                                    <input
                                        {...props}
                                        onChange={handleCardNumberChange(e => this.setState({cardNumber : e.target.value})
                                        )}
                                    />
                                )}
                                fieldClassName="input"
                            />
                            <input type="submit" value="Confirm" className="btn" onClick={this.OnSubmit.bind()}/>

                        </form>
                    </div>
                </div>
            </div>
            </div>
        );
    }


}

export default CreditCard;