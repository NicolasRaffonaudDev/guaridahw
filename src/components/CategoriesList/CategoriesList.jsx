import { Link } from "react-router-dom";
import categoriesData from "../../data/categories.json";
import "./CategoriesList.css"

function CategoriesList() {
  return (
    <>
      <div className="container-fluid my-5">
        <div className="row justify-content-center">
          {categoriesData.map(({id, name, img, displayName }) => (
            <div className="my-3 col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3 d-flex justify-content-center" key={id} >
              <div className="card h-100 shadow-lg text-center" style={{minWidth:250 ,maxWidth: 400}}>
                <Link to={`/category/${name}`} className="text-decoration-none" aria-label={`Ver productos de ${displayName}`} >
                  <div className="card-img-top p-2">
                    <img
                      src={img}
                      alt={displayName}
                      className="img-fluid"
                      style={{ width:"100%", height: '65px', objectFit: 'contain' }}
                      loading="lazy"
                    />
                  </div>
                </Link>
                <div className="card-body">
                  <span className="card-title fs-6 fw-bold text-dark">{displayName}</span>
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