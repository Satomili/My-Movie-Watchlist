import Header from "./Header"
import SearchForm from "./SearchForm"
import MovieList from "./MovieList"
import { useState } from "react"
const apiKey = "5d1ecff" // API key for OMDB API

export default function Home({ setNotification, addToMyWatchlist }) {
    const [movies, setMovies] = useState([])

    const fetchMovies = async(value) => {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${value}`)
        const data = await response.json()
        if(data.Search) {
            const moviesWithDetails = []
            for(const movie of data.Search) {
                const movieDetails = await fetchMovieDetails(movie.imdbID)
                moviesWithDetails.push(movieDetails)
            }
            setMovies(moviesWithDetails)
        } else {
            setNotification({ 
                message: "Unable to find what you’re looking for. Please try another search.", 
                isShow: true,
                isInWatchlist: false
            })
        }
    }

    const fetchMovieDetails = async(imdbID) => {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}&plot=short&r=json`)
        const data = await response.json()
        return data
    }

    return (
        <div>
            <Header />
            <SearchForm fetchMovies={fetchMovies} />
            <MovieList 
                movies={movies} 
                isInWatchlist={false} 
                onAdd={addToMyWatchlist} 
            />
        </div>
    )
}