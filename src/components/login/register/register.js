import React, { useState, useEffect } from 'react';
import RegisterForm from './RegisterForm';
import "../login.css"
import {data} from "../../../lib/users.js";
import  { Navigate } from 'react-router-dom'

function RegisterApp() {
  const [error, setError] = useState("");
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
    for (let i=0; i < data.Admins.length; i++){
      if (details.username == data.Admins[i].username){
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
    data.Admins.push({
      username: details.username,
      password: details.password
    })
    console.log(data)
  }

  return(
    <div className="App">
      <RegisterForm Register={Register} error={error}/>
    </div>
  );
}

export default RegisterApp