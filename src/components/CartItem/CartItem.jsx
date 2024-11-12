import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartItem = ({ id, name, quantity, price }) => {
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
          <button onClick={() => addToCart({ id, name, price, quantity: 1 })} className="px-2 py-1 bg-green-500 text-white rounded">+</button>
          <button onClick={() => removeFromCart(id)} className="px-2 py-1 bg-yellow-500 text-white rounded">-</button>
          <button onClick={() => deleteFromCart(id)} className="px-2 py-1 bg-red-500 text-white rounded">Eliminar</button>
        </section>
    </article>
  );
};

export default CartItem;
