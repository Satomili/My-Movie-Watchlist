export default function searchForm() {
    return (
        <form>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input 
                type="search" 
                placeholder="Search for a movie"
            />
            <button type="submit">Search</button>
        </form>
    )
}