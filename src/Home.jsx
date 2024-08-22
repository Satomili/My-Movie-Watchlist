import Header from "./Header"
import SearchForm from "./SearchForm"
import MovieList from "./MovieList"
import { useState } from "react"
const apiKey = "5d1ecff" // API key for OMDB API

export default function Home() {
    const [movies, setMovies] = useState([])

    const fetchMovies = async(value) => {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${value}`)
        const data = await response.json()
        if(data.Search) {
            setMovies(data.Search)
            console.log(data.Search)
        } else {
            console.log("no movie")
        }
    }

    return (
        <div>
            <Header />
            <SearchForm fetchMovies={fetchMovies} />
            <MovieList />
        </div>
    )
}