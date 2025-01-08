import { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { db } from '../../services/firebase';
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const Checkout = () => {
  const { cartItems, cartCount, clearCart } = useCart();
  const [buyer, setBuyer] = useState({ firstName: '', lastName: '', phone: '', address: '' });
  const [loading, setLoading] = useState(false);
  const [orderCreated, setOrderCreated] = useState(false);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBuyer((prev) => ({ ...prev, [name]: value }));
  };

  const createOrder = async () => {
    setLoading(true);
    try {
      const objOrder = {
        buyer,
        items: cartItems,
        totalQuantity: cartCount,
        total,
        date: new Date(),
      };

      const ids = cartItems.map((item) => item.id);
      const productRef = collection(db, 'products');
      const productsFromFirestore = await getDocs(query(productRef, where(documentId(), 'in', ids)));
      const { docs } = productsFromFirestore;

      const outOfStock = [];
      const batch = writeBatch(db);

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDB = dataDoc.stock;

        const productInCart = cartItems.find((item) => item.id === doc.id);
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

        toast.success('¡Compra realizada con éxito!', {
          position: 'top-right',
          autoClose: 3000,
        });

        clearCart();
        setOrderCreated(true);
      } else {
        toast.error('Algunos productos están fuera de stock.', {
          position: 'top-right',
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error('Error al crear la orden. Inténtalo nuevamente.', {
        position: 'top-right',
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const confirmPurchase = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas completar tu compra?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, completar compra',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        createOrder();
        Swal.fire('¡Confirmado!', 'Tu orden está siendo procesada.', 'success');
      }
    });
  };

  if (loading) {
    return <h1 className="text-center mt-5">Se está generando la orden...</h1>;
  }

  if (orderCreated) {
    return <h1 className="text-center mt-5">¡La orden fue creada correctamente!</h1>;
  }

  return (
    <div className="container d-flex justify-content-center align-items-center my-5">
      <div
        className="p-4 shadow-lg rounded-3 bg-white"
        style={{ maxWidth: '500px', width: '100%' }}
      >
        <h2 className="text-center mb-4">Información del Comprador</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              Nombre
            </label>
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
            <label htmlFor="lastName" className="form-label">
              Apellido
            </label>
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
            <label htmlFor="phone" className="form-label">
              Teléfono
            </label>
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
            <label htmlFor="address" className="form-label">
              Dirección
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={buyer.address}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary decorative w-100 mt-3"
            onClick={confirmPurchase}
          >
            Finalizar Compra
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
