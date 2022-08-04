import axios from "axios";
import { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
export const listXin = createContext()



function BanApp() {

    const [flims, setFlims] = useState([])
    const [keyWord, setKeyWord] = useState('')
    const navigate = useNavigate()
    const handleChange = (e) => {
        setKeyWord(e.target.value)
    }
    const handleClick = () => {
        navigate(`/search/${keyWord}`)
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
                        <input 
                            onChange={handleChange} 
                            placeholder="Search for a movie, tv show, person......" 
                            type="text"
                            value={keyWord} 
                        />
                        <button onClick={handleClick}>Search</button>
                    </div>
                </div>

            </div>
        </listXin.Provider>
    )
}
export default BanApp