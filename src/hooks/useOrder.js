import { useState } from "react";
import { db } from "../services/firebase";
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import { toast } from "react-toastify";

const useOrder = () => {
  const [loading, setLoading] = useState(false);
  const [orderCreated, setOrderCreated] = useState(false);

  const createOrder = async (cartItems, cartCount, total, buyer, clearCart) => {
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
        await addDoc(orderRef, objOrder);

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

  return { createOrder, loading, orderCreated };
};

export default useOrder;