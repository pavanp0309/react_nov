// These Child Component
function Card(props) {

  // without destructuring
  // console.log(props) //{name: 'Tata Nexon', price: 'Rs7.32 - 14.05 Lakh'}
  // console.log(props.name,props.price)

  // with destructuring
  const {name,price}=props || {}
  console.log(name,price)
  return (
<>
    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{price}</p>
        <a href="#" className="btn btn-primary">
          View Offers
        </a>
      </div>
    </div>
    
</>
  );
}

export default Card;
