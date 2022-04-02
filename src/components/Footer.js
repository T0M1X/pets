import { StyledFooter } from './styles/Footer.styled'

const Footer = () => {
  return (
    <StyledFooter>
      <h1>We are ready for you!</h1>
      <ul>
        <li>We take care of dogs and cats!</li>
        <li>We can take your dog for a walk!</li>
        <li>Your cat can stay the night with us!</li>
      </ul>
      <ul>
        <li><a href='https://www.google.com/maps/place/Queen+Mary+University+of+London/@51.5204321,-0.0597694,15z/data=!4m9!1m2!2m1!1squeen+mary!3m5!1s0x48761d2f4ebb40dd:0xc0cca7de33120519!8m2!3d51.5240671!4d-0.0403745!15sCgpxdWVlbiBtYXJ5WgwiCnF1ZWVuIG1hcnmSAQp1bml2ZXJzaXR5'>
          Location</a></li>
        <li><a href='https://github.com/T0M1X/pets'>GitHub</a></li>
        <li>© Group 1 2022, All rights reserved</li>
      </ul>
    </StyledFooter>
  )
}

export default Footer