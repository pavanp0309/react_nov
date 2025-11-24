import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { BasicData,PremiumData,AdvancedData } from '../data/Features'

const FeatureDetails = () => {
    const {fid}=useParams()// access the dynamic id ,title from the Url
    console.log(typeof parseInt(fid))

    // checks the incoming id from url is equal to the Id in the db and return the element if it matches
    let aidata=BasicData.find(ele=>ele.id==fid) 
    console.log(aidata)

    // destructuring
    const {id,title,features,rating,description,accuracy,category}=aidata
    
    // programatic Routing
    let navigate=useNavigate()


 return (
  <div className="container p-4">

    <div className="card shadow-sm border-0 p-4">

      {/* Title */}
      <h1 className="card-title fw-bold mb-3 text-primary">{title}</h1>

      {/* Meta info */}
      <div className="mb-3">
        <span className="badge bg-secondary me-2 text-capitalize">{category}</span>
        <span className="badge bg-info text-dark me-2">Rating: {rating}⭐</span>
        <span className="badge bg-warning text-dark">Accuracy: {accuracy}</span>
      </div>

      <hr />

      {/* Description */}
      <p className="card-text fs-5 mb-4">{description}</p>

      {/* Features Section */}
      <div className="mb-4">
        <h5 className="fw-semibold mb-2">Key Features</h5>
        <p className="text-muted fs-6">{features}</p>
      </div>

      <hr />

      {/* Buttons */}
      <div className="d-flex gap-3">
        <button
          className="btn btn-outline-secondary px-4"
          onClick={() => navigate(-1)}
        >
          Back
        </button>

        <button
          className="btn btn-primary px-4"
          onClick={() => navigate("/")}
        >
          Home
        </button>

        <button
          className="btn btn-success px-4 ms-auto"
        >
          Try Now
        </button>
      </div>

    </div>

  </div>
);

}

export default FeatureDetails
