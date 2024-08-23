import './Notification.css'

export default function Notification({message, isShow, isInWatchlist}) {
    return (
        <div className={`notification-container ${isShow ? 'show' : ''}`}>
            <div className="notification" >
                <i className="fa-solid fa-check"></i>
                <div className="notification-message">
                    <h3>{message}</h3>
                    {!isInWatchlist && <p>Check your watchlist from <b><a href="/watchlist">here</a></b></p>}
                </div>
            </div>
        </div>
    )
}