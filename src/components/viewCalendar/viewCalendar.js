import React, { Component } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import "./Calendar.css"
import EventInfo from "./eventInfo.js"
import booking from "../../lib/booking.json";

export default class viewCalendar extends Component {
  constructor() {
    super();
    this.state = {
      event:"",
      display:false,
      Events: booking
      
      
      
      
      // [
      //   // initial event data
      //   {id:"1A1SF3", title: 'Booking 3', start: '2022-04-01T14:30:00' ,end:'2022-04-01T17:30:00',name:"Eren Yeager",Address:"60 Main Road, London, SE25 8LQ",Number:"07700 900471",typeBooking:"Sitting",typePet:["French bull dog","Goldfish"],amount:2,other:"Give medication every 2 hours ",Payment:30.53},
      //   {id:"2A2DGGY", title: 'Booking 4', start: '2022-04-01 12:30:00' ,end:'2022-04-01T13:30:00',name:"Eren Yeager",Address:"60 Main Road, London, SE25 8LQ",Number:"07720 81471",typeBooking:"Sitting",typePet:["Golden Retriever","rabbit"],amount:2,other:"Give medication every 2 hours ",Payment:20.21},
      //   {id:"1DSGF3", title: 'Booking 5', start: '2022-04-02 08:30:00',end:'2022-04-02T10:30:00',name:"Eren Yeager",Address:"60 Main Road, London, SE25 8LQ",Number:"07703 821421",typeBooking:"Walking",typePet:["Elephant","Giraffe","French iguana","rattlesnake","Transformer"],amount:4,other:"Give medication every 2 hours ",Payment:125.12},
      //   {id:"DGHRT4",title: 'Booking 1', start: '2022-03-05 10:30:00',end:'2022-03-05T13:30:00',name:"Eren Yeager",Address:"60 Main Road, London, SE25 8LQ",Number:"07788 910431",typeBooking:"Sitting",typePet:["StarFish"],amount:1,other:"Give medication every 2 hours ",Payment:11.50},
      //   {id:"124FG5", title: 'Booking 2', start: '2022-03-29 21:30:00' ,end:'2022-03-29T23:30:00',name:"Eren Yeager",Address:"60 Main Road, London, SE25 8LQ",Number:"07721 124541",typeBooking:"Walking",typePet:["Lynx Cat"],amount:1,other:"Give medication every 2 hours ",Payment:88.12},
      // ]
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
