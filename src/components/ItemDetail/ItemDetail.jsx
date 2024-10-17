import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({id, name, price, img, description, stock}) => {
  const { addToCart } = useContext(CartContext);
  const handleAddToCart = () => {
    addToCart(1); // Aquí añadimos 1 producto al carrito
  };
  return (
      <div className="container d-flex justify-content-center text-center">
        <div key={id} className="card align-items-center text-center p-3 my-3" style={{width: 600, height:690}}>
          <img src={img} style={{width: 350, height:350}} alt={name} className="card-img-top mt-5"/>
          <div className="card-body fw-bold mt-5">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description}</p>
              <h2 className="card-text text-danger">$ {price}</h2>
              <h3 className="card-text text-dark">Quedan: {stock} unidades disponibles!</h3>
              <ItemCount stock={stock}/>
              <button onClick={handleAddToCart} className="btn btn-primary">
                Añadir al carrito
              </button>
              <Link to="" className="btn btn-primary">
              Ver detalle
              </Link>
          </div>
        </div>
      </div>
  )
}

export default ItemDetail