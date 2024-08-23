import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Watchlist from './Watchlist'
import Notification from './Notification'
import { useEffect, useState } from 'react'


function App() {

  const [myWatchlist, setMyWatchlist] = useState(() => {
    return JSON.parse(localStorage.getItem("myWatchlist")) || []
  })

  const [notification, setNotification] = useState({message: '', isShow: false, isInWatchlist: false})

  useEffect(() => {
    localStorage.setItem('myWatchlist', JSON.stringify(myWatchlist))
  }, [myWatchlist])

  useEffect(() => {
    if (notification.isShow) {
      const timer = setTimeout(() => {
        setNotification(prev => ({ ...prev, isShow: false }))
      }, 3000) 

      return () => clearTimeout(timer)
    }
  }, [notification.isShow])

  const addToMyWatchlist = (movie) => {
    if (!myWatchlist.find(({ imdbID }) => imdbID === movie.imdbID )) {
      setMyWatchlist((prevMyWatchlist) => [...prevMyWatchlist, movie])
      setNotification({ 
        message: `"${movie.Title}" added to your watchlist!`, 
        isShow: true,
        isInWatchlist: false
      })
    } else {
      setNotification({ 
        message: `"${movie.Title}" is already in your watchlist!`, 
        isShow: true,
        isInWatchlist: false
      })
    }
  }

  const removeFromMyWatchlist = (imdbID) => {
    setMyWatchlist((prevMyWatchlist) => prevMyWatchlist.filter((movie) => movie.imdbID !== imdbID))
    setNotification({ 
      message: `"${myWatchlist.find(movie => movie.imdbID === imdbID).Title}" removed from your watchlist!`, 
      isShow: true,
      isInWatchlist: true
    })
  }

  return (
    <Router>
        <Routes>
            <Route 
              path="/" 
              element={<Home addToMyWatchlist={addToMyWatchlist} />} 
            />
            <Route 
              path="/watchlist" 
              element={<Watchlist myWatchlist={myWatchlist} removeFromMyWatchlist={removeFromMyWatchlist} />}  
            />
        </Routes>
        <Notification message={notification.message} isShow={notification.isShow} isInWatchlist={notification.isInWatchlist}/>
    </Router>
  )
}

export default App
