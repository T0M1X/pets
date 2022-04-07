import styled from "styled-components";

const styledBooking = styled.div`
  font-family: "Avenir", Helvetica, sans-serif;

  .bookingDiv {
    padding: 25px;
    padding-bottom: 120px;
    border: 10px solid #66ffffp;
  }

  .tableDiv {
    margin: 0 auto;
    padding: 20px;
    margin-right: 30px;
    text-align: center;
    display: flex;
    justify-content: center;
    border: 2px solid black;
    border-radius: 3px;
    font-size: 20px;
  }

  h2 {
    text-align: center;
  }

  p {
    margin-left: 40px;
    margin-top: 5px;
    text-align: center;
  }

  h5 {
    text-align: center;
    padding-left: 20px;
  }

  td {
    padding-right: 20px;
  }

  button {
    cursor: pointer;
    padding: 5px;
    margin-left: 40px;
    border: solid 2px black;
    border-radius: 3px;
    font-size: 15px;
  }
`;

export default styledBooking;
