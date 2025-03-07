import { useParams } from 'react-router-dom';
import { getProducts } from '../../services/firebase/firestore/products';
import useAsync from '../../hooks/useAsync';
import { FaSpinner } from "react-icons/fa";
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const asyncFunction = () => getProducts(categoryId);

  const { data: products, loading, error } = useAsync(asyncFunction, [categoryId]);

  if (loading) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center bg-light">
        <FaSpinner className="text-primary mb-4" style={{ fontSize: "4rem", animation: "spin 1s linear infinite" }} />
        <h1 className="text-primary">Cargando productos...</h1>
        <p className="text-muted mt-3">
          Por favor, espera un momento mientras preparamos los mejores productos para ti.
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center bg-light">
        <h1 className="text-danger">Error al cargar productos</h1>
        <p className="text-muted mt-3">{error.message}</p>
      </div>
    );
  }

  return (
    <>
      <div className='text-center mb-5'>
        <div className="jumbotron jumbotron-fluid">
          <div className="container-mdfluid text-center text-dark mx-3 my-5 p-4 bg-warning fw-bold">
            <h1 className="display-md-4">CATALOGO</h1>
            <p className="lead">Mira este increible catalogo lleno de componentes!</p>
          </div>
        </div>
        <ItemList products={products} />
      </div>
    </>
  )
}

export default ItemListContainer;