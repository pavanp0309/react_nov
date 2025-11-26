import React, { Suspense } from 'react'

// importing the Pages 
let Home=React.lazy(()=>import("./pages/Home"))
let About =React.lazy(()=>import("./pages/About"))
let Contact =React.lazy(()=>import("./pages/Contact"))
let Services =React.lazy(()=>import("./pages/Services"))
let Features =React.lazy(()=>import("./pages/Features"))
let Shop =React.lazy(()=>import("./pages/Shop"))
let PageNotFound =React.lazy(()=>import("./pages/PageNotFound"))
let Basic =React.lazy(()=>import("./pages/Basic"))
let Advanced =React.lazy(()=>import("./pages/Advanced"))
let FeatureDetails =React.lazy(()=>import("./pages/FeatureDetails"))
let Premium =React.lazy(()=>import("./pages/Premium"))
import NavBar from './components/NavBar'

// import the Routes and Route component to develope the url structure
import { Routes,Route, BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
<Suspense fallback={<span>loading...</span>}>
      <Routes> {/* decides what  page to render in the Browser at initial load */}
      <Route path='/' element={<Home/>}/> {/* helps in developing url path and helps to render the component of that path*/}
      <Route path='/about' element={<About/>}/> {/* helps in developing url path and helps to render the component of that path*/}
      <Route path='/contact' element={<Contact/>}/> {/* helps in developing url path and helps to render the component of that path*/}
      <Route path='/services' element={<Services/>}/> {/* helps in developing url path and helps to render the component of that path*/}
      <Route path='/shop' element={<Shop/>}/>
      {/* Nested Routing */}
      <Route path='/feature' element={<Features/>}>
          <Route index element={<Basic/>}/>
          {/* dynamic Routing */}
          <Route path='basic' element={<Basic/>}/>
          <Route path='basic/:fid' element={<FeatureDetails/>}/>
          <Route path="premium" element={<Premium />} />
          <Route path="premium/:fid" element={<FeatureDetails />} />

          <Route path="advanced" element={<Advanced />} />
          <Route path="advanced/:fid" element={<FeatureDetails />} />
      </Route>
      {/* error handling in react routing */}
      <Route path='*' element={<PageNotFound/>}/> 
    </Routes>
</Suspense>
</BrowserRouter>
      
    </>
  )
}

export default App
