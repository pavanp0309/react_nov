import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
    const {id,title,features,rating,description,accuracy,category}=props
  return (
    <div className=' col-12 col-sm-6 col-md-4 col-lg-4 '>
      {/* card */}
      <Link to={`/feature/basic/${id}`}>
      <div className="card border border-primary rounded p-3 ">
        <h4 className='card-title fs-3'>{title}</h4>
        <p className='card-text fs-5'>{rating}⭐</p>
        <p className='card-text fs-6 text-secondary text-capitalize'>{features}</p>
        <button className='btn btn-outline-success fw-bold text-capitalize'>Try now</button>
      </div>
      </Link>
      
    </div>
  )
}

export default Card
