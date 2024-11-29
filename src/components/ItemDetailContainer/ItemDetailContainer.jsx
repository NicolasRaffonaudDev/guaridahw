import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebase';
import CategoriesList from '../CategoriesList/CategoriesList';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState()
  const { productId } = useParams()

  useEffect(() => {
    getDoc(doc(db, "products", productId))
      .then((querySnapshot) => {
        const product = {id: querySnapshot.id, ...querySnapshot.data()}
        setProduct(product);
      })
      .catch((err) => console.log(err));

  }, [productId]);

  return (
    <>
      <CategoriesList />
      {product ? <ItemDetail {...product} /> : <p>Cargando...</p>}
    </>
  )
}

export default ItemDetailContainer