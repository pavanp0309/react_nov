import React, { useState } from 'react'
import Counter from './components/Counter'
// import CartCounter from './hooks/state/CartCounter'
// import Theme from './hooks/state/Theme'
// import UserForm from './hooks/state/UserForm'
// import Features from './hooks/effect/Features'
// import News from './hooks/effect/News.jsx'
import Home from './hooks/context/pages/Home.jsx'

const App = () => {
  const [play ,setPlay]=useState(false)
  return (
    <div>
      {/* <CartCounter/>
      <Theme/> */}
      {/* <UserForm/> */}
      {/* <Features data="righ"/> */}
      {/* <Counter/> */}
      {/* <News/> */}
      <Home/>
    </div>
  )
}

export default App
