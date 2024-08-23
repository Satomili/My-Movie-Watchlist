import "./MovieCardButton.css"

export default function MovieCardButton({label, handleClick}) {
    return (
        <button onClick={handleClick}>
            {label}
        </button>
    )
}