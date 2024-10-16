import { useEffect, useState } from 'react'
import { getProductByCategory, getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import CategoriesList from '../CategoriesList/CategoriesList'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams();
    useEffect(()=>{
        const asyncFunctions = categoryId ? getProductByCategory : getProducts;
        asyncFunctions(categoryId).then((res)=>{
          setProducts(res);
        }).catch(err => {
            console.error("Error fetching products: ", err);
        });
    }, [categoryId]);
  return (
    <>
      <CategoriesList />
      <div className='text-center'>
        <div className="jumbotron jumbotron-fluid">
          <div className="container-mdfluid text-center text-dark mx-3 my-5 p-4 bg-warning fw-bold">
            <h1 className="display-md-4">STOCK COMPLETO</h1>
            <p className="lead">Mira este increible catalogo lleno de componentes!</p>
          </div>
        </div>
        <ItemList products={products}/>
      </div>
    </>
  )
}

export default ItemListContainer