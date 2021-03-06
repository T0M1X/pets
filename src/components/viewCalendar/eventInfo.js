import React, { Component } from 'react'
import "./Calendar.css"
import {Link} from "react-router-dom";

export default class eventInfo extends Component {

    constructor(props){
        super(props);
    }
    handleClick = () => {
        this.props.display();
       };
    
  render() {
    var todayDate = new Date();
    var endDate=new Date(this.props.event.end.toString());

    return (
      <div>
        <div className="Event-container">
          <div className="title">Booking Information</div>
            <div class="Book-Review-Container">
              <div className="booking-container">
                <div><h3>Booking ID: </h3> {this.props.event.id}</div>
                <div><h3>Start Date: </h3>{(this.props.event.start).toString().substring(25,0)}</div>
                <div><h3>End Date: </h3> {(this.props.event.end).toString().substring(25,0)}</div>
                <div><h3>Booking Title: </h3>{this.props.event.title}</div>
                <div><h3>Booking Status: </h3>{
                (this.props.event.extendedProps.accepted != "Booked") ?
                "Pending" : "Booked"
              }</div>
              </div>
              <div>
                {console.log("Check"+todayDate+" endDate:"+endDate)}
                {console.log("Check if:"+this.props.event.end>todayDate?"true":"false")}
                {this.props.event.end<todayDate?
                <Link to={"/writeReview"}
                  state={{sitterId:this.props.event.extendedProps.sitterId}}>
                  <button className="reviewPage glow-on-hover">Write Review</button>
                </Link>
                :null}
              </div>
            </div>
          <span className="close" onClick={this.handleClick}>x</span>
            <div className="Flex-Container">
              <div className="info-container">
                <h2 className="Client-Info">Client Information</h2>
                  <div><h3>Name: </h3> {this.props.event.extendedProps.name}</div>
                <div className="Address"><h3>Address: </h3>{this.props.event.extendedProps.Address}</div>
                  <div><h3>Phone Number: </h3> {this.props.event.extendedProps.Number}</div>
              </div>
              <div className="pet-container">
              <h2 className="Pet-Info">Appointment Details</h2>
              <div><h3>Booking Type:</h3> {this.props.event.extendedProps.typeBooking} Booking</div>
              <div><h3>Pet Type: </h3>{this.props.event.extendedProps.typePet.join(', ')}</div>
              <div><h3>Amount of Pets: </h3> {this.props.event.extendedProps.amount}</div>
              </div>
            </div>
            <div className="Flex-Container-2">
              <div className="Other">
                <h2>Additional Information</h2>
                {this.props.event.extendedProps.other}
              </div>
              <div className="Payment-container">
                  <h2>Payment Details</h2>
                  <div><h3>Total Cost: </h3>??{this.props.event.extendedProps.Payment}</div>
              </div>
            </div>
        </div>
      </div>
    )
  }
}
