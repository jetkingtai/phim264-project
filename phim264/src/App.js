import logo from './logo.svg';
import './App.css';
import HeaderNav from './Components/HeaderNav';
import BanApp from './Components/BanApp';
import PopularMovies from './Components/PopularMovies';
import LatestTrailer from './Components/LatestTrailer';
import Trending from './Components/Trending';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ListFlim from './Components/ListFlim';



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={
          <div className='myapp'>

          <div className='top-content'>
            <div className="container">
              <HeaderNav></HeaderNav>
            </div>
          </div>
    
    
          <div className='banner-content'>
            <BanApp></BanApp>
          </div>
    
    
          <div className='popular-content-wrap'>
            <div className='container'>
              <h1 className="trending-title">Trending</h1> 
            </div>
            <div className='popular-content'>
              <PopularMovies></PopularMovies>
            </div>
          </div>
    
    
          <div className='latest-trailer-content'>
            <LatestTrailer></LatestTrailer>
          </div>
    
    
          <div className='trending-content-wrap'>
            <div className='container'>
              <h1 className="trending-title">What's Popular</h1> 
            </div>
            <div className='trending-content'>
              <Trending></Trending>
            </div>
          </div>
    
    
    
    
          <div className='footer-content'>
            <Footer></Footer>
          </div>
        </div>
        }></Route>

        {/* <Route path="/tv" exact element={<ListFlim></ListFlim>}></Route> */}
      </Routes>

      <ListFlim></ListFlim>
    

    </Router>
  );
}

export default App;
