/* aca trabajamos las categorias */
const categories = ['processors','motherboards','storage','memory','video cards','monitors','peripherals']

function CategoriesList() {
  return (
    <>
      <ul className="d-flex justify-content-around">{categories.map(( category, index ) => (
        <li key={index}>{category}</li>
      ))
      }
      </ul>
      <h1>Aca va la navegacion de categorias</h1>
    </>
  )
}

export default CategoriesList