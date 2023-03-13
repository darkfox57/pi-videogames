import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Addgame from './pages/Addgame/Addgame'
import Detail from './pages/Detail/Detail'
import Home from './pages/Home/Home'
import Landing from './pages/Landing/Landing'
import SearchResults from './pages/Search_results/SearchResults'

function App() {
  const location = useLocation()
  return (
    <div className="App">
      {location.pathname === '/' ? '' : <Header />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/add-game" element={<Addgame />} />
        <Route path="/search-results" element={<SearchResults />} />
      </Routes>
      <div className="video-bg">
        <video width="320" height="240" autoPlay={true} loop muted>
          <source
            src="https://assets.codepen.io/3364143/7btrrd.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  )
}

export default App
