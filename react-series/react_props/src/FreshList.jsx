
import FreshCard from "./FreshCard"
import Products from "./data/ProductsData"

function FreshList(){
    return ( 
        <>
       <div className="container">
        <div className="row gy-3">
            {
            Products.map((ele,index)=><FreshCard key={index} {...ele}/>)
            }
        </div>
       </div>
        </>
    )
}
export default FreshList