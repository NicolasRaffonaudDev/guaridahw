import { useState } from 'react'
import { useCart } from '../../hooks/useCart';
import { db } from '../../services/firebase';
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore';

const ProfCheckout = () => {
    const [loading, setLoading] = useState(false);
    const [orderCreated, setOrderCreated] = useState(false);
    const { cart, totalQuantity, getTotal } = useCart();
    const total = getTotal();

    const createOrder = async () => {
      setLoading(true);
      try {
        const objOrder = {
          buyer: {
            firstName: "Nicolas",
            lastName: "Raffonaud",
            phone: "1126252321",
            addres: "Toay 5752"
          },
          items: cart,
          totalQuantity,
          total,
          date: new Date()
        }

        const ids = cart.map((item)=> item.id)

        const productRef = collection(db, "products");

        const productsAddedFromFirestore = await getDocs(
          query(productRef, where(documentId(), "in", ids)));
          const { docs } = productsAddedFromFirestore;

          const outOfStock = []
          const batch = writeBatch(db)

          docs.forEach((doc)=>{
            const dataDoc = doc.data()
            const stockDB = dataDoc.stock

            const productAddedToCart = cart.find((prod) => prod.id === doc.id)
            const productQuantity = productAddedToCart?.quantity;

            if(stockDB >= productQuantity){
              batch.update(doc.ref, {stock: stockDB - productQuantity})
            }else{
              outOfStock.push({id: doc.id, ...dataDoc})
            }
          })

          if(outOfStock.length === 0){
            await batch.commit()
            
            const orderRef = collection(db, "orders")
            const orderAdded = await addDoc(orderRef, objOrder)
            console.log(`El id de su orden es ${orderAdded.id}`);
            //limpiar el carrito
            setOrderCreated(true)
          }else {
            console.log("Hay productos que estan fuera de stock")
          }
      }catch(error){
        console.log("error")
      }finally{
        setLoading(false)
      }

      if(loading){
        return <h1>Se esta generando la orden</h1>
      }

      if(orderCreated){
        return <h1>La orden fue creada correctamente</h1>
      }
      
    }
  return (
    <>
      <button onClick={CreateOrder}></button>
    </>
  )
}

export default ProfCheckout