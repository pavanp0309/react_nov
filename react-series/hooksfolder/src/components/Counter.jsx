



import React,{useState} from 'react'

const Counter = () => {
 const [name,setName]=useState("a")
 const handleChange=()=>{
  // setName(name+"b") // a+b
  // setName(name+"c") //ab+c
  setName((prev)=>prev+"b")
  setName((prev)=>prev+"c")
 }
  return (
    <div>
      <h1>{name}</h1>
      <button className='btn btn-priamry' onClick={handleChange}>increment</button>
    </div>
  )
}

export default Counter
