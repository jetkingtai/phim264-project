
import BanApp from "../../Components/BanApp"
import LatestTrailer from "../../Components/LatestTrailer"
import PopularMovies from "../../Components/PopularMovies"
import Trending from "../../Components/Trending"
function HomePage() {
    return (
        <div className='myapp'>

    
    
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
    
    
    
    
          
        </div>
    )
}

export default HomePage