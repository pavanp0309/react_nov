import React from 'react'
import { useGetProductsQuery } from './store/productReducer'

const App = () => {
  const {data,isLoading,isError}=useGetProductsQuery()
  return (
    <div className='container'>
      <div className="row">
        {
          data.map(ele=>(
            <div className="col-sm-12 col-md-4 col-lg-4">
              <p>{ele.title}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App
