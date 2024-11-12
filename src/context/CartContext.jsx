import { createContext, useState } from 'react';

// Creamos el contexto
export const CartContext = createContext();

// Creamos el proveedor del contexto
export const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

        if (existingItem) {
            // Si ya existe, sumamos la cantidad
            setCartItems(prevItems =>
                prevItems.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                        : cartItem
                )
            );
        } else {
            // Si no existe, lo agregamos
            setCartItems(prevItems => [...prevItems, { ...item, quantity: item.quantity }]);
        }
        setCartCount(prevCount => prevCount + item.quantity); // Actualiza el contador total
    };

    const removeFromCart = (itemId) => {
        setCartItems(prevItems => prevItems.map(item =>
            item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        ).filter(item => item.quantity > 0));
        
        setCartCount(prevCount => prevCount - 1);
    };

    const deleteFromCart = (itemId) => {
        const itemToDelete = cartItems.find(item => item.id === itemId);
        if (itemToDelete) {
            setCartCount(prevCount => prevCount - itemToDelete.quantity);
        }
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    };

    return (
        <CartContext.Provider value={{ cartCount, cartItems, addToCart, removeFromCart, deleteFromCart }}>
            {children}
        </CartContext.Provider>
    );
};