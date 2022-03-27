import Header from "./components/Header";
import Footer from "./components/Footer";
import {Container} from "./components/styles/Container.styled"
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styles/Global'


const theme = {
  colors: {
    header: 'rgb(24,26,27)',
    body: 'rgb(200,200,200)',
    footer: 'rgb(24,26,27)',
  },
  mobile: '768px',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <p>l</p>
          <p>l</p>
          <p>l</p>
          <p>l</p>
          <p>l</p>
          <p>l</p>
          <p>l</p>
          <p>l</p>
          <p>l</p>
          <p>l</p>
          <p>l</p>
          <p>l</p>
          <p>l</p>
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
