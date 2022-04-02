import React, { Component } from 'react'
import "./Calendar.css"

export default class eventInfo extends Component {

    constructor(props){
        super(props);
    }
    
  render() {
    return (
        <div>
      <div className="Event-container">
          <div></div>
      <div>Booking Infomation</div>
      <div>{this.props.title}</div>
      <div>{this.props.start}</div>
      <button className="close" onClick={() => this.props.display}>x</button>
      <div>{this.props.end}</div>
      <div>{this.props.infomation}</div>
      {console.log("TEST:"+this.props.start)}
      </div>
      </div>
    )
  }
}
