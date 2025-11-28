import { useEffect, useState } from 'react'

const Features = (props) => {
    const [count,setCount]=useState(0)

    // 1.useEffect without dependency array 
    useEffect(()=>{
    console.log("useffect-without dependency array ")
  
    })

    // 2.useEffect with Dependency empty array 
    useEffect(()=>{
    console.log("useffect-empty array ")
  
    },[])

    // 3.useEffect with dependency array
      useEffect(()=>{
    console.log("useffect-with array value")
  
    },[count])
  return (
    <div>
      <h1>{props.data}</h1>
      <button onClick={()=>setCount(count+1)}>increment</button>
    </div>
  )
}

export default Features
