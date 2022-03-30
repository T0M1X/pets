import React, { Component } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import "./Calendar.css"
export default class viewCalendar extends Component {
  constructor() {
    super();
    this.state = {
      Events: [
        // initial event data
        { title: 'Booking 3', start: '2022-04-01T14:30:00' ,end:'2022-04-01T17:30:00'  },
        { title: 'Booking 4', start: '2022-04-01 12:30:00' ,end:'2022-04-01T13:30:00' },
        { title: 'Booking 5', start: '2022-04-02 08:30:00',end:'2022-04-02T10:30:00' },
        { title: 'Booking 1', start: '2022-03-05 10:30:00',end:'2022-03-05T13:30:00' },
        { title: 'Booking 2', start: '2022-03-29 21:30:00' ,end:'2022-03-29T23:30:00' }
      ]
    };
  }
  render() {
    return (
      <div class="calendar-container">
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
      timeFormat= 'h(:mm)' // uppercase H for 24-hour clock
      eventBorderColor ={"#000080"}
      eventBackgroundColor={"#000000"}
    


    />
    </div>
    )
  }
}
