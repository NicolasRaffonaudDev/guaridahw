import { useParams } from "react-router-dom";
import { useAsync } from '../../hooks/useAsync';
import { getProductById } from '../../services/firebase/firestore/products';
import ItemDetail from '../ItemDetail/ItemDetail';
import CategoriesList from '../CategoriesList/CategoriesList';

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const asyncFunction = () => getProductById( productId );
  const { data: product, loading, error } = useAsync(asyncFunction, [productId]);

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
      {product ? <ItemDetail {...product} /> : <p>Cargando...</p>}
    </>
  )
}

export default ItemDetailContainer