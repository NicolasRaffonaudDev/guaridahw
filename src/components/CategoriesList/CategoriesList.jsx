import { Link } from "react-router-dom"
import categoriesData from "../../data/categories.json"

function CategoriesList() {
  return (
    <>
      <div className="container-fluid my-5">
        <div className="row justify-content-center">
          {categoriesData.map(({id, name, img, displayName }) => (
            <div className="mb-3 col-6 col-md-4 col-lg-3" key={id} >
              <div className="card h-100 shadow-sm text-center" style={{maxWidth: 200}}>
                <Link to={`/category/${name}`} className="text-decoration-none" aria-label={`Ver productos de ${displayName}`} >
                  <div className="card-img-top">
                    <img
                      src={img}
                      alt={displayName}
                      className="img-fluid"
                      style={{ width:"100%", height: '80px', objectFit: 'contain' }}
                      loading="lazy"
                    />
                  </div>
                </Link>
                <div className="card-body">
                  <span className="card-title" style={{ fontSize: '0.7rem' }}>{name}</span>
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