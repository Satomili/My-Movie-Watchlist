import Header from "./Header"
import SearchForm from "./SearchForm"
import MovieList from "./MovieList"

export default function Home() {
    return (
        <div>
            <Header />
            <SearchForm />
            <MovieList />
        </div>
    )
}