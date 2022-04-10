import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import "./login.css"
import { UserMethods } from "../../lib/users.js"; //import from the end of sign up instead?
import { Navigate } from 'react-router-dom';


function LoginApp() {
  /* temporary hard code version
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }
  */

  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  //on page load, check if user is already logged in
  useEffect(() => {
    if (localStorage.getItem('UserDetails')) {
      console.log("user details exists");
      console.log(localStorage.getItem('UserDetails'));
      let temp = localStorage.getItem('UserDetails');
      let temp2 = localStorage.getItem('UserType');
      setUser({ username: temp, type: temp2 });
    }
  }, [])

  //function which is run after user submits
  const Login = details => {
    console.log(details);
    console.log(UserMethods.GetUsers());
    //checks if login details matches registered user data

    //for all users, check if username matches a username in the database, then check if password matches
    let loggedIn = false;
    let user = UserMethods.LoginUser(details.username, details.password);
    if (user) {
      console.log("Logged in");
      loggedIn = true;
      setUser({
        username: user.username,
        type: user.type,
      });
      localStorage.setItem('UserDetails', user.username);
      localStorage.setItem('UserType', user.type);
      localStorage.setItem('UserId', user.id);
    }
    else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  }




//function occurs when logout button is pressed
const Logout = () => {
  console.log("Logout");
  //sets user to default state
  setUser(null);
  localStorage.removeItem('UserDetails');
  localStorage.removeItem('UserType');
  localStorage.removeItem('UserId')
}

//page which determines whether user is logged in and which page to show
/* old welcome page
          <h2>Welcome, <span>{user.type} {user.username}</span></h2>
          <button onClick={Logout}>Logout</button>
*/
return (
  <div className="App">
    {(user) ?
      (
        <div className="welcome">
          <Navigate replace to="/editProfile" />
        </div>
      )
      : (
        <LoginForm Login={Login} error={error} />
      )}
  </div>
);
      }

export default LoginApp