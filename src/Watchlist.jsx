import Header from "./Header"
import MovieList from "./MovieList"

export default function Watchlist({ removeFromMyWatchlist }) {
    return (
        <div>
            <Header />
            <MovieList isInWatchlist={true} onRemove={removeFromMyWatchlist} />
        </div>
    )
}