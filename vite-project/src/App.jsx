import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'


const App = () => {
  return (
    <BrowserRouter>
    <div>
        <nav className="flex gap-4 p-4">
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/contactUs"> Contact </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contactUs" element={<Contact />}></Route>
        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
