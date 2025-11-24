import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Features = () => {
  return (
    <div className='container'>
      {/* nav section start */}
      <ul class="nav nav-pills p-2 border justify-content-center my-3 w-50 mx-auto">
        <li class="nav-item">
          < Link class="nav-link" to={"/feature/basic"}>Basic</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={'/feature/advanced'}>Advanced</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={'/feature/premium'}>Premium</Link>
        </li>
      </ul>
      {/* nav section end */}
      
      {/* helps in rendering the child components in the parent */}
      <Outlet/>
    </div>
  )
}

export default Features
