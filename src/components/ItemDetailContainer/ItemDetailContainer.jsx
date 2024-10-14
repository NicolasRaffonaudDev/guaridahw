import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { getProductById } from "../../asyncMock"
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState() 
  const { productId } = useParams()
  
  useEffect(() =>{
    getProductById(productId)
        .then((res) => {
          console.log("Producto obtenido:", res);
          setProduct(res);
          
        })
        .catch((err) => console.log("no"));

  }, [productId]);
  
  console.log("Estado del producto:", product);
  
  return (
    <>
      {product ? <ItemDetail {...product} /> : <p>Cargando...</p>}
    </>
  )
}

export default ItemDetailContainer