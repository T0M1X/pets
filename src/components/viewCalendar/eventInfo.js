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
    return (
        <div>
      <div className="Event-container">
          <div></div>
      <div className="title">Booking Infomation</div>
      <hr></hr>
      <div className="booking-container">
      <div>Booking ID: {this.props.event.id}</div>
      <div>Booking Title:{this.props.event.title}</div>
      <div>Start Date:{(this.props.event.start).toString().substring(25,0)}</div>
      <span className="close" onClick={this.handleClick}>x</span>
      <div>End Date:{(this.props.event.end).toString().substring(25,0)}</div>
      <div className="Info">
      <div>Name:{this.props.event.extendedProps.name}</div>
      <div>{this.props.event.extendedProps.address}</div>
      <div>{this.props.event.extendedProps.Number}</div>
      </div>
      <div className="Pet-Container">
      <div>{this.props.event.extendedProps.typeBooking}</div>
      <div>{this.props.event.extendedProps.typePet.join(', ')}</div>
      <div>{this.props.event.extendedProps.amount}</div>
      </div>
      <div className="Other">
        <h1>Additional Information</h1>
        {this.props.event.extendedProps.other}
      </div>
      </div>
      </div>
      </div>
    )
  }
}
