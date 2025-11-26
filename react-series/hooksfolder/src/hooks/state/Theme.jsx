import React,{useState} from 'react'

const Theme = () => {
    const [isDark,setIsDark]=useState(true)

  return (
    <div className={`${isDark?"bg-dark text-white":"bg-white text-dark"}`} height={'1000px'}>
        <p>{isDark?"dark":"light"}</p>
      <button 
       className={`btn border border-info rounded-circle ${isDark?"btn-white":"btn-dark"}` }
       height="50px" 
       width="50px"  
       onClick={()=>setIsDark(!isDark)}>
        {isDark?"🌞":"🌙"}
        </button>
    </div>
  )
}

export default Theme
