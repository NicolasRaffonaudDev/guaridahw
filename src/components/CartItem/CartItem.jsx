import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const CartItem = ({ id, name, quantity, price, stock }) => {
  console.log(quantity, price)
  const { addToCart, removeFromCart, deleteFromCart } = useContext(CartContext);

  return (
    <article className="flex items-center justify-between p-4 border-b">
      <section>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm">Cantidad: {quantity}</p>
        <p className="text-sm">Precio unitario: ${price}</p>
        <p className="font-bold">Total: ${price * quantity}</p>
      </section>
      <section className="flex gap-2">
        <button
          onClick={() => {
            if (quantity < stock) {
              addToCart({ id, name, price, quantity: 1, stock });
            } else {
              toast.info(`¡No puedes agregar más de ${stock} unidades de este producto!`, {
                position: "bottom-left",
                autoClose: 2000,
              });
            }
          }}
          className="btn btn-primary text-white rounded"
        >
          <i className="fas fa-shopping-cart me-4"></i>
          + agregar
        </button>
        <button onClick={() => removeFromCart(id)} className="btn btn-primary text-white rounded">- restar</button>
        <button onClick={() => deleteFromCart(id)} className="btn btn-primary text-white rounded">Eliminar Carrito</button>
        <Link className="btn btn-primary text-white rounded" to="/checkout">Generar Orden</Link>
      </section>
    </article>
  );
};

export default CartItem;
