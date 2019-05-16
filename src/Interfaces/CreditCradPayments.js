import React, {Component} from "react";
import CreditCardInput from 'react-credit-card-input';
//import Cards from 'react-credit-cards';

class CreditCard extends Component {

    /*
        constructor(props){
            super(props);
            this.state={
                name:"",
                isName: false,
                cardNumber:"",
                isCardNumber: false,
                expMonth: "",
                isExpMonth:false,
                expYear: "",
                isExpYear:false,
                cvv : "",
                isCvv : false,
            }
        }

        OnSelectName = (event) => {
            this.setState({name: event.target.value});
            this.setState({isName: true});
        }

        OnSelectCardNumber = (event) => {
            this.setState({cardNumber: event.target.value});
            this.setState({isCardNumber: true});
        }

        OnSelectExpMonth = (event) => {
            this.setState({expMonth: event.target.value});
            this.setState({isExpMonth: true});
        }

        OnSelectExpYear = (event) => {
            this.setState({expYear: event.target.value});
            this.setState({isExpYear: true});
        }

        OnSelectCvv = (event) => {
            this.setState({cvv: event.target.value});
            this.setState({isCvv: true});
        }

        OnSubmitPaymetDetails = (event) => {

        }


        render() {
            return (

                <div>
                    <div class="row">
                        <div class="col-75">
                            <div class="container">
                                <form action="qq">
                                    <div class="col-50">
                                        <h1>Credit Card Payments</h1>
                                        <label for="fname">Accepted Cards</label>
                                        <div class="icon-container">
                                            <i class="fa fa-cc-visa" style={{color:"navy"}}></i>
                                            <i class="fa fa-cc-amex" style={{color:"blue"}}></i>
                                            <i class="fa fa-cc-mastercard" style={{color:"red"}}></i>
                                            <i class="fa fa-cc-discover" style={{color:"orange"}}></i>
                                        </div>
                                        <label for="cname">Name on Card</label>
                                        <input type="text" id="cname" name="cardname" placeholder="Enter your name" onChange={this.OnSelectName.bind()} required/>
                                        <label for="ccnum">Credit card number</label>
                                        <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" onChange={this.OnSelectCardNumber.bind()} required/>
                                        <label for="expmonth">Exp Month</label>
                                        <input type="text" id="expmonth" name="expmonth" placeholder="September" onChange={this.OnSelectExpMonth.bind()} required/>
                                        <div class="row">
                                            <div class="col-50">
                                                <label for="expyear">Exp Year</label>
                                                <input type="text" id="expyear" name="expyear" placeholder="2018" onChange={this.OnSelectExpYear.bind()} required/>
                                            </div>
                                            <div class="col-50">
                                                <label for="cvv">CVV</label>
                                                <input type="text" id="cvv" name="cvv" placeholder="352" onChange={this.OnSelectCvv.bind()} required/>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="submit" value="Continue to checkout" class="btn" onChange={this.OnSubmitPaymetDetails.bind()}/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }*/

    constructor(props) {
        super(props);

        this.state = {
            creditcard: "",
            expiry: " ",
            cvc: "",
            name: "",
            isName: false,
        }
        }


    onSelectName = (event) => {
        this.setState({name: event.target.value});
        this.setState({isName: true});
    }

    render(){
        return (

            <div>
                <div className="container">
                    <div className="col-sm-7">
                    <form action="#">

                            <h1>Mobile Payment</h1>

                        <label htmlFor="cname">Card Holders Name: </label>
                        <input type="text" id="cname" name="cardname" placeholder="Enter name"
                               onChange={this.onSelectName.bind()} required/>

                <CreditCardInput
                    cardNumberInputProps={{value: <input type="text"/>, onChange: this.handleCardNumberChange}}
                    cardExpiryInputProps={{value: <input type="text"/>, onChange: this.handleCardExpiryChange}}
                    cardCVCInputProps={{value: <input type="text"/>, onChange: this.handleCardCVCChange}}

                    onError={({ inputName, err }) => console.log(`credit card input error: ${err}`)}
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
                                                    onChange={handleCardCVCChange(e => console.log('cvc change', e))}
                                                />
                                            )}
                                            cardExpiryInputRenderer={({ handleCardExpiryChange, props }) => (
                                                <input
                                                    {...props}
                                                    onChange={handleCardExpiryChange(e =>
                                                        console.log('expiry change', e)
                                                    )}
                                                />
                                            )}
                                            cardNumberInputRenderer={({ handleCardNumberChange, props }) => (
                                                <input
                                                    {...props}
                                                    onChange={handleCardNumberChange(e =>
                                                        console.log('number change', e)
                                                    )}
                                                />
                                            )}
                    fieldClassName="input"
                    />

                    </form>
                </div>
                </div>
            </div>
        );
    }


}

export default CreditCard;