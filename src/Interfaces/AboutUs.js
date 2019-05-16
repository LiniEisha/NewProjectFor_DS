import React, {Component} from 'react';

class AboutUs extends Component{
    render(){
        return(
           <div>
               <div className="container" style={{overflow: "auto"}}>
                   <h1>Our Network</h1>
                           <img src={require("./map.jpg")} style={{width:"650px" , height:"750px" ,align:"center" }}/>
               </div>
           </div>
        );
    }
}
export default AboutUs;