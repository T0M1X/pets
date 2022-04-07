import React, { useState, useEffect } from 'react';
import RegisterForm from './RegisterForm';
import "../login.css"
import {data} from "../../../lib/users.js";
import  { Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

function RegisterApp() {
  const [error, setError] = useState("");
  const [complete, setComplete] = useState(false);

  //check if user is logged in, if they are, redirect them to logged in page
  if (localStorage.getItem('UserDetails')){
    //console.log("user details exists");
    return <Navigate to="/login"/>
  }

  //function which is run after user submits
  const Register = details => {
    //if fields are empty, set error to tell user
    if (details.username == "" || details.password == ""){
      setError("Missing required Fields!");
      return;
    }
    
    //check if username is taken
    for (let i=0; i < data.Users.length; i++){
      if (details.username == data.Users[i].username){
        setError("Username already exists!");
        return;
      }
    }

    //check if both passwords match
    if (details.password != details.password2){
      setError("Passwords do not match!")
      return;
    }

    //if there are no errors, register user into database
    if (details.type == "Register as PetSitter"){
      RegisterAsPetSitter(details);
    }
    else{
      RegisterAsPetOwner(details);
    }

    //console.log(data)
    setComplete(true)
    console.log(complete == true)
  }

  const RegisterAsPetOwner = details => {
    data.Users.push({
      username: details.username,
      password: details.password,
      type: "PetOwner"
    })
  }

  const RegisterAsPetSitter = details => {
    data.Users.push({
      username: details.username,
      password: details.password,
      type: "PetSitter"
    })
  }

  return(
    <div className="App">
      {(complete == true) ? 
      (
        <div className="welcome">
          <h2>Sign up successful!</h2>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <button className="login">Sign in</button>
          </Link>
        </div>
      ) 
      : (
         <RegisterForm Register={Register} error={error}/>
      )}
    </div>
  );
}

export default RegisterApp