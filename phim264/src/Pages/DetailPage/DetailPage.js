import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


function DetailPage() {
    let listType = [];
    const params = useParams();
    const idMovie = params?.id
    const [detail, setDetail] = useState({});
    useEffect(() => {
        axios({
            method: 'GET',
            url: `
            https://api.themoviedb.org/3/movie/${idMovie}?api_key=6f938045d8743e7d4bfeea034f3349bc&language=vi-VN`,
            }).then(res => {
            console.log(res.data);
            setDetail(res.data)
        });
    }, [])
    

    return(
        
        <div className="detailpage-content-parent">
            <img className="detai-background" src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${detail.backdrop_path}`} alt="" />
            <div className="container detailpage-content">
                <div className="detail-content-main row">
                    <div className="img-detail col l-3">
                        <img src={`https://image.tmdb.org/t/p/original${detail.poster_path}`} alt="" />
                    </div>

                    <div className="detail-content col l-9">
                        <div>
                            <h2 className="detai-content-title">{detail.title}</h2>
                            <span>Ngày Phát hành: {detail.release_date}</span>
                        </div>
                        <div className="overview">
                            <h2>OverView</h2>
                            <span>{detail.overview}</span>
                        </div>
                    </div>


                </div>
            </div>
        </div>
        
    )
}
export default DetailPage