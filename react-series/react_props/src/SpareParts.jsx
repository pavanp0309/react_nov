
function SpareParts(props){
    console.log(props)

    let {type,price,isavaible,features,location,addtocart}=props

    const {steel}=features

    return (
        <>
        <div className={`card ${isavaible?"bg-success":"bg-secondary"} p-5 `}>
            <p className="card-text">{type}</p>
            <p className="card-text">{price}</p>
            <p>{steel}</p>
            {/* Looping the array */}
            <p>{location.map(ele=>ele)}</p>
            {/* <button onClick={addtocart}>Addtocard</button> */}
            <button onClick={()=>addtocart("hi u added")}>Addtocard</button>
        </div>
        </>
    )
}
export default SpareParts