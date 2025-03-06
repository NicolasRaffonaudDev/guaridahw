// CartContext.js
import { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { toastConfig } from '../utils/toastConfig';

// Creamos el contexto
export const CartContext = createContext();
// Creamos el proveedor del contexto
export const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems((prevItems) => {
            // Verificamos si el producto ya existe en el carrito
            const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);

            if (existingItem) {
                // Calculamos la cantidad actualizada, respetando el stock disponible
                const existingQuantity = Number(existingItem.quantity);
                const quantityToAdd = Math.min(existingQuantity + (item.quantity || 0), item.stock || Infinity);

                // Validamos si la nueva cantidad supera el stock
                if (quantityToAdd > existingQuantity) {
                    const updatedItems = prevItems.map((cartItem) =>
                        cartItem.id === item.id ? { ...cartItem, quantity: quantityToAdd } : cartItem
                    );

                    // Actualizamos el contador global según el incremento
                    setCartCount(prevCount => prevCount + (quantityToAdd - existingQuantity));

                    // Notificación exitosa
                    toast.success(`¡${item.name} añadido al carrito!`, toastConfig.success);
                    return updatedItems;

                } else {
                    // Si ya se alcanzó el límite de stock
                    toast.info(`Ya alcanzaste el stock máximo de ${item.name}`, toastConfig.info);
                    return prevItems;
                }
            } else {
                // Si no existe, lo agregamos respetando el stock
                const quantityToAdd = Math.min(item.quantity, item.stock || Infinity);
                setCartCount((prevCount) => prevCount + quantityToAdd);

                // Notificación exitosa
                toast.success(`¡${item.name} añadido al carrito!`, toastConfig.success
                );
                return [...prevItems, {
                    ...item, quantity: quantityToAdd, img: item.img
                }];
            }
        });
    };

    const updateCartItem = (itemId, action) => {
        setCartItems((prevItems) => {
            const updatedItems = prevItems.map((item) => {
                if (item.id === itemId) {
                    if (action === "remove") {
                        return {
                            ...item, quantity: Math.max(item.quantity - 1, 0)
                        };
                    } else if (action === "delete") {
                        return null;
                    }
                }
                return item;
            })
                .filter(Boolean); // Elimina los elementos null

            setCartCount((prevCount) =>
                action === "remove" ? Math.max(prevCount - 1, 0) : prevCount - 1
            );
            return updatedItems;
        });

        toast.info(
            action === "remove"
                ? "Producto eliminado del carrito"
                : "Producto eliminado completamente"
            , toastConfig.info
        );
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

                // Notificación personalizada con Toastify
                toast.success('¡Carrito vaciado con éxito!', toastConfig.successAlert);
            }
        });
    }

    const calculateTotal = () => {
        return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
      };

    return (
        <CartContext.Provider value={{ cartCount, cartItems, addToCart, updateCartItem, clearCart, calculateTotal }}>
            {children}
        </CartContext.Provider>
    );
};
