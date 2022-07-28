function HeaderNav() {
    return (
        <div className="header">
            <div className="header-left">
                <div className="logo-main">
                    <h2>phim264</h2>
                </div>

                <div className="header-nav">
                    <ul className="header-nav-list">
                        <li className="header-nav-content">Movies</li>
                        <li className="header-nav-content">TV Show</li>
                        <li className="header-nav-content">People</li>
                        <li className="header-nav-content">More</li>
                    </ul>
                </div>
            </div>

            <div className="header-right">
                <ul className="header-nav-list-right">
                    <li className="header-nav-list-right-content">+</li>
                    <li className="header-nav-list-right-content">VI</li>
                    <li className="header-nav-list-right-content">Bell</li>
                    <li className="header-nav-list-right-content">User</li>
                    <li className="header-nav-list-right-content">Find</li>
                </ul>
            </div>


        </div>
    )
}

export default HeaderNav