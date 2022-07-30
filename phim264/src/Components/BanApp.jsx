import axios from "axios";
import { useEffect, useState, createContext } from "react";
import ListFlim from "./ListFlim";

export const listXin = createContext()



function BanApp() {

    const [flims, setFlims] = useState([])
    let keyWord = ''
    let listFlimsChien = []
    const handleChange = (e) => {
        keyWord = e.target.value;
    }
    const handleClick = (e) => {
        axios({
            method: 'GET',
            url: `
            https://api.themoviedb.org/3/search/movie?api_key=6f938045d8743e7d4bfeea034f3349bc&language=en-US&query=${keyWord}&page=1&include_adult=false`,
            data: null
            }).then(res => {
            setFlims(res.data.results)
        });
    }




    return (
        <listXin.Provider value={flims}>

            <div className="container">
                <div className="banner-content-main">
                    <div className="banner-hi">
                        <h1>Welcome</h1>
                        <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
                    </div>

                    
                    <div className="search-main">
                        <input onChange={handleChange} placeholder="Search for a movie, tv show, person......" type="text" />
                        <button onClick={handleClick}>Search</button>
                    </div>
                </div>

            </div>
        </listXin.Provider>
    )
}
export default BanApp