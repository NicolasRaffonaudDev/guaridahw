import { Link } from "react-router-dom"

const ItemDetail = ({id, name, price, img, description}) => {
  return (
      <div className="container d-flex justify-content-center text-center">
        <div key={id} className="card align-items-center text-center p-3 my-3" style={{width: 600, height:690}}>
          <img src={img} style={{width: 350, height:350}} alt={name} className="card-img-top mt-5"/>
          <div className="card-body fw-bold mt-5">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description}</p>
              <h2 className="card-text text-danger">$ {price}</h2>
              <Link to="" className="btn btn-primary">
              Ver detalle
              </Link>
          </div>
        </div>
      </div>
  )
}

export default ItemDetail