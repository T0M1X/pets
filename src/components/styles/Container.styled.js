import styled from "styled-components";

export const Container = styled.div`
  background-image: url(cats.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover !important;

  p {
    padding: 10px;
  }

  .blankText {
    opacity: 0;
  }

  .openingText {
    text-align: center;
    color: white;
    font-size: 40px;
  }

  .underlyingText {
    text-align: center;
    color: white;
    font-size: 25px;
    padding: 0px;
  }

  .button-group button {
    display: inline-block;
    background-color: rgb(24, 26, 27);
    border-radius: 3px;
    box-shadow: none;
    border: none;
    color: gainsboro;
    float: left;
    margin-right: 40px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 22px;
    padding-right: 22px;
    font-size: 20px;
    cursor: pointer;
    transition-duration: 0.8s;
  }

  .button-group button:hover {
    display: inline-block;
    background-color: transparent;
    border-radius: 3px;
    border: 1px solid #66ffff;
    color: white;
    font-weight: bold;
    float: left;
    margin-right: 40px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 28px;
    padding-right: 28px;
    font-size: 20px;
    cursor: pointer;
  }

  .button-group {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-top: 50px;
    padding: 25px;
    width: 50%;
  }

  .button-group:after {
    content: "";
    clear: both;
    display: table;
  }
`;
