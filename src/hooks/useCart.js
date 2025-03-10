import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";

const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }

  // Función para manejar la adición de productos al carrito
  const handleAddToCart = (product, quantity, stock) => {
    if (quantity > stock) {
      toast.error(`Solo hay ${stock} unidades disponibles`);
      return
    }
    context.addToCart({
      ...product,
      quantity: quantity,
      stock: stock
    });
  };

  return {
    ...context,
    handleAddToCart
  };
};

export default useCart;