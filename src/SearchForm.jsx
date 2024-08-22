import { useState } from "react"
import "./SearchForm.css"

export default function searchForm() {
    
    const [inputValue, setInputValue] = useState('')

    return (
        <form>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input 
                type="search" 
                placeholder="Search for a movie"
                value={inputValue}
            />
            <button type="submit">Search</button>
        </form>
    )
}