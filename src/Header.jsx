import { Link } from "react-router-dom"
import "./Header.css"

export default function Header() {
    return (
        <header>
            <h1>
                <a href="/">Find your film</a>
            </h1>
            <p>
                <a href="/watchlist">
                    <i className="fa-solid fa-list"></i> My Watchlist
                </a>
            </p>
        </header>
    )
}