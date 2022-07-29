import logo from './logo.svg';
import './App.css';
import HeaderNav from './Components/HeaderNav';
import BanApp from './Components/BanApp';
import PopularMovies from './Components/PopularMovies';


function App() {
  return (
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
    </div>
  );
}

export default App;
