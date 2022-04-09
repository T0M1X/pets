import styled from "styled-components";

export const Booking = styled.div`
    background: rgb(9,9,121);
    background: linear-gradient(210deg, rgba(9,9,121,1) 0%, rgba(1,0,19,1) 49%, rgba(0,126,126,1) 100%);
    color: whitesmoke;
    padding-bottom:5%;
    text-align: center;
    *{
        margin:0;
        font-family:"Quicksand",sans-serif;
        color: whitesmoke;
        padding:1%;
    }

    form {
       padding:3%;
       font-family:"Quicksand",sans-serif;
       background-color:rgb(24,26,27) !important;
       width:70%;
       margin-left:auto;
       margin-right:auto;
       color:whitesmoke;
       font-weight: bold;
   }

    h1{
        padding:2%;
        padding-right:70%;
        font-size: 2.5rem;
        font-family:"Quicksand",sans-serif;
        font-weight:bolder;
        color: rgb(211,207,201);
    }

    h2{
        font-size: 2rem;
    }

    h3{
        font-size: 1.5rem;
    }

    .req{
        padding-right:60%;
    }

    .walkSit input[type="radio"] {
        opacity: 0;
        position: fixed;
        width: 0;
      }
      
    
    .walkSit label {
        display: inline-block;
        background-color: #101010;
        font-family: sans-serif, Arial;
        padding:1.4%;
        padding-left:2%;
        padding-right:2%;
        border: 2px solid #444;
        border-radius: 4px;
        margin-left:2%;
        margin-right:2%;
    }

    .walkSit input[type="radio"]:checked + label {
        background-color:rgb(102,255,255);
        color:black;
        margin-left:2%;
    }
    .walkSit label:hover {
        background-color:black;
        margin-left:2%;
    }

    #add{
        border:solid black 2px;
        height: 5em;
        font-size: 1.2rem;
        resize: none;
        width:80%;
        color:black;
    }

    .sButton{
        display:block;
        margin-left:auto;
        margin-right:auto;
        height:33%;
        width:30%;
        padding:3%;
        border-radius:5%;
        margin-top:2%;
        font-size:1.1rem;
        font-weight:bold;
        margin-bottom:3%;
        background-color:rgb(102,255,255);
        color:black;
        border:solid black 3px;
    }
    
    .sButton:hover{
        color:white;
        background-color:#101010;
    }

    input[type="date"]{
        background:rgb(24,26,27);
        border:solid whitesmoke 1px;
        -webkit-calendar-picker-indicator{ background: orange;};
    }
    input[type="time"]{
        background:rgb(24,26,27);
        border:solid whitesmoke 1px;
    }
    input[type="date"]::-webkit-calendar-picker-indicator {
        filter: invert(100%);
    }
    input[type="time"]::-webkit-calendar-picker-indicator {
        filter: invert(100%);
    }

      
    .lengths input[type="radio"] {
        opacity: 0;
        position: fixed;
        width: 0;
      }
      
    .lengths label {
          display: inline-block;
          rgb(9,9,121);
          padding: 10px 20px;
          font-family: sans-serif, Arial;
          font-size: 16px;
          border: 1px solid #444;
          border-radius: 4px;
    }
      
    .lengths label:hover {
        background-color: #000;
    }
      
    .lengths input[type="radio"]:focus + label {
          border: 1px solid #444;
    }
      
    .lengths input[type="radio"]:checked + label {
          background-color: rgb(102,255,255);
          border-color: white;
          color:#101010;
    }
`