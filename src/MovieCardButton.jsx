import "./MovieCardButton.css"

export default function MovieCardButton({label, onClick}) {
    return (
        <button onClick={onClick}>
            {label}
        </button>
    )
}