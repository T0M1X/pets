import { StyledHeader, Nav} from "./styles/Header.styled"
import { Button } from './styles/Button.styled'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <StyledHeader>
            <Nav>
                <Link to="/">
                  <Button className="logo" bg='transparent'><img src='logo.png' alt='' /></Button>
                </Link> 
              <p>PetFriends!</p>
              <Link to="/search">
                <Button className="right-nav">Seach Sitters</Button>
              </Link>
              <Button>Sign Up</Button>
              <Button>Sign in</Button>
            </Nav>
        </StyledHeader>
    )
}
  
export default Header