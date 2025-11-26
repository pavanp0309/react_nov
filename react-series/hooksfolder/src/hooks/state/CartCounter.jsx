import React,{useState} from 'react'

const CartCounter = () => {
    const [count,setCount]=useState(0) //number as initialvalue 
    // initialvalue: 0 count:0 setCount:fn to update count
    // function to handle counter
    const handleIncrement=()=>setCount(count+1)
    const handleDecrement=()=>{
        if(count<0){
        alert("min val is reached")
        }else{
            setCount(count-1)
        }
    }
    const handleReset=()=>setCount(0)

  return (
    <div className='card mx-5 p-4 my-5 shadow'>
      <h1 className='text-center display-3 fw-bold'>{count}</h1>
       <div className="card-body d-flex justify-content-center">
           <button className='btn btn-success' onClick={()=>handleIncrement()}>increment</button>
           <button className='btn btn-warning mx-2' onClick={handleDecrement}>{count<=0?"❌":"-"}</button>
           <button className='btn btn-danger' onClick={()=>setCount(0)}>reset</button>
       </div>
    </div>
  )
}

export default CartCounter
