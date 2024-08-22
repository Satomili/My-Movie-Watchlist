import { useState } from "react"
import "./SearchForm.css"

export default function searchForm({fetchMovies}) {
    
    const [inputValue, setInputValue] = useState('')

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchMovies(inputValue)
    }

    return (
        <form onSubmit={handleSubmit}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input 
                type="search" 
                placeholder="Search for a movie"
                value={inputValue}
                onChange={handleChange}
            />
            <button type="submit">Search</button>
        </form>
    )
}