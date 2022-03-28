import React, { Component } from 'react'
import "./Calendar.css"
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
export default class viewCalendar extends Component {
  render() {
    return (
      <FullCalendar
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
    />
    )
  }
}
