import "./MovieCard.css"

export default function MovieCard({movie}) {

    const posterUrl = movie.Poster !== "N/A" ? movie.Poster : "./assets/no-image-placeholder.png"

    return (
        <>
            <div className="movie-card">
                <img className="movie-poster" src={posterUrl} alt="Movie Poster" />
                <div className="movie-info-container">
                    <div className="movie-info-one">
                        <h2 className="movie-title">{movie.Title}</h2>
                        <p className="movie-imdbRating">
                            <i className="fa-solid fa-star star-icon"></i> {movie.imdbRating}
                        </p>
                    </div>
                    <div className="movie-info-two">
                        <p className="movie-runtime">
                            <i className="fa-regular fa-clock"></i> {movie.Runtime}
                        </p>
                        <p className="movie-genre">
                            <i className="fa-solid fa-video"></i> {movie.Genre}
                        </p>
                        <button>button</button>
                    </div>
                    <p className="movie-plot">{movie.Plot}</p>
                </div>
            </div>
            <hr />
        </>
    )
}