import { Component } from "react";
import EventInfoBookings from "./eventInfoBookings";

export default class acceptDeclineBooking extends Component {
  // toggleAccepted = (button) => {
  //   if (button === "accept") {
  //     this.setState({
  //       accepted: true,
  //     });
  //   } else {
  //     this.setState({
  //       accepted: false,
  //     });
  //   }
  // };

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
