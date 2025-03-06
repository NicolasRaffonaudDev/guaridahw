import { useParams } from "react-router-dom";
import { getProductById } from '../../services/firebase/firestore/products';
import { FaSpinner } from "react-icons/fa";
import useAsync from "../../hooks/useAsync";
import ItemDetail from '../ItemDetail/ItemDetail';
import CategoriesList from '../CategoriesList/CategoriesList';

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const asyncFunction = () => getProductById( productId );
  const { data: product, loading, error } = useAsync(asyncFunction, [productId]);

  if(loading) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center bg-light">
            <FaSpinner className="text-primary mb-4" style={{ fontSize: "4rem", animation: "spin 1s linear infinite" }} />
            <h1 className="text-primary">Cargando producto...</h1>
            <p className="text-muted mt-3">
              Por favor, espera un momento mientras preparamos los mejores productos para ti.
            </p>
          </div>
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