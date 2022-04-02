import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "./components/styles/Container.styled"
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styles/Global'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPageWrapper from './components/styles/MainPage.styled'
import pawPrint from './images/pawPrint.png'
import housePrint from './images/housePrint.png'
import rainbowPrint from './images/rainbowPrint.png'
import petCat from './images/petCat.png'
import petDog from './images/dogHappy.jpeg' // put images in pub
import petCat2 from './images/petCat2.jpeg'
import Calendar from './components/viewCalendar/viewCalendar';
import SearchSitters from "./components/searchSitters/searchSitters";


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
            <Route path="/viewCalendar" element={<Calendar />} />
            <Route
              path="/"
              element={
                <>
                  <Container>
                    <div>
                      {/* get buttons to link to page */}
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
                      <p className='blankText'>l</p>
                    </div>
                  </Container>
                  <MainPageWrapper>
                    <h2 className='infoTitle'>Services for every pet</h2>
                    <div className='grid'>
                      <img className='petCat' src={petCat} ></img>
                      <img className='petDog' src={petDog} ></img>
                      <p>Here are some of our satisfied customers!</p>
                    </div>
                    <div className='infoDivs'>
                      <img className='pawImg' src={pawPrint}></img>
                      <h4>Walking</h4>
                      <p>We will walk your pet near your area or where ever you feel like! Perfect for your pet to stretch its legs, or wings; whatever they would like.</p>
                    </div>
                    <div className='infoDivs'>
                      <img className='houseImg' src={housePrint}></img>
                      <h4>Drop-in</h4>
                      <p>Your pet visits your sitter's home to take care, play, feed and have fun with them! </p>
                    </div>
                    <div className='infoDivs'>
                      <img className='rainbowImg' src={rainbowPrint}></img>
                      <h4>Day Care</h4>
                      <p>Your sitter takes care of your pets and home, giving your furry friends all the attention and love they need without leaving the home.</p>
                    </div>

                  </MainPageWrapper>

                </>
              } />
              <Route path="/search" element={<SearchSitters />} />
          </Routes>
          <Footer />
        </>
      </ThemeProvider>
    </Router>
  );
}

export default App;
