import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Courses from './components/Courses'
import NotFound from './components/NotFound'


const App = () => {
  return (
    <BrowserRouter>
    <div>
        <nav className="flex gap-4 p-4">
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/contactUs"> Contact </Link>
          <Link to="/courses"> Courses</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contactUs" element={<Contact />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/courses/:id" element={<Courses />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
