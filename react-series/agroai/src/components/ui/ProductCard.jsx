import React from 'react'

const ProductCard = (props) => {
    const {title="no-title",description,price ,category,rating="2.5",stock=0,images=[]}=props
  return (
    <div className='col-12 col-sm-6 col-md-4 col-lg-4 '>
        <div className="card p-2 rounded shadow">
          <img src={images[0]} alt={title}  className='img-fluid ' height={"60px"}/>
          <h3 className='card-title'>{title}</h3>
          <p className='card-text'>{description.slice(0,50)}...</p>
          <p className='card-text'>{price}</p>
          <p className='card-text my-3'>
            <span className='fw-bold bg-success p-1  rounded'>category:</span>{category}
            <span className='fw-bold bg-warning p-1 ms-2 rounded'>Rating:</span>{rating}
          </p>
          <button className='btn btn-outline-danger '>addtocart</button>
        </div>
      
    </div>
  )
}

export default ProductCard
