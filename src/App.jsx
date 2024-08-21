import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Watchlist from './Watchlist'


function App() {

  return (
    <>
      <Home />
      <Watchlist />
    </>
  )
}

export default App
