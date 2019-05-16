import React, {Component} from 'react';
import mainStations from "./MainStations";

class MobilePhone extends Component {

    constructor(props){
        super(props);
        this.state={
            name:"",
            isName: false,
            phoneNumber:"",
            isPhoneNumber: false,
            pin: "",
            isPin:false,
        }
    }

    OnSelectName = (event) => {
        this.setState({name: event.target.value});
        this.setState({isName: true});
    }

    OnSelectPhoneNumber = (event) => {
        this.setState({phoneNumber: event.target.value});
        this.setState({isPhoneNumber: true});
    }

    OnSelectPin = (event) => {
        this.setState({pin: event.target.value});
        this.setState({isPin: true});
    }

    OnSubmitPaymetDetails = (event) => {

    }


    render() {
        return (
            <div>

                <div class="row">
                    <div class="col-75">
                        <div class="container">
                            <form action="#">

                                <div class="col-50">
                                    <h1>Mobile Payment</h1>
                                </div>

                                <label for="cname">Name: </label>
                                <input type="text" id="cname" name="cardname" placeholder="Enter your name" onChange={this.OnSelectName.bind()} required/>
                                <label for="ccnum">Phone Number: </label>
                                <input type="text" id="ccnum" name="cardnumber" placeholder="077-1234567"  onChange={this.OnSelectPhoneNumber.bind()} required/>
                                <label for="pin"> PIN: </label>
                                <input type="text" id="pin" name="pin" placeholder="1234"  onChange={this.OnSelectPin.bind()} required/>

                                <input type="submit" value="Continue to checkout" class="btn" onChange={this.OnSubmitPaymetDetails.bind()} />
                             </form>
                        </div>
                    </div>
                </div>
            </div>
    );
    }
}
export default MobilePhone;