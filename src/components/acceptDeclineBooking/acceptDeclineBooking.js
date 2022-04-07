import { Component } from "react";
import EventInfoBookings from "./eventInfoBookings";

export default class acceptDeclineBooking extends Component {
  render() {
    return (
      <>
        <div>
          <div>
            <h1 style={{ textAlign: "center", marginTop: "15px" }}>
              List of Bookings
            </h1>
            <EventInfoBookings />
          </div>
        </div>
      </>
    );
  }
}
