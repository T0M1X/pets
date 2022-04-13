import styled from "styled-components";

export const Booking = styled.div`
    background: linear-gradient(
        210deg,
        rgba(0, 126, 126, 1) 0%,
        #92B7CE 100%
    );
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
        border-radius: 60px;
        padding:3%;
        font-family:"Quicksand",sans-serif;
        background-color:rgb(24,26,27) !important;
        width:60%;
        margin-left:auto;
        margin-right:auto;
        color:whitesmoke;
        font-weight: bold;
   }

    .petsSection{
        overflow: auto;
        max-height: 35vh;
    }

    .dates *{
        margin: 1%;
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
        position: relative;
        left: 80px;
        width: 0;
        padding: 0 !important;
        margin: 0 !important;
      }
      
    
    .walkSit label {
        display: inline-block;
        background-color: #101010;
        font-family: sans-serif, Arial;
        padding:2% 3%;
        border: 2px solid #444;
        border-radius: 16px;
        margin-top: 1%;
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
        font-family: 'Avenir', Helvetica, sans-serif;
    }

    .sButton{
        display:block;
        margin-left:auto;
        margin-right:auto;
        height:33%;
        width:30%;
        padding:3%;
        border-radius:16px;
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

    input{
        appearance: none !important;
    
        outline: none !important;
    
        font-size: 1.5em;
        font-family: inherit;
        padding: 10px 15px;
        background-color: #F8F8F8;
        border-radius: 16px;
        transition: 0.4s;
    }

    textarea {
        appearance: none !important;
        border: none !important;
        outline: none !important;
    
        font-size: 1.5em;
        font-family: inherit;
        padding: 10px 15px;
        background-color: #F8F8F8;
        border-radius: 16px;
        transition: 0.4s;
    }
      
    .lengths input[type="radio"] {
        opacity: 0;
        position: relative;
        left: 80px;
        width: 0;
        padding: 0 !important;
        margin: 0 !important;
      }
      
    .lengths label {
          display: inline-block;
          padding: 2%;
          font-family: sans-serif, Arial;
          font-size: 1.2em;
          border: 1px solid #444;
          border-radius: 16px;
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

    .addPet textarea {
        border:solid black 2px;
        height: 3em;
        font-size: 1.2rem;
        resize: none;
        color:black;
        font-family: 'Avenir', Helvetica, sans-serif;
        margin: 1%;
    }

    .addB{
        border-radius:16px;
        font-size:1.1rem;
        font-weight:bold;
        background-color:rgb(102,255,255);
        color:black;
        padding 1% 4%;
        border:solid black 3px;
        margin-bottom:1.3%;
    }

    .addB:hover{
        color:white;
        background-color:#101010;
    }

    .pList{
        padding:0%;
        font-size: 120%;
    }
`