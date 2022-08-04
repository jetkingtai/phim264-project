import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SearchPage() {
    const [searchMovies, setSearchMovies] = useState([])
    const params = useParams();
    const keyWork = params?.keywork
    useEffect(() => {
        axios({
            method: 'GET',
            url: `
            https://api.themoviedb.org/3/search/movie?api_key=6f938045d8743e7d4bfeea034f3349bc&language=en-US&query=${keyWork}&page=1&include_adult=false`,
            }).then(res => {
            setSearchMovies(res.data.results)
        });

    }, [])
    return(
        <div className="container">
            {<div className="trending row mt20">
                {searchMovies.map(searchMovie => {
                    return (
                        <div key={searchMovie.id} className="trending-icon col l-2">
                            <img className="trending-icon-img" src={`https://image.tmdb.org/t/p/original${searchMovie.poster_path}`} alt="" />
                            <h4>{searchMovie.title || searchMovie.original_name || searchMovie.original_title}</h4>
                            <span>{searchMovie.release_date || searchMovie.first_air_date}</span>
                        </div>
                    )
                })}
            </div>}
        </div>
    )
}
export default SearchPage