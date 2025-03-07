import { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { toastConfig } from '../utils/toastConfig';

// Creamos el contexto
export const CartContext = createContext();

// Funciones de notificación
const showSuccessToast = (message) => toast.success(message, toastConfig.success);
const showInfoToast = (message) => toast.info(message, toastConfig.info);
const showSuccessAlert = (message) => toast.success(message, toastConfig.successAlert);

// Creamos el proveedor del contexto
export const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    const updateExistingItem = (prevItems, item, quantityToAdd) => {
        return prevItems.map((cartItem) =>
            cartItem.id === item.id ? { ...cartItem, quantity: quantityToAdd } : cartItem
        );
    };

    const addNewItem = (prevItems, item, quantityToAdd) => {
        return [...prevItems, { ...item, quantity: quantityToAdd, img: item.img }];
    };

    const addToCart = (item) => {
        if (!item || !item.id || !item.name) {
          showInfoToast("El producto no es válido.");
          return;
        }
      
        // Aseguramos que quantity sea un número
        item.quantity = Number(item.quantity) || 1;
      
        setCartItems((prevItems) => {
          const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
      
          if (existingItem) {
            const newQuantity = existingItem.quantity + item.quantity;
            const quantityToAdd = Math.min(newQuantity, item.stock || Infinity);
      
            if (quantityToAdd > existingItem.quantity) {
              const updatedItems = updateExistingItem(prevItems, item, quantityToAdd);
              setCartCount((prevCount) => prevCount + (quantityToAdd - existingItem.quantity));
              showSuccessToast(`¡Se agregaron ${item.quantity} unidades de ${item.name} al carrito!`); // Notificación más descriptiva
              return updatedItems;
            } else {
              showInfoToast(`Ya alcanzaste el stock máximo de ${item.name} (${item.stock} unidades).`); // Notificación más descriptiva
              return prevItems;
            }
          } else {
            const quantityToAdd = Math.min(item.quantity, item.stock || Infinity);
            setCartCount((prevCount) => prevCount + quantityToAdd);
            showSuccessToast(`¡Se agregaron ${quantityToAdd} unidades de ${item.name} al carrito!`); // Notificación más descriptiva
            return addNewItem(prevItems, item, quantityToAdd);
          }
        });
      };
      
      const updateCartItem = (itemId, action) => {
        setCartItems((prevItems) => {
          const itemToUpdate = prevItems.find((item) => item.id === itemId); // Encontramos el producto a actualizar
      
          const updatedItems = prevItems
            .map((item) => {
              if (item.id === itemId) {
                if (action === "add") {
                  return { ...item, quantity: Math.min(item.quantity + 1, item.stock) }; // Aumenta la cantidad en 1
                } else if (action === "remove") {
                  return { ...item, quantity: Math.max(item.quantity - 1, 0) }; // Reduce la cantidad en 1
                } else if (action === "delete") {
                  return null; // Elimina el producto
                }
              }
              return item;
            })
            .filter(Boolean); // Elimina los elementos null
      
          // Actualiza el contador del carrito
          setCartCount((prevCount) => {
            if (action === "add") {
              return prevCount + 1; // Aumenta el contador en 1
            } else if (action === "remove") {
              return Math.max(prevCount - 1, 0); // Reduce el contador en 1
            } else if (action === "delete") {
              return prevCount - (itemToUpdate?.quantity || 0); // Resta la cantidad del producto eliminado
            }
            return prevCount;
          });
      
          return updatedItems;
        });
      
        // Muestra una notificación más descriptiva según la acción
        const itemName = cartItems.find((item) => item.id === itemId)?.name || "el producto";
        if (action === "add") {
          showSuccessToast(`¡Se agregó 1 unidad de ${itemName} al carrito!`);
        } else if (action === "remove") {
          showInfoToast(`¡Se eliminó 1 unidad de ${itemName} del carrito!`);
        } else if (action === "delete") {
          showInfoToast(`¡${itemName} fue eliminado completamente del carrito!`);
        }
      };

    const clearCart = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: 'Se eliminarán todos los productos del carrito.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, vaciar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                setCartItems([]);
                setCartCount(0);
                showSuccessAlert('¡Carrito vaciado con éxito!');
            }
        });
    };

    const calculateTotal = () => {
        return cartItems.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 0), 0);
    };

    return (
        <CartContext.Provider value={{ cartCount, cartItems, addToCart, updateCartItem, clearCart, calculateTotal }}>
            {children}
        </CartContext.Provider>
    );
};