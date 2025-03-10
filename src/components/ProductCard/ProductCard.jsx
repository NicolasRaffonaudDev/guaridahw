import { memo } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProductCard = ({ product }) => {
  return (
    <div key={product.id} className="card align-items-center text-center p-3 my-3" style={{ width: 300 }}>
      <LazyLoadImage src={product.img} style={{ width: 200, height: 200 }} alt={product.name} effect="blur" className="card-img-top" placeholderSrc="/placeholder.jpg" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <h2 className="card-text">$ {product.price}</h2>
        <Link to={`/detail/${product.id}`} aria-label={`Ver detalles de ${product.name}`} className="btn btn-primary decorative">
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default memo(ProductCard);