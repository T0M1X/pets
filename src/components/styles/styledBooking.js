import styled from "styled-components";

const styledBooking = styled.div`
  font-family: "Avenir", Helvetica, sans-serif;
  background: linear-gradient(210deg, rgba(0, 126, 126, 1) 0%, #92b7ce 100%);
  color: black;
  padding-top: 20px;
  padding-bottom: 20px;

  .section {
    background-color: rgb(24, 26, 27);
    margin-left: 20vw;
    margin-right: 20vw;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 30px;
  }

  .bookingDiv {
    padding: 25px;
    border: 10px solid #66ffffp;
  }

  .cardDiv {
    margin: 0 auto;
    padding: 20px;
    text-align: center;
    display: flex;
    justify-content: center;
    border: 6px solid whitesmoke;
    border-radius: 30px;
    font-size: 20px;
  }

  h1 {
    color: whitesmoke;
    text-align: center;
    margin: 0;
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
    padding: 1em;
    margin-left: 40px;
    border: solid 2px #494e51;
    border-radius: 6px;
    font-size: 15px;
  }

  button:hover {
    background-color: #bafffb;
  }
`;

export default styledBooking;
