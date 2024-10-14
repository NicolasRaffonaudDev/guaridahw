import Item from "../Item/Item"

const ItemList = ({products}) => {
    
  return (
    <div className="container d-flex flex-wrap justify-content-between">
        {products.map( (product)=>            
            <Item product={product} key={product.id}/>            
        )}
    </div>
  )
}

export default ItemList