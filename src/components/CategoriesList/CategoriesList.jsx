import { Link } from "react-router-dom"

const categories = [
  { id:1, name:'processor', img: "../src/assets/procesadores-logo.webp"},
  { id:2, name:'motherboard', img: "../src/assets/placaMadre-logo.webp"},
  { id:3, name:'graphics_card', img: "../src/assets/gpu-logo-1.webp"},
  { id:4, name:'memory', img: "../src/assets/ram-logo-1.webp"},
  { id:5, name:'storage', img: "../src/assets/ssd-logo.webp"},
  { id:6, name:'monitor', img: "../src/assets/monitor-logo.webp"},
  { id:7, name:'power_supply', img: "../src/assets/icon-power-supply-2.webp"},
  { id:8, name:'cooling', img: "../src/assets/icon-cooling.webp"},
  { id:9, name:'case', img: "../src/assets/icon-case-2.jpg"},
  ]

function CategoriesList() {
  return (
    <>
      <div className="container-fluid my-5">
        <div className="row justify-content-center">
          {categories.map((category) => (
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4" key={category.id}>
              <div className="card text-center p-3">
                <Link to={`/category/${category.name}`}>
                  <img 
                    className="card-img-top img-fluid" 
                    src={category.img} 
                    alt={category.name} 
                    style={{ height: '100px', objectFit: 'contain' }} 
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: '1rem' }}>{category.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>      
    </>
  )
}

export default CategoriesList