import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import "./CartItem.css"

const CartItem = ({ id, name, quantity, price, stock, img }) => {
  const { addToCart, updateCartItem } = useContext(CartContext);

  return (
    <div className="card mb-3 shadow-sm">
      <div className="row g-0">
        <div className="col-md-2 d-flex align-items-center justify-content-center">
          <img
            src={img}
            alt={name}
            className="img-fluid rounded-start"
          />
        </div>
        <div className="col-md-10">
          <div className="card-body d-flex align-items-center justify-content-between">
            <div>
              <h5 className="card-title">{name}</h5>
              <p className="card-text text-muted mb-1">Cantidad: {quantity}</p>
              <p className="card-text text-muted mb-1">Precio unitario: ${price}</p>
              <p className="fw-bold">Subtotal: ${price * quantity}</p>
            </div>
            <div className="d-flex align-items-center gap-2">
              <button
                className="btn btn-sm btn-outline-primary"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Agregar una unidad al carrito"
                onClick={() => {
                  if (quantity < stock) {
                    addToCart({ id, name, price, quantity: 1, stock });
                  } else {
                    toast.info(`No puedes agregar más de ${stock} unidades.`, {
                      position: "bottom-left",
                      autoClose: 2000,
                    });
                  }
                }}
              >
                <FaPlus />
              </button>
              <button
                className="btn btn-sm btn-outline-warning"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Quitar una unidad al carrito"
                onClick={() => updateCartItem(id, "remove")}
              >
                <FaMinus />
              </button>
              <button
                className="btn btn-sm btn-outline-danger"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Eliminar producto del carrito"
                onClick={() => updateCartItem(id, "delete")}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
