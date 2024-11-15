import { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { db } from '../../services/firebase';
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore';
import { toast } from 'react-toastify';

const Checkout = () => {
    const { cartItems, cartCount, clearCart } = useCart();
    const [buyer, setBuyer] = useState({ firstName: '', lastName: '', phone: '', address: '' });
    const [loading, setLoading] = useState(false);
    const [orderCreated, setOrderCreated] = useState(false);

    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBuyer(prev => ({ ...prev, [name]: value }));
    };

    const createOrder = async () => {
        setLoading(true);
        try {
            const objOrder = {
                buyer,
                items: cartItems,
                totalQuantity: cartCount,
                total,
                date: new Date()
            };

            const ids = cartItems.map(item => item.id);
            const productRef = collection(db, 'products');
            const productsFromFirestore = await getDocs(query(productRef, where(documentId(), 'in', ids)));
            const { docs } = productsFromFirestore;

            const outOfStock = [];
            const batch = writeBatch(db);

            docs.forEach(doc => {
                const dataDoc = doc.data();
                const stockDB = dataDoc.stock;

                const productInCart = cartItems.find(item => item.id === doc.id);
                const productQuantity = productInCart?.quantity;

                if (stockDB >= productQuantity) {
                    batch.update(doc.ref, { stock: stockDB - productQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });

            if (outOfStock.length === 0) {
                await batch.commit();
                const orderRef = collection(db, 'orders');
                const orderAdded = await addDoc(orderRef, objOrder);

                toast.success('¡Compra realizada con exito!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });

                console.log(`El id de su orden es ${orderAdded.id}`);
                clearCart();
                setOrderCreated(true);
            } else {
                toast.error('Algunos productos están fuera de stock.', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                console.log('Hay productos que están fuera de stock');
            }
        } catch (error) {
            toast.error('Error al crear la orden. Inténtalo nuevamente.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            console.log('Error al crear la orden:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <h1 className="text-center mt-5">Se está generando la orden...</h1>;
    }

    if (orderCreated) {
        return <h1 className="text-center mt-5">¡La orden fue creada correctamente!</h1>;
    }

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Información del Comprador</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        value={buyer.firstName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Apellido</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        value={buyer.lastName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Teléfono</label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={buyer.phone}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Dirección</label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        value={buyer.address}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={createOrder}>
                    Finalizar Compra
                </button>
            </form>
        </div>
    );
};

export default Checkout;
