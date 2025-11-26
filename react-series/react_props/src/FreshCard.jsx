function FreshCard(props){
  const {title,price,rating,images,tags,description,category}=props

    return (
    <>
     <div className="col-sm-12 col-lg-3 col-md-3">
           <div class="card shadow">
  <img src={images[0]} class="card-img-top" alt="..." height={"150px"}/>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{description.slice(0,100)}...</p>
    <p class="card-text">{price}</p>
    <p class="card-text "><span className="p-1 border bg-success text-white rounded">{tags.map(ele=>ele)}</span></p>
     <button className="btn btn-danger" onClick={()=>alert(`add item  to cart`)}>Addtocart</button>
  </div>
</div>
     </div>
    </>
    )
}
export default FreshCard