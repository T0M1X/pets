import React, { Component, useState, useEffect } from "react";
import bookings from "../../lib/booked.json";
import StyledBooking from "../styles/styledBooking";
import { sitter, SitterMethods } from "../../lib/Sitters";
import { booked, BookingMethods } from "./BookingsByAllSitters";
import { UserMethods } from "../../lib/users.js";

class eventInfoBookings extends Component {
  constructor() {
    super();

    this.state = {
      bookings: bookings,
      user: UserMethods.GetUserById(localStorage.getItem("UserId")).username, // gets username of the current sitter logged in
      sitterID: UserMethods.GetUserById(localStorage.getItem("UserId")).id, //uses methods from other files to get the sitter ID
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

  displayBookings = (sitterID) => (event) => {
    <div>
      <p>hi this works :) {sitterID}</p>
    </div>; // just testing this out
  };

  render() {
    return (
      <StyledBooking>
        <script></script>
        <br></br>
        <div>
          {console.log(
            BookingMethods.GetBookingBySitterId(this.state.sitterID) //this ones doesnt
            //supposed to get the bookings only by the sitter
          )}
          {this.displayBookings(this.state.sitterID)}{" "}
          {/*bunch of console logging here to see what works */}
          <h1>List of Bookings for {this.state.user}</h1>
          {console.log(this.state.sitterID)}
          {console.log(this.state.user)}
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
