import React, { Component } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

export default class viewCalendar extends Component {
  render() {
    return (
      <FullCalendar
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
      events={[
        { title: 'Booking 3', date: '2022-04-01' },
        { title: 'Booking 4', date: '2022-04-01' },
        { title: 'Booking 5', date: '2022-04-02' },
        { title: 'Booking 1', date: '2022-03-05' },
        { title: 'Booking 2', date: '2022-03-29' }
      ]}
    />
    )
  }
}
