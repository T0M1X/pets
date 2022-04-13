import { StyledHeader, Nav } from "./styles/Header.styled"
import { Button } from './styles/Button.styled'
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [loginText, setLoginText] = useState({text:"Sign In", type:""});
  const LoginCheck = () => {
    //console.log("LOGIN CHECK");
    if (localStorage.getItem('UserDetails')){
      if(loginText.text == "Sign In"){
        setLoginText({
        text:localStorage.getItem('UserDetails'),
        type:localStorage.getItem('UserType')
        });
        //console.log(loginText.text)
      }
    }
  };
  useEffect(() => {LoginCheck()}, []) //does login check first thing to prevent showing the wrong headers on refresh
  setInterval(LoginCheck, 900); //checks login regularly checks if user is logged in
  
  const Logout = () => {
    localStorage.removeItem('UserDetails');
    localStorage.removeItem('UserType');
    localStorage.removeItem('UserId')
    setLoginText({text:"Sign In"});
  }
  return (
    <StyledHeader>
      <Nav>
        <Link to="/">
          <Button className="logo" bg='transparent'><img src='/logo.png' alt='' /></Button>
        </Link>
        <p>PetFriends!</p>
        <Link to="/search">
          <Button className="right-nav">Search Sitters</Button>
        </Link>
        {(loginText.type == "sitter") ? (
          <Link to="/bookingConfirm">
            <Button className="booking-list">Booking List</Button>
          </Link>
        ) : (<div/>)}
        {(loginText.text != "Sign In") ? 
        (
        <Link to="/viewCalendar">
          <Button className='calendar'>Calendar</Button>
        </Link>
        ) : (
        <Link to="/register">
          <Button className="register">Sign Up</Button>
        </Link>
        )}
        <Link to="/login">
          <Button className="login">{loginText.text}</Button>
        </Link>
        {(loginText.text != "Sign In") ? 
        (
        <Link to="/login">
          <Button onClick={Logout}>Logout</Button>
        </Link>
        ) : (<div/>)}
      </Nav>
    </StyledHeader>
  )
}

export default Header