import styled from "styled-components";

const styledBooking = styled.div`
  font-family: "Avenir", Helvetica, sans-serif;
  background: linear-gradient(
    210deg,
    rgba(0, 126, 126, 1) 0%,
    #92B7CE 100%
  );
  color: black;
  padding-top: 20px;
  padding-bottom: 20px;

  .section {
    background-color: #494E51;
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

  .tableDiv {
    background-color: #E7E9EB;
    margin-bottom: 20px;
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
    border: solid 2px #494E51;
    border-radius: 6px;
    font-size: 15px;
  }

  button:hover {
    background-color: #BAFFFB;
  }
`;

export default styledBooking;
