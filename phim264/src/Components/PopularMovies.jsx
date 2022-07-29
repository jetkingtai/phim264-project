import { useEffect, useState } from "react";
import axios from 'axios';
function PopularMovies() {
    const [flims, setFlims] = useState([])

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://api.themoviedb.org/3/trending/all/day?api_key=6f938045d8743e7d4bfeea034f3349bc',
            data: null
            }).then(res => {
            setFlims(res.data.results)
            });
    }, [])


    return (
        <div className="container">
            <div className="trending row-nowrap">
                {flims.map(flim => {
                    return (
                        <div key={flim.id} className="trending-icon col l-2-add">
                            <img className="trending-icon-img" src={`https://image.tmdb.org/t/p/original${flim.poster_path}`} alt="" />
                            <h4>{flim.title || flim.original_name || flim.original_title}</h4>
                            <span>{flim.release_date || flim.first_air_date}</span>
                            <div className="percent">{Math.floor(flim.vote_average*10)}</div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
    
}
export default PopularMovies