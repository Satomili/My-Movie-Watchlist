import { useState } from "react"
import "./SearchForm.css"

export default function searchForm() {
    
    const [inputValue, setInputValue] = useState('')

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <form>
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