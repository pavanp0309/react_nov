
import Home from "./Home"


function App(){
  let uistyle={
    color:"white",
    textTransform:"uppercase"
  }
  let color="red"
  return (
    <>
    <div style={{color:color,backgroundColor:"yellow",padding:"10px",textAlign:"center",}}>
      {/* 2nd type of format inline styles */}
      <h1 style={uistyle}>welcome STYLING IN REACT</h1>
          {/* 3rd type of format internal styles */}
      <h1 style={{color:color,textTransform:uistyle.textTransform}}>welcome STYLING IN REACT</h1>
    </div>
     {/* home Component */}
      <Home/>  {/* calling the component */}
      <h1 className="c1 u1">app js</h1>
      <h3 className="bg-primary">bootstrap style</h3>
    </>
  )
}

export default App