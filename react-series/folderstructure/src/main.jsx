import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from "./App.jsx" // default import
import { Services } from './App.jsx' //named import
// import Contact from './Contact.jsx'
import ProductCard from './Product.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
    {/* <Contact/> */}
    <ProductCard/>
  </StrictMode>,
)
