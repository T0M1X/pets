import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "./components/styles/Container.styled";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPageWrapper from "./components/styles/MainPage.styled";
import Calendar from "./components/viewCalendar/viewCalendar";
import SearchSitters from "./components/searchSitters/searchSitters";
import { Link } from "react-router-dom";
import LoginApp from './components/login/login';
import RegisterApp from './components/login/register/register';
import SittersProfile from './components/viewSittersProfile/sittersProfile';

const theme = {
  colors: {
    header: "rgb(24,26,27)",
    body: "rgb(200,200,200)",
    footer: "rgb(24,26,27)",
  },
  mobile: "768px",
};

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Header />
          <Routes>
            <Route path="/login" element={<LoginApp />} />
            <Route path="/register" element={<RegisterApp />} />
            <Route path="/viewCalendar" element={<Calendar />} />
            <Route
              path="/"
              element={
                <>
                  <Container>
                    <div
                      style={{ paddingTop: "250px", paddingBottom: "250px" }}
                    >
                      {/* get buttons to link to page */}
                      <p className="openingText">
                        Welcome to PetFriends, where all pets are friends here!
                      </p>
                      <p className="underlyingText">
                        Book the best sitters and walkers for your furry friends
                      </p>
                      <div className="button-group">
                        <Link to="/search">
                          <button>Walking</button>
                        </Link>
                        <Link to="/viewCalendar">
                          {/* //left like this just to check, will change later on */}
                          <button>Day Care</button>
                        </Link>
                      </div>
                    </div>
                  </Container>
                  <MainPageWrapper>
                    <h2 className="infoTitle">Services for every pet</h2>
                    <div className="grid">
                      <img className="petCat" src="petCat.png"></img>
                      <img className="petDog" src="dogHappy.jpeg"></img>
                      <p>Here are some of our satisfied customers!</p>
                    </div>
                    <div className="infoDivs">
                      <img className="pawImg" src="pawPrint.png"></img>
                      <h4>Walking</h4>
                      <p>
                        We will walk your pet near your area or where ever you
                        feel like! Perfect for your pet to stretch its legs, or
                        wings; whatever they would like.
                      </p>
                    </div>
                    <div className="infoDivs">
                      <img className="houseImg" src="housePrint.png"></img>
                      <h4>Drop-in</h4>
                      <p>
                        Your pet visits your sitter's home to take care, play,
                        feed and have fun with them!
                      </p>
                    </div>
                    <div className="infoDivs">
                      <img className="rainbowImg" src="rainbowPrint.png"></img>
                      <h4>Day Care</h4>
                      <p>
                        Your sitter takes care of your pets and home, giving
                        your furry friends all the attention and love they need
                        without leaving the home.
                      </p>
                    </div>
                  </MainPageWrapper>
                </>
              }
            />
            <Route path="/search" element={<SearchSitters />} />
            <Route path="/profile/:name" element={<SittersProfile />} />
          </Routes>
          <Footer />
        </>
      </ThemeProvider>
    </Router>
  );
}

export default App;
