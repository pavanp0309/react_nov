import React from 'react'
import products from '../data/products'
import ProductCard from '../components/ui/ProductCard'
import { Link,useLocation } from 'react-router-dom'

const Shop = () => {
    // console.log(products.products.map(ele=>ele))
  let data=Object.values(products) || [] 

  // gets all information of  a url
  let location=useLocation() //{pathname: '/shop', search: '?c=groceries', hash: '', state: null, key: 'epy1yket'}
  console.log(location)

  // used for perfoming action with Queryparams
  const queryparams= new URLSearchParams(location.search)
  const category=queryparams.get("c")
   console.log(category)// get the value of the query params

//  using the Ternary operator we are checking weather that category exist or not
  let filteredProducts=category?data[0]?.filter((prod)=>prod.category==category):data[0]

 const handlefilter=(val)=>{
  // console.log(val)

  //  if(val=="low"){
  //  queryparams.append("price","low")
  //  }
 }



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
          < button class="btn btn-outline-success fw-bold fs-5" onClick={()=>handlefilter()} >LowtoHigh</button>
        </li>
        <li class="nav-item">
          <button class="nav-link fw-bold btn btn-outline-info fs-5" onClick={()=>handlefilter("high")}  >HightoLow</button>
        </li>
      </ul>
    </div>
    {/* products */}
    <div className='container p-5 my-3'>
      <div className="row gy-3">
        {filteredProducts?.map((ele,index)=><ProductCard key={ele.id}  {...ele}/>)}
      </div>
    </div>
    </>
  )
}

export default Shop
