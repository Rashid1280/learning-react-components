import "./Card.css"
const Card =({image, title, location, type,area, price}) =>{
  return(
    <>
    <div className="card">
      <img className="card-img" src={image} alt={title} />
      <div  className="card-body">
        <h1 className="card-title">{title}</h1>
        <p className="card-location">{location}</p>
        <p className="card-location">{type}</p>
        <p className="card-location">{area}</p>
        <p className="card-price">{price}</p>
      </div>
    </div>
    </>
  )
}
export default Card;