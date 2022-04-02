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
    background-color: grey;
    color: gainsboro;
    float: left;
    margin-top: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 15px;
  }

  .button-group {
    margin: auto;
    padding: 10px;
    width: 50%;
  }

  .button-group button:not(:last-child) {
    border-right: none;
  }

  .button-group:after {
    content: "";
    clear: both;
    display: table;
  }
`;
