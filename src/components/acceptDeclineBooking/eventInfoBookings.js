import React, { Component, useState, useEffect } from "react";
import StyledBooking from "../styles/styledBooking";
import { booked, BookingMethods } from "./BookingsByAllSitters";
import { UserMethods } from "../../lib/users.js";

class eventInfoBookings extends Component {
  constructor() {
    super();

    this.state = {
      bookings: booked,
      user: UserMethods.GetUserById(localStorage.getItem("UserId")).username, // gets username of the current sitter logged in
      sitterID: UserMethods.GetUserById(localStorage.getItem("UserId")).id, //uses methods from other files to get the sitter ID
    
    };
  }
  
  bookingStatus = (id, isAccepted) => (event) => {
    //this function checks to see if the data in the json is "Booked" or "Not Booked"
    // ... and so changes the state
    if (isAccepted) {
      BookingMethods.acceptBookingById(id);
    } else {
      BookingMethods.declineBookingById(id);
    }
    this.setState({ bookings: booked });
  };
  render() {
    return (
      <StyledBooking>
        <div className="section">
          <script></script>
          <br></br>
          <div>
            {console.log("hello")}
            {console.log(this.state.sitterID)}
            <h1>List of Bookings for {this.state.user}</h1>
          </div>
          {console.log(BookingMethods.GetBookingBySitterId(this.state.sitterID)[0]?.id)}
         
          {BookingMethods.GetBookingBySitterId(this.state.sitterID)[0]?.id!=null?
          <div>
          
           {BookingMethods.GetBookingBySitterId(this.state.sitterID).map((booking,i) => {
              
            {console.log("hello2")}
             {console.log(booking)}
             {console.log(booking.id)}
             {console.log(i)}
             return (
             <div key={i}>
          <div className="bookingDiv">
            <div className="cardDiv">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <p style={{ fontSize: "15px" }}>
                        ID of booking:
                        {
                          booking.id
                        }
                      </p>
                      <p>
                        {
                          booking.name
                        }
                      </p>
                      <p>
                        {
                          booking.address
                        }
                      </p>
                      <p
                        style={{
                          color:
                            booking?.accepted === "Booked"
                              ? "green"
                              : "red", // here is where the function matters, it checks if the text in bookings.accepted fits the conditions
                        }}
                      >
                        Is Booked? -{" "}
                        {
                          booking.accepted
                        }
                      </p>
                      <br></br>
                      <button
                        onClick={this.bookingStatus(
                         booking.id,
                          true
                        )}
                      >
                        Accept
                      </button>
                      <button
                        onClick={this.bookingStatus(
                          BookingMethods.GetBookingBySitterId(
                            this.state.sitterID
                          )?.id,
                          false
                        )}
                      >
                        Decline
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
            </div>
            );
          })}
            
            </div>                    
          :<div className="book-error">No bookings avaliable</div>}
        </div>
      </StyledBooking>
    );
  }
}

export default eventInfoBookings;
