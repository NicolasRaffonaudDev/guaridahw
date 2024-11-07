function Product(data) {
  return (
    <div className="text-center p-3">
      <h2 className="fw-bold m-2 p-3">{data.name}</h2>
      <img width="300" height="250" src={data.img} alt={data.name} />
      <p className="m-3 bg-dark text-success fs-3 fw-bold p-2">$ {data.price}</p>
    </div>
  )
}

export default Product