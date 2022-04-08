import { StyledHeader, Nav} from "./styles/Header.styled"
import { Button } from './styles/Button.styled'
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [loginText, setLoginText] = useState({text:""});
  useEffect(() => {
    //if UserDetails exists in localStorage, set the text to the username; else "Sign in"
    if (localStorage.getItem('UserDetails')){
      setLoginText({text:localStorage.getItem('UserDetails')});
    }
    else{
      setLoginText({text:"Sign In"});
    }
  }, []);

    return (
        <StyledHeader>
            <Nav>
                <Link to="/">
                  <Button className="logo" bg='transparent'><img src='/logo.png' alt='' /></Button>
                </Link> 
              <p>PetFriends!</p>
              <Link to="/search">
                <Button className="right-nav">Seach Sitters</Button>
              </Link>
              {(loginText.text != "Sign In") ? 
              (
                <div/>
              ) : (
              <Link to="/register">
                <Button className="register">Sign Up</Button>
              </Link>
              )}
              <Link to="/login">
                <Button className="login">{loginText.text}</Button>
              </Link>
            </Nav>
        </StyledHeader>
    )
}
  
export default Header