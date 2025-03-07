import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import ItemCount from "../ItemCount/ItemCount";
import ProductCard from "../ProductCard/ProductCard";

const ItemDetail = ({ id, name, price, img, description, stock }) => {
  const [count, setCount] = useState(1);
  const { handleAddToCart } = useCart();

  // Reiniciar count a 1 cuando cambie el producto
  useEffect(() => {
    setCount(1);
  }, [id]);

  // Asegurarse de que count no sea mayor que el stock
  useEffect(() => {
    if (count > stock) {
      setCount(stock);
    }
  }, [count, stock]);

  const product = { id, name, price, img, description };

  return (
    <div className="container d-flex justify-content-center text-center p-5">
      <div key={id} className="card align-items-center text-center p-3 my-3" style={{ width: 600, height: 850 }}>
        <div className="card-body fw-bold mt-5">
          <ProductCard product={product} />

          <h3 className="card-text text-dark">Quedan: {stock} unidades disponibles!</h3>
          <ItemCount stock={stock} onCountChange={setCount} />
          <div className="container p-4 d-flex flex-column justify-content-center">
            <div className="row mx-2 p-2">
              <button
                onClick={() => handleAddToCart(product, count, stock)}
                className="btn btn-primary d-flex align-items-center decorative"
              >
                <i className="fas fa-shopping-cart me-4"></i>
                Añadir al carrito
              </button>
            </div>
            <div className="row mx-2 p-2">
              <Link to="/cart" className="btn btn-primary d-flex align-items-center decorative">
                <i className="fas fa-eye me-4"></i>
                Ver Carrito
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;