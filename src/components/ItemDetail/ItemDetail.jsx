import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import ItemCount from "../ItemCount/ItemCount";
import ProductCard from "../ProductCard/ProductCard";

const ItemDetail = ({ id, name, price, img, description, stock }) => {
  const [count, setCount] = useState(1);
  const { handleAddToCart, cartCount } = useCart();

  // Reiniciar count a 1 cuando cambie el producto
  useEffect(() => {
    setCount(1);
  }, [id]);


  const handleAddToCartClick = () => {
    handleAddToCart({ id, name, price, img }, count, stock);
  };

  return (
    <div className="container d-flex justify-content-center text-center mb-5">
      <div key={id} className="card p-3" style={{ maxWidth: "800px" }}>
        <div className="card-body">
          <div className="card-img d-flex justify-content-center">
            <ProductCard product={{ id, name, price, img, description }} />
          </div>
          <h3 className="card-text text-dark">Quedan: {stock} unidades disponibles!</h3>
          <ItemCount stock={stock} onCountChange={setCount} initial={1}/>
          <div className="d-flex align-items-center justify-content-center gap-1 mt-2">
            <FaShoppingCart size={24} className="text-warning" />
            <span className="badge bg-danger rounded-pill">{cartCount}</span>
          </div>
          <div className="container p-4 d-flex flex-column justify-content-center">
            <div className="row mx-2 p-2">
              <button
                onClick={handleAddToCartClick}
                className={`btn btn-primary d-flex align-items-center decorative ${stock === 0 ? "disabled" : ""}`}
                disabled={stock === 0} // desabilita si no hay stock
              >
                <i className="fas fa-shopping-cart me-4"></i>
                {stock === 0 ? "Sin Stock" : "Añadir al carrito"}
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