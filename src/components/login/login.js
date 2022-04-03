import React, { useState } from 'react';
import LoginForm from './LoginForm';
import "./login.css"

function LoginApp() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name:"", email:""});
  const [error, setError] = useState("");

  //function which is run after user submits
  const Login = details => {
    console.log(details);
    //checks if login details matches registered user data
    if (details.email == adminUser.email && details.password == adminUser.password){
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("Details do not match!");
      setError("Details do not match!")
    }
  }

  //function occurs when logout button is pressed
  const Logout = () => {
    console.log("Logout")
    //sets user to default state
    setUser({name:"", email:""})
  }

  //page which determines whether user is logged in and which page to show
  return(
    <div className="App">
      {(user.email != "") ? 
      (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
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