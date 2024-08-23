import MovieCard from "./MovieCard"
import "./MovieList.css"

export default function MovieList({ movies, isInWatchlist, onAdd, onRemove }) {
    return (
        <div className="movie-list">
            {movies.length > 0 ? (
                movies.map((movie) => (
                    <MovieCard 
                        key={movie.imdbID} 
                        movie={movie} 
                        isInWatchlist={isInWatchlist}
                        onAdd={onAdd}
                        onRemove={onRemove}
                    />
                ))
            ) : (
                <p>
                    {isInWatchlist 
                        ? "Your watchlist is empty..." 
                        : <>
                            <i className="fa-solid fa-film film-icon"></i>
                            Start exploring by searching for movies!
                          </>
                    }
                </p>
            )}
        </div>
    );
}