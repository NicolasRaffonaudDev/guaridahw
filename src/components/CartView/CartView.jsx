import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";

const CartView = () => {
  const { cartItems, clearCart, calculateTotal } = useContext(CartContext);
  const { updateCartItem } = useCart(); // Obtenemos updateCartItem desde useCart
  const total = calculateTotal();

  return (
    <div className="container my-5 bg-white opacity-85 pb-3">
      <div className="row g-3">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div className="col-md-12" key={item.id}>
              {/* Pasamos updateCartItem como prop a CartItem */}
              <CartItem {...item} updateCartItem={updateCartItem} />
            </div>
          ))
        ) : (
          <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center">
            <FaShoppingCart className="text-muted mb-4" style={{ fontSize: "6rem" }} />
            <h3 className="text-muted">¡Tu carrito está vacío!</h3>
            <p className="text-muted">
              No tienes productos en el carrito. ¿Por qué no exploras nuestra tienda y encuentras algo interesante?
            </p>
            <Link to="/category" className="btn btn-primary mt-3">
              Ir a la tienda
            </Link>
          </div>
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="text-end mt-4">
          <h3 className="text-success">Total General: ${total.toFixed(2)}</h3>
          <div className="d-flex justify-content-end gap-2 mt-2">
            <button className="btn btn-outline-danger decorative" onClick={clearCart}>
              Vaciar carrito
            </button>
            <Link to="/checkout" className="btn btn-primary decorative">
              Generar Orden
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartView;