const categories = [
  { id:1, name:'processors', img: "../src/assets/procesadores-logo.webp"},
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
      <div className="container-fluid col-12 col-sm-8 col-xxl-8 flex-nowrap d-flex justify-content-around">
            <ul className="list-group list-group-horizontal flex-wrap justify-content-around">{categories.map(( category ) => (
              <li className="list-group-item mt-5" key={category.id}>
                <a href="#">
                  <img style={{width:150}} className="" src={category.img} alt={category.name} />
                  </a>
                </li>
            ))
            }
            </ul>
      </div>      
    </>
  )
}

export default CategoriesList