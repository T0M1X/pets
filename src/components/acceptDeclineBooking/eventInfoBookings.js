import React, { Component } from "react";
import bookings from "./bookings.json";
import StyledBooking from "../styles/styledBooking";

class eventInfoBookings extends Component {
  constructor() {
    super();

    this.state = {
      bookings: bookings,
    };
  }

  bookingStatus = (id, isAccepted) => (event) => {
    const accepted = this.state.bookings[id];
    if (isAccepted) {
      accepted.accepted = "Booked";
    } else {
      accepted.accepted = "Not Booked";
    }
    this.setState({ ...this.state.bookings, ...accepted });
  };

  render() {
    return (
      <StyledBooking>
        <script></script>
        <br></br>
        <div>
          <h1>List of Bookings</h1>
        </div>
        <div className="bookingDiv">
          {this.state.bookings.map((booking, key) => {
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
                        <p
                          style={{
                            color:
                              booking.accepted === "Booked" ? "green" : "red",
                          }}
                        >
                          Is Booked? - {booking.accepted}
                        </p>
                        {console.log(this.state.accepted)}
                        <p>{booking.accepted}</p>
                        <br></br>
                        <button onClick={this.bookingStatus(key, true)}>
                          Accept
                        </button>
                        {console.log(this.state.bookings)}
                        {/* {console.log(booking.id, booking.accepted)}/ */}
                        <button onClick={this.bookingStatus(key, false)}>
                          Decline
                        </button>
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
