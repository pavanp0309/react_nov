import React from 'react'
import products from '../data/products'
import ProductCard from '../components/ui/ProductCard'
import { Link } from 'react-router-dom'

const Shop = () => {
    // console.log(products.products.map(ele=>ele))
  let data=Object.values(products) || [] 

  return (
    <>
    {/* navigation for filters */}
    <div className="container d-flex justify-content-between align-items-center">
         <ul class="nav nav-pills p-2 border fs-5  my-3 ">
        <li class="nav-item">
          < Link class="nav-link" to={"/shop"}>All</Link>
        </li>
        <li class="nav-item">
          < Link class="nav-link" to={"/shop?c=beauty"}>Beauty</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={'/shop?c=fragrances'}>fragrances</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={'/shop?c=furniture'}>furniture</Link>
        </li>
         <li class="nav-item">
          <Link class="nav-link" to={'/shop?c=groceries'}>groceries</Link>
        </li>
      </ul>
    <ul class="nav nav-pills p-2 border  my-3 ">
        <li class="nav-item">
          < Link class="nav-link fw-bold fs-5" to={""}>LowtoHigh</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link fw-bold fs-5" to={''}>HightoLow</Link>
        </li>
      </ul>
    </div>
    {/* products */}
    <div className='container p-5 my-3'>
      <div className="row gy-3">
        {data[0]?.map((ele,index)=><ProductCard key={ele.id}  {...ele}/>)}
      </div>
    </div>
    </>
  )
}

export default Shop
