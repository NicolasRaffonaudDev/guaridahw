import { createContext, useCallback, useMemo, useState } from 'react';
import { showConfirmationDialog, showInfoToast, showSuccessAlert, showSuccessToast } from '../utils/notifications';

export const CartContext = createContext();

// Creamos el proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const updateExistingItem = useCallback((prevItems, item, quantityToAdd) => {
    return prevItems.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, quantity: quantityToAdd } : cartItem
    );
  }, []);

  const addNewItem = useCallback((prevItems, item, quantityToAdd) => {
    return [...prevItems, { ...item, quantity: quantityToAdd, img: item.img }];
  }, []);

  const addToCart = useCallback((item) => {
    if (!item?.id || typeof item?.stock !== 'number') { 
      showInfoToast("Datos del producto inválidos");
      return;
    }

    // Aseguramos que quantity sea un número
    const quantity = Math.max(Number(item.quantity) || 1, 1); // Asegurar mínimo 1

    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      
      // Caso: Producto ya existe en el carrito
      if (existingItem) {
        const newTotal = existingItem.quantity + quantity;
        
        // Validar contra el stock máximo
        if (newTotal > item.stock) {
          showInfoToast(`Stock máximo: ${item.stock} unidades`);
          return prevItems;
        }

        const updatedItems = prevItems.map(cartItem => 
          cartItem.id === item.id 
            ? { ...cartItem, quantity: newTotal } 
            : cartItem
        );
        
        setCartCount(prev => prev + quantity);
        showSuccessToast(`¡${quantity} unidad(es) de ${item.name} añadidas!`);
        return updatedItems;
      }
      
      // Caso: Nuevo producto
      if (quantity > item.stock) {
        showInfoToast(`Stock insuficiente: ${item.stock} disponibles`);
        return prevItems;
      }

      setCartCount(prev => prev + quantity);
      showSuccessToast(`¡${quantity} unidad(es) de ${item.name} añadidas!`);
      return [...prevItems, { ...item, quantity }];
    });
  }, [updateExistingItem, addNewItem]);

  const updateCartItem = useCallback((itemId, action) => {
    setCartItems((prevItems) => {
      const itemToUpdate = prevItems.find((item) => item.id === itemId); // Encontramos el producto a actualizar

      const updatedItems = prevItems
        .map((item) => {
          if (item.id !== itemId) return item;
          
          switch(action) {
            case "add": 
              return { ...item, quantity: Math.min(item.quantity + 1, item.stock) };
            case "remove": 
              return { ...item, quantity: Math.max(item.quantity - 1, 0) };
            case "delete": 
              return null;
            default: 
              return item;
        }})
        .filter(Boolean); // Elimina los elementos null

      // Actualiza el contador del carrito
      setCartCount((prevCount) => {
        switch(action) {
          case "add": return prevCount + 1;
          case "remove": return Math.max(prevCount - 1, 0);
          case "delete": return prevCount - (itemToUpdate?.quantity || 0);
          default: return prevCount;
        }
      });

      return updatedItems;
    }, []);

    // Muestra una notificación más descriptiva según la acción
    const itemName = cartItems.find((item) => item.id === itemId)?.name || "el producto";
    if (action === "add") {
      showSuccessToast(`¡Se agregó 1 unidad de ${itemName} al carrito!`);
    } else if (action === "remove") {
      showInfoToast(`¡Se eliminó 1 unidad de ${itemName} del carrito!`);
    } else if (action === "delete") {
      showInfoToast(`¡${itemName} fue eliminado completamente del carrito!`);
    }
  }, []);

  const clearCart = useCallback(() => {
    showConfirmationDialog(
      "¿Estás seguro?",
      "Se eliminarán todos los productos del carrito.",
      "Sí, vaciar",
      "Cancelar"
    ).then((result) => {
      if (result.isConfirmed) {
        setCartItems([]);
        setCartCount(0);
        showSuccessAlert('¡Carrito vaciado con éxito!');
      }
    });
  }, []);

  const calculateTotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 0), 0);
  }, [cartItems]);

  const contextValue = useMemo(() => ({
    cartCount,
    cartItems,
    addToCart,
    updateCartItem,
    clearCart,
    calculateTotal // <-- Es un valor, no función
  }), [
    cartCount, 
    cartItems, 
    addToCart, 
    updateCartItem, 
    clearCart, 
    calculateTotal // Solo cambia cuando cartItems cambie
  ]);

  return (
    <CartContext.Provider value={ contextValue }>
      {children}
    </CartContext.Provider>
  );
};