import React, { Component } from 'react'
import "./Calendar.css"

export default class eventInfo extends Component {

    constructor(props){
        super(props);
    }
    handleClick = () => {
        this.props.display();
       };
    
  render() {
    var q = new Date();
    return (
        <div>
      <div className="Event-container">
          <div></div>
      <div className="title">Booking Infomation</div>
      <div class="Book-Review-Container">
      <div className="booking-container">
      <div><h3>Booking ID: </h3> {this.props.event.id}</div>
      <div><h3>Start Date: </h3>{(this.props.event.start).toString().substring(25,0)}</div>
      <div><h3>End Date: </h3> {(this.props.event.end).toString().substring(25,0)}</div>
      <div><h3>Booking Title: </h3>{this.props.event.title}</div>
      </div>
      <div>
      {this.props.event.end>q.getDate()?
      <button className="reviewPage glow-on-hover">Write Review</button>
      :null}
      </div>
      </div>
      <span className="close" onClick={this.handleClick}>x</span>
      <div className="Flex-Container">
      <div className="info-container">
      <h2 className="Client-Info">Client Infomation</h2>
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
          <div><h3>Total Cost: </h3>£{this.props.event.extendedProps.Payment}</div>
      </div>
      
      </div>
      </div>
      </div>
    )
  }
}
