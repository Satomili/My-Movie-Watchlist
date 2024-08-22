import MovieCard from "./MovieCard"

export default function MovieList({movies}) {
    return (
        <div>
            {movies.length > 0 ? (
                movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie}/>)
            ) : (
                <p>No movies to display</p>
            )}
        </div>
    )
}