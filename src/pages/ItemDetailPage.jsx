import { useParams } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import useProduct from "../hooks/useProduct";
import ItemDetail from '../components/ItemDetail/ItemDetail';
import CategoriesList from '../components/CategoriesList/CategoriesList';


const ItemDetailPage = () => {
  const { productId } = useParams();
  const { product, loading, error } = useProduct(productId);

  if(loading) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center">
            <FaSpinner className="text-light mb-4" style={{ fontSize: "4rem", animation: "spin 1s linear infinite" }} />
            <h1 className="text-light">Cargando producto...</h1>
            <p className="text-light mt-3">
              Por favor, espera un momento mientras preparamos los mejores productos para ti.
            </p>
          </div>
    );
  }

  if(error) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center bg-light">
        <h1 className="text-danger">Error al cargar el producto</h1>
        <p className="text-muted mt-3">{error.message}</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center bg-light">
        <h1 className="text-warning">Producto no encontrado</h1>
        <p className="text-muted mt-3">El producto que buscas no está disponible.</p>
      </div>
    );
  }

  return (
    <div>
      <ItemDetail {...product} />
      <CategoriesList />
    </div>
  )
}

export default ItemDetailPage;