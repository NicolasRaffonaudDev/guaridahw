import { memo } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './ProductCard.css'

const ProductCard = ({ product }) => {
  const imageUrl = product.img;
  return (
    <div key={product.id} className="card align-items-center text-center p-3 my-3 product-card" style={{ width: 300 }}>
      <picture>
        <source srcSet={`${imageUrl}?format=webp`} type="image/webp" />
        <LazyLoadImage src={imageUrl} 
        srcSet={`${imageUrl}?w=400 400w, ${imageUrl}?w=800 800w`} 
        sizes="(max-width: 768px) 400px 800px"
        effect="blur" 
        className="card-img-top" 
        style={{ width: 200, height: 200 }} 
        placeholderSrc="/placeholder.jpg" 
        alt={product.name} 
        />
      </picture>
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