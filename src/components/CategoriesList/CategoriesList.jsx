/* aca trabajamos las categorias */
/* const categories = ['processors','motherboards','storage','memory','video cards','monitors','peripherals'] */

const categories = [
  { id:1, name:'processors', img: ""},
  { id:2, name:'motherboards', img: ""},
  { id:3, name:'storage', img: ""},
  { id:4, name:'memory', img: ""},
  { id:5, name:'video cards', img: ""},
  { id:6, name:'monitors', img: ""},
  { id:7, name:'peripherals', img: ""},
  ]

function CategoriesList() {
  return (
    <>
      <ul className="d-flex justify-content-around">{categories.map(( category ) => (
        <li key={category.id}>{category.name}</li>
      ))
      }
      </ul>
      <h1>Aca va la navegacion de categorias</h1>
    </>
  )
}

export default CategoriesList