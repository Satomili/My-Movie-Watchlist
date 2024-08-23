import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Watchlist from './Watchlist'
import { useState } from 'react'


function App() {

  const [myWatchlist, setMyWatchlist] = useState([])

  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
    </Router>
  )
}

export default App
