
import Card from "./Card"
import SpareParts from "./SpareParts"

// These Parent
function ProductList(){
    let HandleCart=(r)=>{
        alert("added to cart",r)
    }
    return(
        <>
        <div>
        <Card name="Tata Nexon" price="Rs7.32 - 14.05 Lakh"/>
        <Card name="Mahindra XEV 9e" price="Rs7.32 - 14.05 Lakh"/>
        <Card name="MG Windsor EV" price="Rs7.32 - 14.05 Lakh"/>
        </div>
        {/* spare parts */}
         <div>
            <SpareParts
             type="wheel"  // string
             price={1000}  // number
           
             features={{steel:"iron",strength:"100kg"}} // object
             location={["AP","TS","KA"]} // array
             addtocart={HandleCart}
              />
                <SpareParts
             type="TIER"  // string
             price={1000}  // number
             isavaible={""} // Boolean
             features={{steel:"iron",strength:"100kg"}} // object
             location={["AP","TS","KA"]} // array
             addtocart={HandleCart}
              />
         </div>
        </>
    )
}

export default ProductList