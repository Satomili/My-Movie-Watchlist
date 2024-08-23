import Header from "./Header"
import MovieList from "./MovieList"

export default function Watchlist({ myWatchlist, removeFromMyWatchlist }) {
    return (
        <div>
            <Header />
            <MovieList movies={myWatchlist} isInWatchlist={true} onRemove={removeFromMyWatchlist} />
        </div>
    )
}