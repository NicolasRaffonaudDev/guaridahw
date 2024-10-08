import Item from "../Item/Item"

const ItemList = ({products}) => {
    
  return (
    <div className="container d-flex flex-wrap justify-content-between">
        {products.map( (product)=>
            
            <Item product={product} key={product.id}/>
            
        )}
        <h1>ItemList</h1>
    </div>
  )
}

export default ItemList