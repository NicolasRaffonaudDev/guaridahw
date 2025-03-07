import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const useCart = () => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (item, count, stock) => {
    if (count > stock) {
      alert(`La cantidad solicitada excede el stock disponible de ${stock} unidades.`);
      return;
    }

    const cartItem = {
      ...item,
      quantity: count,
    };
    addToCart(cartItem);
  };

  return { handleAddToCart };
};

export default useCart;