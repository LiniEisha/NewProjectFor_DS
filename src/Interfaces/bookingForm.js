import React, {Component} from 'react';
import mainStations from "./MainStations";

export const USERNAME = "UserName";
export const NOOFTICKET = "Tickets";
export const GOFROM = "GoFrom";
export const GOTO = "goTo";


class Booking extends Component{
    constructor(props){
        super(props);
            this.state={
                stations: mainStations,
                userName:"",
                isUserName: false,
                noOfTickets:"",
                isNoOfTickets: false,
                goFrom: "",
                isFrom:false,
                goTo: "",
                isTo:false,
            }
    }

    OnSelectUserName = (event) => {
        this.setState({userName: event.target.value});
        this.setState({isUserName: true});
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
        // event.preventDefault();
        /*console.log(this.state.userName)
        console.log(this.state.noOfTickets)
        console.log(this.state.goFrom)
        console.log(this.state.goTo)*/
        // this.props.OnSelectUserName();
        // this.props.OnSelectGoFrom();
        // this.props.OnSelectGoTo();

        if(this.state.isUserName && this.state.isNoOfTickets && this.state.isFrom && this.state.isTo && this.state.goTo !== this.state.goFrom){
            console.log("if")
            sessionStorage.setItem(USERNAME, this.state.userName);
            sessionStorage.setItem(NOOFTICKET, this.state.noOfTickets);
            sessionStorage.setItem(GOFROM, this.state.goFrom);
            sessionStorage.setItem(GOTO, this.state.goTo);
            this.props.history.push("/paymentDetils");
        }else{
            console.log("else : " + this.state.isUserName.toString() );
            console.log("else : " + this.state.isNoOfTickets.toString() );
            console.log("else : " + this.state.isFrom.toString() );
            console.log("else : " + this.state.isTo.toString() );
        }
    }

    render(){
        return(
            <div>

                <div className="container" style={{overflow:"auto"}}>
                    <h1>Normal Booking Form</h1>
                    <hr/>
                    <form className="was-validated">
                        <div className="form-group">
                            <label htmlFor="name">Name : </label>
                            <input type="text" className="form-control" id="name" placeholder="Enter Your name" name="name" onChange={this.OnSelectUserName.bind()} required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">No of tickets : </label>
                            <input type="tickets" className="form-control" id="tickets" placeholder="Enter number of tickets" name="tickets" onChange={this.OnSelectNoOfTickets.bind()} required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">From : </label>
                            <select className="custom-select custom-select-lg mb-3" onChange={this.OnSelectGoFrom.bind()}>
                                <option defaultValue="selected" >-----</option>
                            {this.state.stations.map((sname)=>
                                <option key={sname.stationID}>{sname.stationName}</option>
                            )}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">To: </label>
                            <select className="custom-select custom-select-lg mb-3" onChange={this.OnSelectGoTo.bind()}>
                                <option defaultValue="selected" >-----</option>
                                    {this.state.stations.map((sname)=>
                                        <option key={sname.stationID}>{sname.stationName}</option>
                                    )}
                            </select>
                        </div>

                        {/*<div className="form-group">
                            <label htmlFor="name"> Select the Date : </label>
                            <input type="date" className="form-control" name="date" required/>
                        </div>
*/}
                        <div className="form-group">
                        <button type="button" className="btn btn-info btn-lg" onClick={this.submitTrainDetails.bind()}>Submit</button>
                        </div>

                    </form>
                </div>


            </div>

        );
    }
}
export default Booking;








