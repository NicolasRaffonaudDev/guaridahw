// CartContext.js
import { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

// Creamos el contexto
export const CartContext = createContext();
// Creamos el proveedor del contexto
export const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems((prevItems) => {
            // Normalizamos las cantidades existentes en el carrito
            const normalizedItems = prevItems.map(cartItem => ({
                ...cartItem,
                quantity: Number(cartItem.quantity) || 0,
            }));
    
            // Verificamos si el producto ya existe en el carrito
            const existingItem = normalizedItems.find(cartItem => cartItem.id === item.id);
    
            if (existingItem) {
                // Calculamos la cantidad actualizada, respetando el stock disponible
                const existingQuantity = Number(existingItem.quantity);
                const quantityToAdd = Math.min(existingQuantity + (item.quantity || 0), item.stock || Infinity);
                
                // Validamos si la nueva cantidad supera el stock
                if (quantityToAdd > existingQuantity) {
                    const updatedItems = normalizedItems.map(cartItem =>
                        cartItem.id === item.id
                            ? { ...cartItem, quantity: quantityToAdd }
                            : cartItem
                    );
    
                    // Actualizamos el contador global según el incremento
                    setCartCount(prevCount => prevCount + (quantityToAdd - existingQuantity));
    
                    // Notificación exitosa
                    toast.success(`¡${item.name} añadido al carrito!`, {
                        position: "bottom-left",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    });
    
                    return updatedItems;
                } else {
                    // Si ya se alcanzó el límite de stock
                    toast.info(`Ya alcanzaste el stock máximo de ${item.name}`, {
                        position: "bottom-left",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    });
                    return normalizedItems;
                }
            } else {
                // Si no existe, lo agregamos respetando el stock
                const quantityToAdd = Math.min(item.quantity, item.stock || Infinity);
                setCartCount(prevCount => prevCount + quantityToAdd);
    
                // Notificación exitosa
                toast.success(`¡${item.name} añadido al carrito!`, {
                    position: "bottom-left",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                return [...normalizedItems, { ...item, quantity: quantityToAdd, img: item.img }];
            }
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems(prevItems => {
            const updatedItems = prevItems.map(item =>
                item.id === itemId ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
            );
            setCartCount(prevCount => Math.max(prevCount - 1, 0));
            return updatedItems;
        });
        toast.info('Producto eliminado del carrito', {
            position: "bottom-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
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
                toast.success('¡Carrito vaciado con éxito!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    style: {
                        backgroundColor: '#4caf50',
                        color: '#fff',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                    },
                });
            }
        });
    }

    return (
        <CartContext.Provider value={{ cartCount, cartItems, addToCart, removeFromCart, deleteFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
