
import { useData } from "./store/Store"


const Button = (props) => {
  let {play,setPlay}=useData()

    console.log("button is Rendering")
  return (
    <div>
      <button onClick={()=>setPlay(!play)}>{play?"stop":"play"}</button>
    </div>
  )
}

export default Button
