import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #fff;
    color: rgb(25,25,25);
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
  }
  p {
    opacity: 0.9;
    line-height: 1.5;
    margin:auto;
  }
  img {
    max-width: 100%;
  }
  br {
    margin: auto;
  }                

  
}
`

export default GlobalStyles