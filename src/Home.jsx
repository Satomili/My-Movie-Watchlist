import Header from "./Header"
import SearchForm from "./SearchForm"
import MovieList from "./MovieList"
import { useState } from "react"

export default function Home() {
    const [movies, setMovies] = useState([])


    return (
        <div>
            <Header />
            <SearchForm />
            <MovieList />
        </div>
    )
}