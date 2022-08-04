import logo from './logo.svg';
import './App.css';
import HeaderNav from './Components/HeaderNav';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ListFlim from './Components/ListFlim';
import HomePage from './Pages/HomePages/HomePage'
import SearchPage from './Pages/SearchPage/SearchPage'



function App() {

  return (
    <Router>
      <div className='top-content'>
        <div className="container">
          <HeaderNav></HeaderNav>
        </div>
      </div>
      <Routes>
        
        <Route path="/" exact element={<HomePage></HomePage>}></Route>
        <Route path="/search/:keywork" exact element={<SearchPage></SearchPage>}></Route>
      </Routes>

      <div className='footer-content'>
        <Footer></Footer>
      </div>

    </Router>
  );
}

export default App;
