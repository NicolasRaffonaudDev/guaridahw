import { useEffect, useState } from 'react'
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        getProducts().then((res)=>{
            setProducts(res)
            console.log(res)
        })
    }, [])
  return (
    <div className='text-center'>
        <div className="jumbotron jumbotron-fluid">
          <div className="container-mdfluid text-center text-dark mx-3 my-5 p-4 bg-warning fw-bold">
            <h1 className="display-md-4">STOCK COMPLETO</h1>
            <p className="lead">Mira este increible catalogo lleno de componentes!</p>
          </div>
        </div>
        <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer