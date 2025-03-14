import CategoriesList from "../CategoriesList/CategoriesList";
import ProductCard from "../ProductCard/ProductCard";

const ItemList = ({ products }) => {

  return (
    <div>
      
      <div className="container d-flex flex-wrap col-12">
        {products.map((product) =>
          <ProductCard product={product} key={product.id} />
        )}
      </div>
    </div>
  )
}

export default ItemList;