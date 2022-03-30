import React, { Component } from 'react'
import React, { useState } from "react";
//https://contactmentor.com/login-form-react-js-code/
export default class login extends Component {
  //react states
  App() {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const database = [
      {
        username: "user1",
        password: "pass1"
      },
      {
        username: "user2",
        password: "pass2"
      }
    ];

    const errors = {
      uname: "invalid username",
      pass: "invalid password"
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div classname="error">{errorMessages.message}</div>
      )

    //handles form submission
    const handleSubmit = (event) => {
      //Prevent page reload
      event.preventDefault();

      var {uname, pass} = document.forms[0];

      //find user login info
      const userData = database.find((user) => user.username === uname.value)

      //compare user info
      if (userData){
        if (userData.password !== pass.value){
          //Invalid password
          setErrorMessages({name:"pass", message: errors.pass});
        } else {
          setIsSubmitted(true);
        }
      }else {
        //Username not found
        setErrorMessages({name:"uname", message: errors.uname});
      }
    };
    
    // JSX code for login form
    const renderForm = (
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="uname" required />
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
            {renderErrorMessage("pass")}
          </div>
          <div>
            <input type="submit"/>
          </div>
        </form>
      </div>
    );
    
    return (
      <div className="app">
        <div className="login-form">
          <div className="title">Sign In</div>
          {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        </div>
      </div>
    );
  }
}