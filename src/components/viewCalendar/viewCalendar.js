import React, { Component } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import "./Calendar.css"
import EventInfo from "./eventInfo.js"
import { Link } from 'react-router-dom';
export default class viewCalendar extends Component {
  constructor() {
    super();
    this.state = {
      calendarDisplay:true,
      start:"",
      end:"",
      infomation:"",
      display:false,
      Events: [
        // initial event data
        { title: 'Booking 3', start: '2022-04-01T14:30:00' ,end:'2022-04-01T17:30:00',infomation:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,"  },
        { title: 'Booking 4', start: '2022-04-01 12:30:00' ,end:'2022-04-01T13:30:00',infomation:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula," },
        { title: 'Booking 5', start: '2022-04-02 08:30:00',end:'2022-04-02T10:30:00' ,infomation:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,"},
        { title: 'Booking 1', start: '2022-03-05 10:30:00',end:'2022-03-05T13:30:00',infomation:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula," },
        { title: 'Booking 2', start: '2022-03-29 21:30:00' ,end:'2022-03-29T23:30:00',infomation:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula," }
      ]
    };

  }

  toggleDisplay() {
    this.setState({
      display: !this.state.display
    });
  }

  render() {
    return (
      <div>
      <div className="calendar-container">
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
            currentTitle:arg.event.title,
            start:(arg.event.start).toString(),
            end:arg.event.end.toString(),
            infomation:arg.event.extendedProps.infomation,
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
    <div>{this.state.display ?  <EventInfo title={this.state.currentTitle} start={this.state.start} end={this.state.end} infomation={this.state.infomation} display={this.togglePopup.bind(this)}/>:null}</div>
    </div>
    )
  }
}
