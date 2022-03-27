import Header from "./components/Header";
import Footer from "./components/Footer";
import {Container} from "./components/styles/Container.styled"
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styles/Global'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


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
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Header />
          <Routes>
            <Route
            path="/"
            element={
              <>
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
                <div>
                  <p>will contain about me stuff</p>
                  <p>and other crap</p>
                </div>
              </>
            }/>
          </Routes>
          <Footer />
        </>
      </ThemeProvider>
    </Router>
  );
}

export default App;
