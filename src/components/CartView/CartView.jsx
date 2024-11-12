import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';

const CartView = () => {
  const { cartItems } = useContext(CartContext);
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>
      <div>
        {cartItems.length > 0 ? (
          cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))
        ) : (
          <p className="text-center text-gray-500">El carrito está vacío.</p>
        )}
      </div>
      <div className="mt-6 text-right">
        <h3 className="text-xl font-bold">Total General: ${total}</h3>
      </div>
    </div>
  );
};

export default CartView;
