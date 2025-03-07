import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const useCart = () => {
  const { cartItems, addToCart, updateCartItem, clearCart, calculateTotal } = useContext(CartContext);

  // Función para manejar la adición de productos al carrito
  const handleAddToCart = (product, quantity, stock) => {
    const itemToAdd = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      stock: stock,
      img: product.img,
    };
    addToCart(itemToAdd); // Llama a addToCart con el objeto preparado
  };

  return { cartItems, addToCart, updateCartItem, clearCart, calculateTotal, handleAddToCart };
};

export default useCart;