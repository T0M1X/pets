import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import "./login.css"
import {data} from "../../lib/users.js"; //import from the end of sign up instead?


function LoginApp() {
  /* temporary hard code version
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }
  */

  const [user, setUser] = useState({username:"", type:""});
  const [error, setError] = useState("");
  
  //on page load, check if user is already logged in
  useEffect(() => {
    if (localStorage.getItem('UserDetails')){
      console.log("user details exists");
      console.log(localStorage.getItem('UserDetails'));
      let temp = localStorage.getItem('UserDetails');
      let temp2 = localStorage.getItem('UserType');
      setUser({username: temp, type: temp2});
    }
  }, [])

  //function which is run after user submits
  const Login = details => {
    console.log(details);
    console.log(data);
    //checks if login details matches registered user data

    //for all users, check if username matches a username in the database, then check if password matches
    let loggedIn = false;
    for (let i=0; i < data.Users.length; i++){
      if (details.username == data.Users[i].username){
        if (details.password == data.Users[i].password){
      //if (details.email == adminUser.email && details.password == adminUser.password){
        console.log("Logged in");
        loggedIn = true;
        setUser({
          username: details.username,
          type: data.Users[i].type
          });
        localStorage.setItem('UserDetails', details.username);
        localStorage.setItem('UserType', details.type);
        break;
        }

      }
    }
    //if it gets to the end of the loop, tell user the details are incorrect
    if (loggedIn == false){
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  }

  //function occurs when logout button is pressed
  const Logout = () => {
    console.log("Logout");
    //sets user to default state
    setUser({username:""});
    localStorage.removeItem('UserDetails');
  }

  //page which determines whether user is logged in and which page to show
  return(
    <div className="App">
      {(user.username != "") ? 
      (
        <div className="welcome">
          <h2>Welcome, <span>{user.type} {user.username}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) 
      : (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default LoginApp