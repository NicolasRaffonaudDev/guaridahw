import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({id, name, price, img, description, stock}) => {
  const { addToCart } = useContext(CartContext);
  const [count, setCount] = useState(1)
  const handleAddToCart = () => {
    const item = {
        id,
        quantity: count
    };
    addToCart(item); // Añadimos el objeto del producto con su cantidad
}
  return (
      <div className="container d-flex justify-content-center text-center p-5">
        <div key={id} className="card align-items-center text-center p-3 my-3" style={{width: 600, height:850}}>
          <img src={img} style={{width: 350, height:350}} alt={name} className="card-img-top mt-5"/>
          <div className="card-body fw-bold mt-5">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description}</p>
              <h2 className="card-text text-danger">$ {price}</h2>
              <h3 className="card-text text-dark">Quedan: {stock} unidades disponibles!</h3>
              <ItemCount stock={stock} onCountChange={setCount}/>
              <div className="container p-4 d-flex flex-column justify-content-center">
                <div className="row mx-2 p-2">
                  <button onClick={handleAddToCart} className="btn btn-primary d-flex align-items-center">
                    <i className="fas fa-shopping-cart me-4"></i>
                    Añadir al carrito
                  </button>
                </div>
                <div className="row mx-2 p-2">
                  <Link to="/cart" className="btn btn-primary d-flex align-items-center">
                    <i className="fas fa-eye me-4"></i>
                    Ver Carrito
                  </Link>
                </div>
              </div>
          </div>
        </div>
      </div>
  )
}

export default ItemDetail