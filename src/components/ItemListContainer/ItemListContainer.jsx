import { useEffect, useState } from 'react'
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        getProducts().then((res)=>{
            setProducts(res)
        })
    }, [])
  return (
    <div>
        <h1>aca van todos los productos</h1>
        <ItemList />
    </div>
  )
}

export default ItemListContainer