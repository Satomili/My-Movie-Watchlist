import MovieCard from "./MovieCard"
import "./MovieList.css"

export default function MovieList({movies}) {

    return (
        <div className="movie-list">
            {movies.length > 0 ? (
                movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie}/>)
            ) : (
                <p>No movies to display</p>
            )}
        </div>
    )
}