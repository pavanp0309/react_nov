import { createContext,useState,useContext } from "react";

// step1: creating the store
export let DmartStore=createContext()
console.log(DmartStore) // consumer provider

// step2
const DmartProvider=({children})=>{
 const [play ,setPlay]=useState(false)
    return(
        // provides the values the child components 
        <DmartStore.Provider value={{play ,setPlay,name:"raju"}}>
            {children}
        </DmartStore.Provider>
    )
}

export default DmartProvider


// useKeyword 
// Custom Hook 
export let useData=()=>{
     let data=useContext(DmartStore)
  console.log(data)
  const {play,setPlay}=data
    return  {play,setPlay}
}