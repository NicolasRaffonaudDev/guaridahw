// CartContext.js

import { createContext, useState } from 'react';

// Creamos el contexto
export const CartContext = createContext();

// Creamos el proveedor del contexto
export const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(cartItem => cartItem.id === item.id);

            if (existingItem) {
                // Calculamos la nueva cantidad, respetando el stock disponible
                const newQuantity = Math.min(existingItem.quantity + item.quantity, item.stock);
                const updatedItems = prevItems.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: newQuantity }
                        : cartItem
                );

                // Actualizamos cartCount según la diferencia de cantidad
                const addedQuantity = newQuantity - existingItem.quantity;
                setCartCount(prevCount => prevCount + addedQuantity);

                return updatedItems;
            } else {
                // Si no existe, lo agregamos respetando el stock
                const quantityToAdd = Math.min(item.quantity, item.stock);
                setCartCount(prevCount => prevCount + quantityToAdd);
                return [...prevItems, { ...item, quantity: quantityToAdd }];
            }
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems(prevItems => {
            const updatedItems = prevItems.map(item =>
                item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
            ).filter(item => item.quantity > 0);

            setCartCount(prevCount => prevCount - 1);
            return updatedItems;
        });
    };

    const deleteFromCart = (itemId) => {
        const itemToDelete = cartItems.find(item => item.id === itemId);
        if (itemToDelete) {
            setCartCount(prevCount => prevCount - itemToDelete.quantity);
        }
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    };

    const clearCart = () => {
        setCartItems([]);
        setCartCount(0);
    }

    return (
        <CartContext.Provider value={{ cartCount, cartItems, addToCart, removeFromCart, deleteFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
