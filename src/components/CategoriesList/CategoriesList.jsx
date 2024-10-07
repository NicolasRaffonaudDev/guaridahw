/* aca trabajamos las categorias */
/* const categories = ['processors','motherboards','storage','memory','video cards','monitors','peripherals'] */

const categories = [
  { id:1, name:'processors', img: "../src/assets/procesadores-logo.webp"},
  { id:2, name:'motherboard', img: "../src/assets/placaMadre-logo.webp"},
  { id:3, name:'graphics_card', img: "../src/assets/gpu-logo-1.webp"},
  { id:4, name:'memory', img: "../src/assets/ram-logo-1.webp"},
  { id:5, name:'storage', img: "../src/assets/ssd-logo.webp"},
  { id:6, name:'monitor', img: "../src/assets/monitor-logo.webp"},
  { id:7, name:'power_supply', img: "../src/assets/Perifericos-logo.png"},
  { id:8, name:'cooling', img: "../src/assets/Perifericos-logo.png"},
  { id:9, name:'case', img: "../src/assets/Perifericos-logo.png"},
  ]

function CategoriesList() {
  return (
    <>
      <ul className="list-group list-group-horizontal d-flex justify-content-around">{categories.map(( category ) => (
        <li className="list-group-item mt-5" key={category.id}>
          <a href="#">
            <img style={{width:100}} src={category.img} alt={category.name} />
            </a>
          </li>
      ))
      }
      </ul>
      
    </>
  )
}

export default CategoriesList