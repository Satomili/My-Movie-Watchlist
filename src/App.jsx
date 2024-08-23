import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Watchlist from './Watchlist'
import { useState } from 'react'


function App() {

  const [myWatchlist, setMyWatchlist] = useState(() => {
    return JSON.parse(localStorage.getItem("myWatchlist")) || []
  })

  const addToMyWatchlist = (movie) => {
    if (!myWatchlist.find(({ imdbID }) => imdbID === movie.imdbID )) {
      setMyWatchlist((prevMyWatchlist) => [...prevMyWatchlist, movie])
      console.log("added")
    }
  }

  const removeFromMyWatchlist = (imdbID) => {
    setMyWatchlist((prevMyWatchlist) => prevMyWatchlist.filter((movie) => movie.imdbID !== imdbID))
    console.log("removed")
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
              element={<Watchlist removeFromMyWatchlist={removeFromMyWatchlist} />}  
            />
        </Routes>
    </Router>
  )
}

export default App
