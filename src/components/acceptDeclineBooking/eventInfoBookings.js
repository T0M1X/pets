import React, { Component } from "react";
import bookings from "./bookings.json";
import StyledBooking from "../styles/styledBooking";

class eventInfoBookings extends Component {
  render() {
    return (
      <StyledBooking>
        <br></br>
        <div>
          <h1>List of Bookings</h1>
        </div>
        <div className="bookingDiv">
          {bookings.map((booking, key) => {
            return (
              <div className="tableDiv">
                <table key={key}>
                  <tbody>
                    <tr>
                      <td>
                        <p style={{ fontSize: "15px" }}>
                          ID of booking: {booking.id}
                        </p>
                        <p>{booking.name}</p>
                        <p>{booking.Address}</p>
                        <p>Accepted Booking: {booking.accepted}</p>
                        <br></br>
                        <button>Accept</button>
                        {console.log(booking.id, booking.accepted)}
                        <button>Decline</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>
      </StyledBooking>
    );
  }
}

export default eventInfoBookings;
