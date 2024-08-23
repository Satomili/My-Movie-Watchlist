import { Link, useLocation } from "react-router-dom"
import "./Header.css"

export default function Header() {
    const location = useLocation()

    const isHomePage = location.pathname === "/"
    const isWatchlistPage = location.pathname === "/watchlist"

    return (
        <header>
            {isHomePage && (
                <>
                    <h1>
                        <Link to="/">Find your film</Link>
                    </h1>
                    <p>
                        <Link to="/watchlist">
                            <i className="fa-solid fa-list"></i> My Watchlist
                        </Link>
                    </p>
                </>
            )}
            {isWatchlistPage && (
                <>
                    <h1>
                        <Link to="/">My Watchlist</Link>
                    </h1>
                    <p>
                        <Link to="/">
                            <i className="fa-solid fa-magnifying-glass"></i> Search for movies
                        </Link>
                    </p>
                </>
            )}
        </header>
    )
}