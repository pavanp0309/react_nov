import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { BasicData } from '../data/Features'

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
    <div className='container p-5 '>

        <h1 className='card-title'>{title}</h1>
        <p className='card-text'>{description}</p>
        <button className='btn btn-danger' onClick={()=>navigate("/")}>Home</button>
     
    </div>
  )
}

export default FeatureDetails
