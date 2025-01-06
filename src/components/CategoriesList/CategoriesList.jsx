import { Link } from "react-router-dom"

const categories = [
  { id: 1, name: 'processor', img: "../src/assets/procesadores-logo.webp" },
  { id: 2, name: 'motherboard', img: "../src/assets/placaMadre-logo.webp" },
  { id: 3, name: 'graphics_card', img: "../src/assets/gpu-logo-1.webp" },
  { id: 4, name: 'memory', img: "../src/assets/ram-logo-1.webp" },
  { id: 5, name: 'storage', img: "../src/assets/ssd-logo.webp" },
  { id: 6, name: 'monitor', img: "../src/assets/monitor-logo.webp" },
  { id: 7, name: 'power_supply', img: "../src/assets/icon-power-supply-2.webp" },
  { id: 8, name: 'cooling', img: "../src/assets/icon-cooling.webp" },
  { id: 9, name: 'case', img: "../src/assets/icon-case-2.jpg" },
]

function CategoriesList() {
  return (
    <>
      <div className="container-fluid my-5">
        <div className="row justify-content-center">
          {categories.map((category) => (
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3" style={{ width: '150px' }} key={category.id}>
              <div className="card text-center">
                <Link to={`/category/${category.name}`}>
                  <img
                    className="card-img-center img-fluid"
                    src={category.img}
                    alt={category.name}
                    style={{ height: '80px', objectFit: 'contain' }}
                  />
                </Link>
                <div className="card-body">
                  <span className="card-title" style={{ fontSize: '0.7rem' }}>{category.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="jumbotron jumbotron-fluid">
          <div className="container-mdfluid text-center text-dark mx-3 my-5 p-4 bg-warning fw-bold">
            <h1 className="display-md-4">STOCK COMPLETO</h1>
            <p className="lead">Mira este increible catalogo lleno de componentes!</p>
          </div>
      </div>
    </>
  )
}

export default CategoriesList