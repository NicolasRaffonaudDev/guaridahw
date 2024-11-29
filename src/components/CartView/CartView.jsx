import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const CartView = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container py-5">
      <h2 className="text-center text-primary mb-4">Carrito de Compras</h2>
      <div className="row g-3">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div className="col-md-12" key={item.id}>
              <CartItem {...item} />
            </div>
          ))
        ) : (
          <p className="text-center text-muted">El carrito está vacío.</p>
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="text-end mt-4">
          <h3 className="text-success">Total General: ${total}</h3>
          <div className="d-flex justify-content-end gap-2 mt-2">
            <button className="btn btn-outline-danger" onClick={clearCart}>
              Vaciar carrito
            </button>
            <Link to="/checkout" className="btn btn-primary">
              Generar Orden
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartView;
