import { Link } from "react-router-dom"

const ItemDetail = ( {id, name, img, description, price} ) => {
  console.log({ id, name, img, description, price });
  return (
      <div className="container d-flex text-center">
        <div key={id} className="card align-items-center text-center p-3 my-3" style={{width: 300}}>
          <img src={img} style={{width: 200, height:200}} alt={name} className="card-img-top"/>
          <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description}</p>
              <h2 className="card-text">$ {price}</h2>
              <Link to="" className="btn btn-primary">
              Ver detalle
              </Link>
          </div>
        </div>
      </div>
  )
}

export default ItemDetail