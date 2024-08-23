import "./MovieCard.css"
import MovieCardButton from "./MovieCardButton"
import placeholderImage from "./assets/no-image-placeholder.png"

export default function MovieCard({movie, isInWatchlist, onAdd, onRemove}) {

    const posterUrl = movie.Poster !== "N/A" ? movie.Poster : placeholderImage

    return (
        <>
            <div className="movie-card">
                <img className="movie-poster" src={posterUrl} alt="Movie Poster" />
                <div className="movie-info-container">
                    <div className="movie-info-one">
                        <h2 className="movie-title">{movie.Title}</h2>
                        <p className="movie-imdbRating">
                            <i className="fa-solid fa-star"></i> {movie.imdbRating}
                        </p>
                    </div>
                    <div className="movie-info-two">
                        <p className="movie-runtime">
                            <i className="fa-regular fa-clock"></i> {movie.Runtime}
                        </p>
                        <p className="movie-genre">
                            <i className="fa-solid fa-video"></i> {movie.Genre}
                        </p>
                        {isInWatchlist ? (
                            <MovieCardButton 
                                onClick={() => onRemove(movie.imdbID)} 
                                label={<><i className="fa-solid fa-circle-minus"></i> Remove</>} 
                            />
                        ) : (
                            <MovieCardButton 
                                onClick={() => onAdd(movie)} 
                                label={<><i className="fa-solid fa-circle-plus"></i> Watchlist</>}
                            />
                        )}
                    </div>
                    <p className="movie-plot">{movie.Plot}</p>
                </div>
            </div>
            <hr />
        </>
    )
}