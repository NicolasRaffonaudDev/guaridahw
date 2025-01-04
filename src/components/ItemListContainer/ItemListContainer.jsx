import { useParams } from 'react-router-dom'
import { getProducts } from '../../services/firebase/firestore/products';
import { useAsync } from '../../hooks/useAsync';
import ItemList from '../ItemList/ItemList'
import CategoriesList from '../CategoriesList/CategoriesList'

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const asyncFunction = () => getProducts(categoryId);

  const {data: products, loading, error} = useAsync(asyncFunction, [categoryId]);

  if(loading) {
    return (
      <h1>Cargando productos</h1>
    );
  }

  if(error) {
    return (
      <h1>Error al cargar productos</h1>
    );
  }
  
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
        <ItemList products={products} />
      </div>
    </>
  )
}

export default ItemListContainer