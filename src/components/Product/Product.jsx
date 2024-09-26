function Product(data) {
    return (
      <div className="text-center p-3 ¿">
        <h2>{data.name}</h2>
        <img width="300" src={data.img} alt={data.name} />
        <p>Price: ${data.price}</p>
      </div>
    )
  }

  export default Product