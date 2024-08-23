export default function Notification({message, isShow, isInWatchlist}) {
    return (
        <div className={`notification ${isShow ? 'show' : ''}`} >
            <i className="fa-solid fa-check"></i>
            <div className="notification-message">
                <h3>{message}</h3>
                {!isInWatchlist && <p>check your movielist!</p> }
            </div>
        </div>
    )
}