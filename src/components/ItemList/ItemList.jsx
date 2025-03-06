import ProductCard from "../ProductCard/ProductCard";

const ItemList = ({ products }) => {

  return (
    <div className="container d-flex flex-wrap justify-content-between">
      {products.map((product) =>
        <ProductCard product={product} key={product.id} />
      )}
    </div>
  )
}

export default ItemList;