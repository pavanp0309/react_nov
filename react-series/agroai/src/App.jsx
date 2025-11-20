import React from 'react'
// importing the Pages 
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Features from './pages/Features'
import PageNotFound from './pages/PageNotFound'
import NavBar from './components/NavBar'
// import the Routes and Route component to develope the url structure
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    <NavBar/>
    <Routes> {/* decides what  page to render in the Browser at initial load */}
      <Route path='/' element={<Home/>}/> {/* helps in developing url path and helps to render the component of that path*/}
      <Route path='/about' element={<About/>}/> {/* helps in developing url path and helps to render the component of that path*/}
      <Route path='/contact' element={<Contact/>}/> {/* helps in developing url path and helps to render the component of that path*/}
      <Route path='/feature' element={<Features/>}/> {/* helps in developing url path and helps to render the component of that path*/}
      <Route path='/services' element={<Services/>}/> {/* helps in developing url path and helps to render the component of that path*/}
      {/* error handling in react routing */}
      <Route path='*' element={<PageNotFound/>}/> 
    </Routes>
      
    </>
  )
}

export default App
