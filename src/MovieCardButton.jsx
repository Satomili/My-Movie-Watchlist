import "./MovieCardButton.css"

export default function MovieCardButton({label, onClick}) {
    return (
        <button className="movie-button" onClick={onClick}>
            {label}
        </button>
    )
}