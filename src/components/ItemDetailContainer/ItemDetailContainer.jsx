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
          setProduct(res);          
        })
        .catch((err) => console.log(err));

  }, [productId]);
  
  return (
    <>
      {product ? <ItemDetail {...product} /> : <p>Cargando...</p>}
    </>
  )
}

export default ItemDetailContainer