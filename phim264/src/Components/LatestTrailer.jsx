function LatestTrailer() {
    return (
        <div className="container">
            <div className="latest-trailer">
                <div className="latest-trailer-top">
                    <h1>Latest Trailers</h1>
                    <div className="latest-trailer-option">
                        <button>On TV</button>
                        <button>In Theaters</button>
                    </div>
                </div>

                <div className="latest-trailer-bottom">
                    This panel didn't return any results. Try refreshing it.
                </div>
            </div>
        </div>
    )
}

export default LatestTrailer