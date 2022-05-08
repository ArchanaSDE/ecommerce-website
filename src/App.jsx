import React from 'react'
import Home from './pages/Home'
import ProductsList from './pages/ProductsList'
import Register from './pages/Register'
import Login from './pages/Login'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path ="/" element = {<Home/>}/>
          <Route path = "/login" element = {<Login/>}/>
          <Route path = "/register" element = {<Register/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
