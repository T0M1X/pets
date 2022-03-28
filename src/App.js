import Header from "./components/Header";
import Footer from "./components/Footer";
import {Container} from "./components/styles/Container.styled"
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styles/Global'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calendar from './components/viewCalendar/viewCalendar';


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
                  <div>
                  <p className='blankText'>l</p>
                  <p className='blankText'>l</p>
                  <p className='blankText'>l</p>
                  <p className='blankText'>l</p>
                  <p className='blankText'>l</p>
                  <p className='openingText'>Welcome to PetFriends, where all pets are friends here!</p>
                  <p className='underlyingText'>Book the best sitters and walkers for your furry friends</p>
                  <p className='blankText'>l</p>
                  <p className='blankText'>l</p>
                  <p className='blankText'>l</p>
                  <p className='blankText'>l</p>
                  <p className='blankText'>l</p>
                  </div>
                </Container>
                <Calendar />
                <div className='infoDiv'>
                  <p>will contain about me stuff</p>
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
