import React, { Component } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import "./Calendar.css"
import EventInfo from "./eventInfo.js"
import booking from "../../lib/booked.json";
import {Reviews} from "../../lib/review";
export default class viewCalendar extends Component {
  constructor() {
    super();
    this.state = {
      event:"",
      display:false,
      Events: booking   // uses json the file as an object
      
      
    
    };

  }

  toggleDisplay=()=>{
    this.setState({
      display: !this.state.display
    });
  }

  render() {
    return (
      <div>
        {console.log(Reviews)}
      <div className={!this.state.display ?"calendar-container":"calendar-container transparent"}>
      <FullCalendar
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
      allDay={true}
      events={this.state.Events}
      selectable={true}
      eventTimeFormat={{ // like '14:30:00'
        hour: '2-digit',
        minute: '2-digit',
        meridiem: true
      }}
      eventClick={
        (arg)=>{
          this.setState({
            display:true,
            event:arg.event,
          })
          console.log(arg.event.extendedProps.infomation)
          console.log("In now "+arg.event.end)
        }
      }
      timeFormat= 'h(:mm)' // uppercase H for 24-hour clock
      eventBorderColor ={"#000080"}
      eventBackgroundColor={"#000000"}
    />
    </div>
    {console.log(this.state.display)}
    <div>{this.state.display ?  <EventInfo event={this.state.event} display={this.toggleDisplay}/>:null}</div>
    </div>
    )
  }
}
