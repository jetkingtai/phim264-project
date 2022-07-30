import axios from "axios";
import {useEffect, useState} from "react"

function Trending() {
    const [flimTrendings, SetFlimTrendings] = useState([])

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/popular?api_key=6f938045d8743e7d4bfeea034f3349bc&language=en-US&page=1',
            data: null
            }).then(res => {
            SetFlimTrendings(res.data.results)
            });
    }, [])


    return (
        <div className="container">
            <div className="trending row-nowrap">
                {flimTrendings.map(flimTrending => {
                    return (
                        <div key={flimTrending.id} className="trending-icon col l-2-add">
                            <img className="trending-icon-img" src={`https://image.tmdb.org/t/p/original${flimTrending.poster_path}`} alt="" />
                            <h4>{flimTrending.title || flimTrending.original_name || flimTrending.original_title}</h4>
                            <span>{flimTrending.release_date || flimTrending.first_air_date}</span>
                            <div className="percent">{Math.floor(flimTrending.vote_average*10)}</div>
                        </div>
                    )
                })}
            </div>

        </div>
    )

}
export default Trending