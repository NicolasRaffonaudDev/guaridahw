import { Link } from "react-router-dom"
import imgProcessor from "../../assets/images/procesadores-logo.webp";
import imgMotherboard from "../../assets/images/placaMadre-logo.webp";
import imgGraphicsCard from "../../assets/images/gpu-logo-1.webp";
import imgMemory from "../../assets/images/ram-logo-1.webp";
import imgStorage from "../../assets/images/ssd-logo.webp";
import imgMonitor from "../../assets/images/monitor-logo.webp";
import imgPowerSupply from "../../assets/images/icon-power-supply-2.webp";
import imgCooling from "../../assets/images/icon-cooling.webp";
import imgCase from "../../assets/images/icon-case-2.jpg";

const categories = [
  { id: 1, name: 'processor', img: imgProcessor },
  { id: 2, name: 'motherboard', img: imgMotherboard },
  { id: 3, name: 'graphics_card', img: imgGraphicsCard },
  { id: 4, name: 'memory', img: imgMemory },
  { id: 5, name: 'storage', img: imgStorage },
  { id: 6, name: 'monitor', img: imgMonitor },
  { id: 7, name: 'power_supply', img: imgPowerSupply },
  { id: 8, name: 'cooling', img: imgCooling },
  { id: 9, name: 'case', img: imgCase },
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
    </>
  )
}

export default CategoriesList