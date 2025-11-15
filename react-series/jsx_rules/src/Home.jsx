


// function HomePage(){
//     return (
//     <div>
//     <h1>hello</h1>
//     <h1>hello</h1>
//     </div>
  
// )
   
// }





// function HomePage(){
//     return (
//     <>
//     <h1>hello</h1>
//     <h1>hello</h1>
//     </>
  
// )
   
// }

import React from "react"

function HomePage(){
    return (
    <React.Fragment>
    <h1>hello</h1>
    <h1>hello</h1>
    {/* JSX element 'img' has no corresponding closing tag */}
    <img src="" alt="" />
   
    <input type="text" />
    <h3 class="c1"></h3>
     <label htmlFor=""></label>
    {/* he `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX. */}
    {/* <h4 style=''>Hi hello</h4> */}

    {/* <h4 style={{backgroundColor:"orange"}}>Hi hello</h4> */}

    {/* loops or conditions or function shouldnot be wriiten directly inside the Jsx but jsx can be wriiten inside loops or coditions or function */}
    <h1>
       {1+1}
    </h1>

     {/* <h1>
       {if(true){}}
    </h1> */}

    <h1>{(true)?"hi":"bye"}</h1>
    </React.Fragment>
  
)
   
}

export default HomePage