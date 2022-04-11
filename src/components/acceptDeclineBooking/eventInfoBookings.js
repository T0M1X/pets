import React, { Component, useState, useEffect } from "react";
import bookings from "../../lib/booked.json";
import StyledBooking from "../styles/styledBooking";
import { BookingMethods } from "./BookingsByAllSitters";
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

  render() {
    return (
      <StyledBooking>
        <div className="section">
          <script></script>
          <br></br>
          <div>
            <h1>List of Bookings for {this.state.user}</h1>
          </div>
          <div className="bookingDiv">
            <div className="cardDiv">
              <table>
                <p style={{ fontSize: "15px" }}>
                  ID of booking:
                  {BookingMethods.GetBookingBySitterId(this.state.sitterID).id}
                </p>
                <p>
                  {
                    BookingMethods.GetBookingBySitterId(this.state.sitterID)
                      .name
                  }
                </p>
                <p>
                  {
                    BookingMethods.GetBookingBySitterId(this.state.sitterID)
                      .Address
                  }
                </p>
                <p
                  style={{
                    color:
                      BookingMethods.GetBookingBySitterId(this.state.sitterID)
                        .accepted === "Booked"
                        ? "green"
                        : "red", // here is where the function matters, it checks if the text in bookings.accepted fits the conditions
                  }}
                >
                  Is Booked? -{" "}
                  {
                    BookingMethods.GetBookingBySitterId(this.state.sitterID)
                      .accepted
                  }
                </p>
                <br></br>
                <button
                  onClick={this.bookingStatus(
                    BookingMethods.GetBookingBySitterId(this.state.sitterID).id,
                    true
                  )}
                >
                  Accept
                </button>
                <button
                  onClick={this.bookingStatus(
                    BookingMethods.GetBookingBySitterId(this.state.sitterID).id,
                    false
                  )}
                >
                  Decline
                </button>
              </table>
            </div>
          </div>
        </div>
      </StyledBooking>
    );
  }
}

export default eventInfoBookings;
