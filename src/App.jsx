import { useState } from "react"
import NavBar from "./components/NavBar/NavBar"
import Featured from "./components/ProductsList/ProductsList"
import CategoriesList from "./components/CategoriesList/CategoriesList";


function App() {

  const [cartCount, setCartCount] = useState(0);

  let [valor, setValor] = useState(0);
  console.log(setValor)
  console.log(valor)

  return (
    <>
      <NavBar cartCount={cartCount} title="NGR Technical Computer"/>
      <CategoriesList/>
      <Featured />
    </>
  )
}

export default App
