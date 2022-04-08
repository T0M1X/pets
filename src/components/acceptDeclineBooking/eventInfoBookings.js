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
    //this function checks to see if the data in the json is "Booked" or "Not Booked"
    const accepted = this.state.bookings[id]; // ... and so changes the state
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
                              booking.accepted === "Booked" ? "green" : "red", // here is where the function matters, it checks if the text in bookings.accepted fits the conditions
                          }}
                        >
                          Is Booked? - {booking.accepted}
                        </p>
                        <br></br>
                        <button onClick={this.bookingStatus(key, true)}>
                          Accept
                        </button>
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
