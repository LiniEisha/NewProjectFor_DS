import React, {Component} from 'react';
import axios from 'axios';


export const NOOFTICKET = "Tickets";
export const GOFROM = "GoFrom";
export const GOTO = "goTo";


class Booking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stations: [],
            noOfTickets: "",
            isNoOfTickets: false,
            goFrom: "",
            isFrom: false,
            goTo: "",
            isTo: false,
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/DSEasyBooking/webapi/myresourceTrain/allstations')
            .then(response => {
                this.setState({stations: response.data})
            })
    }


    OnSelectNoOfTickets = (event) => {
        this.setState({noOfTickets: event.target.value});
        this.setState({isNoOfTickets: true});
    }

    OnSelectGoFrom = (event) => {
        this.setState({goFrom: event.target.value});
        this.setState({isFrom: true});
    }

    OnSelectGoTo = (event) => {
        this.setState({goTo: event.target.value});
        this.setState({isTo: true});
    }


    submitTrainDetails = (event) => {
        event.preventDefault();
        if ( this.state.isNoOfTickets && this.state.isFrom && this.state.isTo && this.state.goTo !== this.state.goFrom) {
            sessionStorage.setItem(NOOFTICKET, this.state.noOfTickets);
            sessionStorage.setItem(GOFROM, this.state.goFrom);
            sessionStorage.setItem(GOTO, this.state.goTo);
            this.props.history.push("/paymentDetils");
        } else {
            alert("Please check Details!")
        }
    }

    render() {
        return (
            <div>


                <div className="container" style={{overflow: "auto"}}>
                    <h1>Booking Form</h1>
                    <hr/>
                    <form className="was-validated">

                        <div className="form-group">
                            <label htmlFor="name">No of tickets : </label>
                            <input type="tickets" className="form-control" id="tickets"
                                   placeholder="Enter number of tickets" name="tickets"
                                   onChange={this.OnSelectNoOfTickets.bind()} required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">From : </label>
                            <select className="custom-select custom-select-lg mb-3"
                                    onChange={this.OnSelectGoFrom.bind()}>
                                <option defaultValue="selected">-----</option>
                                {this.state.stations.map((sname) =>
                                    <option key={sname.id}>{sname.name}</option>
                                )}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">To: </label>
                            <select className="custom-select custom-select-lg mb-3" onChange={this.OnSelectGoTo.bind()}>
                                <option defaultValue="selected">-----</option>
                                {this.state.stations.map((sname) =>
                                    <option key={sname.id}>{sname.name}</option>
                                )}
                            </select>
                        </div>
                        <div className="form-group">
                            <button type="button" className="btn btn-info btn-lg"
                                    onClick={this.submitTrainDetails.bind()}>Submit
                            </button>
                        </div>

                    </form>
                </div>


            </div>

        );
    }
}

export default Booking;








